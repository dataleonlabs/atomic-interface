import React from 'react';
import { Field, FieldProps } from 'formik';
import SelectBase from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { SelectProps as Props } from './props';
import Control from '../../Control';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperSelect = (component: JSX.Element, field: Props) => {
  if (false) {
    return (
      <>
        {component}
      </>
    );
  }
  return component;
};


/**
 * Select render element
 */
const Select = (props: Props) => {
  const CustomSelect:React.ReactType = props.creatable ? CreatableSelect : SelectBase;

  return (
    <Control {...props}>
      <Field
        {...props}
        id={props.name}
        render={({ field }: FieldProps<{}>) => (
          <React.Fragment>
            {wrapperSelect(<CustomSelect {...field} options={props.meta.options} {...props} />, props)}
          </React.Fragment>
        )}
      />
    </Control>
  )
}

export default Select;
