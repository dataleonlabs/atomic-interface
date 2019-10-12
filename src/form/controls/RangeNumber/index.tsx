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

const RangeNumber = (props: Props) => {

  const { minPlaceholder, maxPlaceholder, name, ...rest } = props;

  const renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) => {

    const changeValueMin = (evt) => {
      let val = { min: evt.target.value, max: values[name] && values[name]['max'] }
      setFieldValue(name, val);
    }

    const changeValueMax = (evt) => {
      let val = { min: values[name] && values[name]['min'], max: evt.target.value }
      setFieldValue(name, val);
    }

    const objFormControlHelper = new FormControlHelper();
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
            name={"min"}
            id={"min"}
            value={values[name] && values[name]['min']}
            placeholder={minPlaceholder}
          />
          <StyledInputBootstrap
            {...field}
            {...rest}
            type="number"
            onChange={changeValueMax}
            name={"max"}
            id={"max"}
            value={values[name] && values[name]['max']}
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
