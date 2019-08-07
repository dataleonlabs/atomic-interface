import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input as InputBootstrap, FormGroup, UncontrolledTooltip,Label } from 'reactstrap';
import { RadioProps as Props } from './props';
import Control from '../../Control';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperInputGroup = (component: JSX.Element, field: Props) => {

    return (
      <FormGroup id="uncontrolledTooltip">     
        {component}
        {field.renderlabel && <Label id="uncontrolledTooltip">{field.renderlabel}</Label>}
      </FormGroup>
    );
};


/**
 * Input render element
 */
const Radio = (props: Props) => (
  <Control {...props}>
    <Field
      {...props}
      id="uncontrolledTooltip"
      bsSize={props.controlSize || 'md'}
      render={({ field }: FieldProps<{}>) => (
        <React.Fragment
        >
          {wrapperInputGroup(
          <InputBootstrap 
          type='radio' 
          name={(props.name || "")} 
          disabled={(props.disabled || false)}
          tooltip={(props.tooltip)}
          {...field} />, props)}        
        </React.Fragment>
      )}
    />
     {props.tooltip &&  <UncontrolledTooltip
     modifiers={{preventOverflow: {boundariesElement: 'window'}}} 
          placement="top"
          target="uncontrolledTooltip"
          delay={{ show: 2000, hide: 0 }}
        > Tooltip!
        </UncontrolledTooltip>}
    
  </Control>
)

export default Radio;
