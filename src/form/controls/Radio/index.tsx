import React from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput } from 'reactstrap';
import { RadioProps as Props } from './props';
import Control from '../../Control';

/**
 * CheckBox render element
 */
const Radio = (props: Props) => (
  <Control {...props} label={undefined}>
    <Field
      {...props}
      id={props.name}
      render={({ field }: FieldProps<{}>) => (
        <React.Fragment>
          <CustomInput {...field} {...props} id={props.id || props.name} label={props.label} type='radio' />
        </React.Fragment>
      )}
    />
  </Control>
)

export default Radio;
