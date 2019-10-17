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

  const { name, ...rest } = props;

  /* istanbul ignore next */
  const renderField = ({ field, form: { touched, values, submitCount, errors, setFieldValue } }: FieldProps<{}>) /* istanbul ignore next  */ => {

    /* istanbul ignore next  */
    const onChangeValue = (evt) => {
      if (Array.isArray(evt)) {
        let items: string[]; items = [];
        evt.map((item) => {
          items.push(item.value);
        });
        setFieldValue(name, items);
      } else {
        setFieldValue(name, evt.value);
      }
    }

    /* istanbul ignore else */
    const objFormControlHelper = new FormControlHelper();
    if (objFormControlHelper.checkConditional(props.conditionnals, values)) {
      return <></>;
    }

    let value = field.value;
    
    if (Object.keys(touched).length === 0) {
      if (Array.isArray(values[name])) {
        let val: string[]; val = [];
        values[name].map((item) => {
          value = (props.defaultOptions ? /* istanbul ignore next  */ props.defaultOptions.find(/* istanbul ignore next  */(option: any) => /* istanbul ignore next  */ option.value === item) : '') as any
          val.push(value);
        });
        value = val;
      }else{
        value = (props.defaultOptions ? /* istanbul ignore next  */ props.defaultOptions.find(/* istanbul ignore next  */(option: any) => /* istanbul ignore next  */ option.value === values[name]) : '') as any
      }
    }

    /* istanbul ignore next */
    return (
      <Control name={"as_" + name} {...rest}>
        <React.Fragment>
          <StyledAsyncSelectBase
            name={"as_" + name}
            {...field}
            value={value}
            {...rest}
            isDisabled={props.readOnly}
            onChange={onChangeValue}
          />
          {/* istanbul ignore next  */ submitCount > 0 && /* istanbul ignore next  */ (errors["as_" + name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors["as_" + name]}</FormText>
          }
        </React.Fragment>
      </Control>
    )
  }
  return (
    <Field
      name={"as_" + name}
      {...rest}
      id={"as_" + name}
      render={renderField}
    />
  )
}

/* istanbul ignore next */
export default AsyncSelect;
