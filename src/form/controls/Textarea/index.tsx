import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextareaProps as Props } from './props';
import { StyledTextareaAutosize } from './style';
import Control from '../../Control';
import { FormText } from 'reactstrap';
import { FormControlHelper } from '../../formControlHelper';

/**
 * Textarea render element
 */
const Textarea = (props: Props) => {
  const renderField = ({ field, form: { values, submitCount, errors } }: FieldProps<{}>) => {

    const objFormControlHelper=new FormControlHelper();
    if(objFormControlHelper.checkConditional(props.conditionnals, values)){
      return <></>;
    }

    return (
      <>
        <Control {...props}>
          <StyledTextareaAutosize
            rows={Number(props.rows || 5)}
            maxRows={Number(props.maxRows || 10)}
            className="form-control"
            placeholder={String(props.placeholder || '')}
            {...field}
          />
          {submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors[props.name]}</FormText>
          }
        </Control>
      </>
    )
  }
  return (
    <Field
      {...props}
      id={props.name}
      bsSize={props.controlSize || 'md'}
      render={renderField}
    />
  )
}

export default Textarea;
