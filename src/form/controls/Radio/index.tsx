import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput, FormText } from 'reactstrap';
import { RadioProps as Props } from './props';
import Control from '../../Control';

/**
 * CheckBox render element
 */
const Radio = (props: Props) => {
  const renderField = ({ field, form: { submitCount, errors } }: FieldProps<{}>) => (
    <React.Fragment>
      <CustomInput
        {...field}
        {...props}
        id={props.id || props.name}
        label={props.label}
        invalid={submitCount > 0 && (errors[props.name] ? true : false)}
        type='radio'
      />
      {submitCount > 0 && (errors[props.name] ? true : false)
        && <FormText color="danger">{errors[props.name]}</FormText>
      }
    </React.Fragment>
  );


  return (
    <Control {...props} label={undefined}>
      <Field
        {...props}
        id={props.name}
        render={renderField}
      />
    </Control>
  )
}

export default Radio;
