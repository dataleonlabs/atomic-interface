/* istanbul ignore next */
import React from 'react';
import { Field, FieldProps } from 'formik';
import { AsyncSelectProps as Props } from './props';
import Control from '../../Control';
import { StyledAsyncSelectBase } from './style'
import { FormText } from 'reactstrap';
import { FormControlHelper } from '../../formControlHelper';

/**
 * Select render element
 */

/* istanbul ignore next */
const AsyncSelect = (props: Props) => {

  /* istanbul ignore next */
  const renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) /* istanbul ignore next  */ => {
    /* istanbul ignore next  */
    const onChangeValue = (evt) => {
      if (Array.isArray(evt)) {
        setFieldValue(field.name, evt);
      } else {
        setFieldValue(field.name, evt);
      }
    }

    /* istanbul ignore else */
    const objFormControlHelper = new FormControlHelper();
    if (objFormControlHelper.checkConditional(props.conditionnals, values)) {
      return <></>;
    }

    /* istanbul ignore next */
    return (
      <Control {...props}>
        <React.Fragment>
          <StyledAsyncSelectBase
            {...props}
            {...field}
            isDisabled={props.readOnly}
            onChange={onChangeValue}
          />
          {/* istanbul ignore next  */ submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors[props.name]}</FormText>
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

/* istanbul ignore next */
export default AsyncSelect;
