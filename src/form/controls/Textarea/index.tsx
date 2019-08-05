import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextareaProps as Props } from './props';
import TextareaAutosize from 'react-autosize-textarea';
import Control from '../../Control';

/**
 * Textarea render element
 */
const Textarea = (props: Props) => (
  <Control {...props}>
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
  </Control>
)

export default Textarea;
