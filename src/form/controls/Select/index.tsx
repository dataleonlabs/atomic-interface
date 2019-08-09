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

  return (
    <Control {...props}>
      <Field
        {...props}
        id={props.name}
        render={({ field }: FieldProps<{}>) => (
          <React.Fragment>
            <CustomSelect
              className='react-select-container' and classNamePrefix="react-select"
              {...field}
              options={props.meta.options}
              {...props}
            />
          </React.Fragment>
        )}
      />
    </Control>
  )
}

export default Select;
