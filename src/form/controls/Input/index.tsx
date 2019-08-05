import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { Input as InputBootstrap, Label, FormGroup, InputGroup, InputGroupAddon, FormText, FormFeedback } from 'reactstrap';
import { InputProps as Props } from './props';

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
  <FormGroup inline={props.inline}>
    {props.label && (
      <Label for={props.name} sm={props.labelSize || 12}> {props.label} </Label>
    )}
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
    <ErrorMessage component={FormFeedback} name={props.name} />
    {props.help && <FormText>{props.help}</FormText>}
  </FormGroup>
)

export default Input;
