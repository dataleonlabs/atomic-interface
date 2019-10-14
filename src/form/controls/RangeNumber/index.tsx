/* istanbul ignore next  */
import React from 'react';
import { Field, FieldProps } from 'formik';
import { FormGroup, FormText } from 'reactstrap';
import { RangeNumberProps as Props } from './props';
import Control from '../../Control';
import { FormControlHelper } from '../../formControlHelper';
import { StyledInputBootstrap } from './style'

/**
 * Input render element
 */

/* istanbul ignore next  */
const RangeNumber = (props: Props) => {

  const { minPlaceholder, maxPlaceholder, name,nameMin,nameMax, ...rest } = props;

  /* istanbul ignore next  */
  const renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) => {

    /* istanbul ignore next  */
    const changeValueMin = (evt) => {
      let val = { [nameMin]: evt.target.value, [nameMax]: values[name] && values[name][nameMax] }
      setFieldValue(name, val);
    }

    /* istanbul ignore next  */
    const changeValueMax = (evt) => {
      let val = { [nameMin]: values[name] && values[name][nameMin], [nameMax]: evt.target.value }
      setFieldValue(name, val);
    }

    const objFormControlHelper = new FormControlHelper();

    /* istanbul ignore else  */
    if (objFormControlHelper.checkConditional(props.conditionnals, values)) {
      return <></>;
    }

    return (
      <FormGroup>
        <Control name={"default_" + name} {...rest}>
          <StyledInputBootstrap
            {...field}
            {...rest}
            type="number"
            onChange={changeValueMin}
            name={nameMin}
            id={nameMin}
            value={values[name] && values[name][nameMin]}
            placeholder={minPlaceholder}
          />
          <StyledInputBootstrap
            {...field}
            {...rest}
            type="number"
            onChange={changeValueMax}
            name={nameMax}
            id={nameMax}
            value={values[name] && values[name][nameMax]}
            placeholder={maxPlaceholder}
          />
          {
            submitCount > 0 && /* istanbul ignore next  */ (errors["default_" + name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors["default_" + name]}</FormText>
          }
        </Control>
      </FormGroup >
    )
  }

  return (

    <Field
      {...rest}
      name={"default_" + name}
      id={"default_" + name}
      bsSize={props.controlSize || 'md'}
      render={renderField}
    />
  )

}
export default RangeNumber;
