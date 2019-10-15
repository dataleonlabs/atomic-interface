import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput, FormText } from 'reactstrap';
import { SwitchProps as Props } from './props';
import Control from '../../Control';
import { FormControlHelper } from '../../formControlHelper';

/**
 * CheckBox render element
 */
/* istanbul ignore next */
const Switch = (props: Props) => {
  const renderField = ({ field, form: { values, submitCount, errors } }: FieldProps<{}>) => {

    /* istanbul ignore next */
    const objFormControlHelper=new FormControlHelper();

    /* istanbul ignore next */
    if(objFormControlHelper.checkConditional(props.conditionnals, values)){
      return <></>;
    }

    /* istanbul ignore next */
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
  /* istanbul ignore next */
  return (
    <Field
      {...props}
      id={props.name}
      render={renderField}
    />
  )
}

/* istanbul ignore next */
export default Switch;
