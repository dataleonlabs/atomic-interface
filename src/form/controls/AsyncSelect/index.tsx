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

  //const { name, rest } = props;

  /* istanbul ignore next */
  const renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) /* istanbul ignore next  */ => {
    /* istanbul ignore next  */
    const onChangeValue = (evt) => {

      setFieldValue(field.name, evt);

      // if (Array.isArray(evt)) {
      //   let items: string[]; items = [];
      //   evt.map((item) => {
      //     items.push(item.value);
      //   });
      //   setFieldValue(field.name, items);
      // } else {
      //   setFieldValue(field.name, evt.value);
      // }

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
            //{...rest}
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
      //{...rest}
      {...props}
      id={props.name}
      render={renderField}
    />
  )
}

/* istanbul ignore next */
export default AsyncSelect;
