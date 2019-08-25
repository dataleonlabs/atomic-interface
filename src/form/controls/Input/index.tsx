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
        {field.leftAddon && <StyledInputGroupAddonLeft addonType="prepend">{field.leftAddon}</StyledInputGroupAddonLeft>}
        {component}
        {field.rightAddon && <StyledInputGroupAddonRight addonType="append">{field.rightAddon}</StyledInputGroupAddonRight>}
      </InputGroup>
    );
  }
  return component;
};


/**
 * Input render element
 */
const Input = (props: Props) => {
  const renderField = ({ field, form: { submitCount, errors } }: FieldProps<{}>) => {
    const { leftAddon, rightAddon, maxRows, inline, ...rest } = props;
    return (
      <>
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
      </>
    )
  };
  return (
    <FormGroup>
      <Control {...props}>
        <Field
          {...props}
          id={props.name}
          bsSize={props.controlSize || 'md'}
          render={renderField}
        />
      </Control>
    </FormGroup>
  )
}

export default Input;
