import React from 'react';
import { Field, FieldProps } from 'formik';
import { InputGroup, FormGroup, FormText } from 'reactstrap';
import { InputProps as Props } from './props';
import Control from '../../Control';
import { StyledInputBootstrap, StyledInputGroupAddonRight, StyledInputGroupAddonLeft } from './style';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperInputGroup = (component: JSX.Element, field: Props) => {
  if ((field.leftAddon || field.rightAddon)) {
    return (
      <InputGroup>
        {field.leftAddon && <StyledInputGroupAddonLeft addonType="prepend"><span className="input-group-text">{field.leftAddon}</span></StyledInputGroupAddonLeft>}
        {component}
        {field.rightAddon && <StyledInputGroupAddonRight addonType="append"><span className="input-group-text">{field.rightAddon}</span></StyledInputGroupAddonRight>}
      </InputGroup>
    );
  }
  return component;
};


/**
 * Input render element
 */
const Input = (props: Props) => {
  const renderField = ({ field, form: { values, submitCount, errors } }: FieldProps<{}>) => {
    const { leftAddon, rightAddon, maxRows, inline, ...rest } = props;

    if (props.conditionnals) {
      for (const key in props.conditionnals) {
        if (props.conditionnals.hasOwnProperty(key)) {
          const element = props.conditionnals[key];
          if (values[key] !== element) {
            return <></>;
          }
        }
      }
    }

    return (
      <FormGroup>
        <Control {...props}>
          {wrapperInputGroup(
            <StyledInputBootstrap
              placeholder={props.placeholder}
              {...rest}
              {...field}
              invalid={submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)}
            />
            , props)}
          {submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors[props.name]}</FormText>
          }

        </Control>
      </FormGroup>
    )
  };

  return (
    <Field
      {...props}
      id={props.name}
      bsSize={props.controlSize || 'md'}
      render={renderField}
    />
  )
}

export default Input;
