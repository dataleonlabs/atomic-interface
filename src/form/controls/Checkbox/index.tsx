import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput, FormText } from 'reactstrap';
import { CheckbokProps as Props } from './props';
import Control from '../../Control';

/**
 * CheckBox render element
 */
const CheckBox = (props: Props) => {

  const renderField = ({ field, form: { submitCount, errors } }: FieldProps<{}>) => (
    <React.Fragment>
      <CustomInput
        {...field}
        {...props}
        id={props.id || props.name}
        label={props.label}
        invalid={submitCount > 0 && (errors[props.name] ? true : false)}
        type='checkbox'
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

export default CheckBox;
