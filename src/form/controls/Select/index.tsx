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
  const renderField = ({ field, form: { submitCount, errors, setFieldValue } }: FieldProps<{}>) => {
    const onChange = (option: Option) => setFieldValue(field.name, option.value);
    return (
      <React.Fragment>
        <CustomSelect
          {...props}
          {...field}
          className='react-select-container'
          classNamePrefix="react-select"
          options={props.options}
          name={field.name}
          value={(props.options ? props.options.find((option: any) => option.value === field.value) : '') as any}
          onChange={onChange}
          onBlur={field.onBlur}
          invalid={submitCount > 0 && (errors[props.name] ? true : false)}
        />
        {submitCount > 0 && (errors[props.name] ? true : false)
          && <FormText color="danger">{errors[props.name]}</FormText>
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
