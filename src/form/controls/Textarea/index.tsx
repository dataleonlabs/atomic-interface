import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextareaProps as Props } from './props';
import { StyledTextareaAutosize } from './style';
import Control from '../../Control';

/**
 * Textarea render element
 */
const Textarea = (props: Props) => {
  const renderField = ({ field }: FieldProps<{}>) => (
    <StyledTextareaAutosize
      rows={Number(props.rows || 5)}
      maxRows={Number(props.maxRows || 10)}
      className="form-control"
      placeholder={String(props.placeholder || '')}
      {...field}
    />
  );
  return (
    <Control {...props}>
      <Field
        {...props}
        id={props.name}
        bsSize={props.controlSize || 'md'}
        render={renderField}
      />
    </Control>
  )
}

export default Textarea;
