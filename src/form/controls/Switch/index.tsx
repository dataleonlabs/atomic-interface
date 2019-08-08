import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput } from 'reactstrap';
import { SwitchProps as Props } from './props';
import Control from '../../Control';

/**
 * CheckBox render element
 */
const Switch = (props: Props) => (
  <Control {...props} label={undefined}>
    <Field
      {...props}
      id={props.name}
      render={({ field }: FieldProps<{}>) => (
        <React.Fragment>
          <CustomInput {...field} {...props} id={props.id || props.name} label={props.label} type='switch' />
        </React.Fragment>
      )}
    />
  </Control>
)

export default Switch;
