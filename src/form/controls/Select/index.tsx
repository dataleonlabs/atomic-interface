import React from 'react';
import { Field, FieldProps } from 'formik';
import { SelectProps as Props } from './props';
import Control from '../../Control';
import { StyledSelectBase, StyledCreatableSelect } from './style'
import { FormText } from 'reactstrap';
import { Option } from 'react-select/src/filters';

/**
 * Select render element
 */
const Select = (props: Props) => {
  const CustomSelect: React.ReactType = props.creatable ? StyledCreatableSelect : StyledSelectBase;
  const renderField = ({ field, form: { submitCount, errors, setFieldValue } }: FieldProps<{}>) /* istanbul ignore next  */ => {
  /* istanbul ignore next  */
    const onChange = (option: Option) /* istanbul ignore next  */ => /* istanbul ignore next  */ setFieldValue(field.name, option.value);
    return (
      <React.Fragment>
        <CustomSelect
          {...props}
          {...field}
          className='react-select-container'
          classNamePrefix="react-select"
          options={props.options}
          name={field.name}
          value={(props.options ? /* istanbul ignore next  */ props.options.find(/* istanbul ignore next  */ (option: any) => /* istanbul ignore next  */ option.value === field.value) : '') as any}
          onChange={onChange}
          onBlur={field.onBlur}
          invalid={/* istanbul ignore next  */ submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)}
        />
        {/* istanbul ignore next  */ submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
          && /* istanbul ignore next  */ <FormText color="danger">{errors[props.name]}</FormText>
        }
      </React.Fragment>
    )
  }
  return (
    <Control {...props}>
      <Field
        {...props}
        id={props.name}
        render={renderField}
      />
    </Control>
  )
}

export default Select;
