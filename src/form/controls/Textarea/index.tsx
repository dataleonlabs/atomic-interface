import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { Label, FormGroup, FormText, FormFeedback } from 'reactstrap';
import { TextareaProps as Props } from './props';
import TextareaAutosize from 'react-autosize-textarea';

/**
 * Textarea render element
 */
const Textarea = (props: Props) => (
  <FormGroup inline={props.inline}>
    {props.label && (
      <Label for={props.name} sm={props.labelSize || 12}> {props.label} </Label>
    )}
    <Field
      {...props}
      id={props.name}
      bsSize={props.controlSize || 'md'}
      render={({ field }: FieldProps<{}>) => (
        <TextareaAutosize
          rows={Number(props.rows || 5)}
          maxRows={Number(props.maxRows || 10)}
          className="form-control"
          {...field}
        />
      )}
    />
    <ErrorMessage component={FormFeedback} name={props.name} />
    {props.help && <FormText>{props.help}</FormText>}
  </FormGroup>
)

export default Textarea;
