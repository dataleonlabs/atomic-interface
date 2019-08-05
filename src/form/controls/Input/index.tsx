import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input as InputBootstrap, InputGroup, InputGroupAddon } from 'reactstrap';
import { InputProps as Props } from './props';
import Control from '../../Control';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperInputGroup = (component: JSX.Element, field: Props) => {
  if ((field.leftAddon || field.rightAddon)) {
    return (
      <InputGroup>
        {field.leftAddon && <InputGroupAddon addonType="prepend">{field.leftAddon}</InputGroupAddon>}
        {component}
        {field.rightAddon && <InputGroupAddon addonType="append">{field.rightAddon}</InputGroupAddon>}
      </InputGroup>
    );
  }
  return component;
};


/**
 * Input render element
 */
const Input = (props: Props) => (
  <Control {...props}>
    <Field
      {...props}
      id={props.name}
      bsSize={props.controlSize || 'md'}
      render={({ field }: FieldProps<{}>) => (
        <React.Fragment>
          {wrapperInputGroup(<InputBootstrap {...field} />, props)}
        </React.Fragment>
      )}
    />
  </Control>
)

export default Input;
