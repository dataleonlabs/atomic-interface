import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput as FilePickerBootstrap, FormText, } from 'reactstrap';
import { FilePickerProps as Props } from './props';
import Control from '../../Control';
import { FormControlHelper } from '../../formControlHelper';

/**
 * FilePicker render element
 */
const FilePicker = (props: Props) => {
  const { value, ...rest } = props;

  /* istanbul ignore next */
  const renderField = ({ field, form: { values, submitCount, errors } }: FieldProps<{}>) => {

    /* istanbul ignore next */
    const objFormControlHelper=new FormControlHelper();

    /* istanbul ignore next */
    if(objFormControlHelper.checkConditional(props.conditionnals, values)){
      return <></>;
    }

    /* istanbul ignore next */
    return (
      <React.Fragment>
        <Control {...props}>
          <FilePickerBootstrap
            {...rest}
            id={props.name}
            type="file"
            invalid={submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
          {submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors[props.name]}</FormText>
          }
        </Control>
      </React.Fragment>
    )
  };

  /* istanbul ignore next */
  return (
    <Field id={props.name} render={renderField} />
  )
}

/* istanbul ignore next */
export default FilePicker;
