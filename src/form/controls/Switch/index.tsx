import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput, FormText } from 'reactstrap';
import { SwitchProps as Props } from './props';
import Control from '../../Control';
import { FormControlHelper } from '../../formControlHelper';

/**
 * CheckBox render element
 */
const Switch = (props: Props) => {
  const renderField = ({ field, form: { values, submitCount, errors } }: FieldProps<{}>) => {

    const objFormControlHelper=new FormControlHelper();
    if(objFormControlHelper.checkConditional(props.conditionnals, values)){
      return <></>;
    }

    return (
      <Control {...props} label={undefined}>
        <React.Fragment>
          <CustomInput
            {...field}
            {...props}
            id={props.id || props.name}
            label={props.label}
            invalid={submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)}
            type='switch'
          />
          {submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
            && <FormText color="danger">{errors[props.name]}</FormText>
          }
        </React.Fragment>
      </Control>
    )
  }
  return (
    <Field
      {...props}
      id={props.name}
      render={renderField}
    />
  )
}

export default Switch;
