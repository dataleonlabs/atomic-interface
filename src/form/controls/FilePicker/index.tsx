import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput as FilePickerBootstrap, } from 'reactstrap';
import { FilePickerProps as Props } from './props';
import Control from '../../Control';

/**
 * FilePicker render element
 */
const FilePicker = (props: Props) => {
  const { value, ...rest } = props;
  const renderField = (_: FieldProps<{}>) => (
    <React.Fragment>
      <FilePickerBootstrap {...rest} id={props.name} type="file" />
    </React.Fragment>
  );

  return (
    <Control {...props}>
      <Field id={props.name} render={renderField} />
    </Control>
  )
}

export default FilePicker;
