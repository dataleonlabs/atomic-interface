import React from 'react';
import { Field, FieldProps } from 'formik';
import { Button, FormGroup,Spinner } from 'reactstrap';
import { ButtonProps as Props } from './props';
import Control from '../../Control';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperInputGroup = (component: JSX.Element, field: Props) => {

    return (
      <FormGroup >
      
        {component}
        {field.renderspinner && <Spinner size="sm" color="primary" />}

      </FormGroup>
    );
};


/**
 * CheckBox render element
 */
const ButtonComponent = (props: Props) => (
  <Control {...props}>
    <Field
      {...props}
      id={props.name}
      render={({ field }: FieldProps<{}>) => (
        <React.Fragment
        >
          {wrapperInputGroup(
          <Button 
          title={props.name}
          color="primary"
          disabled={(props.disabled || false)}
          {...field} >{props.name}</Button>, props)}        
        </React.Fragment>
      )}
    />
  </Control>
)

export default ButtonComponent;
