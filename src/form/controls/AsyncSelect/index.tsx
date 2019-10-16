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
  const renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) /* istanbul ignore next  */ => {


    if (values[field.name]) {
      if (Array.isArray(values)) {
        let items = {};
        values.map((item) => {
          let pre = { "value": item.value, "label": item.value }
          items = pre;
        });
        setFieldValue(field.name, items);
      } else {
        let pre = { "value": values, "label": values }
        setFieldValue(field.name, pre);
      }
    }


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

    /* istanbul ignore next */
    return (
      <Control name={"as_" + name} {...rest}>
        <React.Fragment>
          <StyledAsyncSelectBase
            name={"as_" + name}
            {...rest}            
            {...field}
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
