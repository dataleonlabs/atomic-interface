import React from 'react';
import { Field, FieldProps } from 'formik';
import { SelectProps as Props } from './props';
import Control from '../../Control';
import { StyledSelectBase, StyledCreatableSelect } from './style'

/**
 * Select render element
 */
const Select = (props: Props) => {
  const CustomSelect: React.ReactType = props.creatable ? StyledCreatableSelect : StyledSelectBase;
  const renderField = ({ field }: FieldProps<{}>) => (
    <React.Fragment>
      <CustomSelect
        className='react-select-container' and={true} classNamePrefix="react-select"
        {...field}
        options={props.meta.options}
        {...props}
      />
    </React.Fragment>
  )
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
