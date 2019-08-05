import React from 'react';
import { ErrorMessage } from 'formik';
import { Label, FormGroup, FormText, FormFeedback } from 'reactstrap';
import { InputProps } from './controls/Input/props';


export interface Props extends InputProps {

}

/**
 * Textarea render element
 */
const Control = (props: Props) => (
  <FormGroup inline={props.inline}>
    {props.label && (
      <Label for={props.name} sm={props.labelSize || 12}>
        {props.label} {props.required === true && <span>*</span>}
      </Label>
    )}
    {props.children}
    <ErrorMessage component={FormFeedback} name={props.name} />
    {props.help && <FormText>{props.help}</FormText>}
  </FormGroup>
)

export default Control;
