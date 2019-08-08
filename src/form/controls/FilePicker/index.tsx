import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input as InputBootstrap, } from 'reactstrap';
import { FilePickerProps as Props } from './props';
import Control from '../../Control';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperFilePicker = (component: JSX.Element, field: Props) => {

  return component;
};


/**
 * FilePicker render element
 */
const FilePicker = (props: Props) => {
  const { value, ...rest } = props;
  return (
    <Control {...props}>
      <Field
        id={props.name}
        render={({ field }: FieldProps<{}>) => (
          <React.Fragment>
            {wrapperFilePicker(<InputBootstrap type="file" {...rest} />, props)}
          </React.Fragment>
        )}
      />
    </Control>
  )
}

export default FilePicker;
