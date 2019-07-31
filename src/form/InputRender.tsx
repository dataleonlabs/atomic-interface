// Render Prop
import React from 'react';
import { Values } from './types'
import { Input, Col, InputGroup, InputGroupAddon } from 'reactstrap';

interface IForm {
  field: { [key: string]: string | number },
  form?: {
    touched: { [key: string]: Values },
    errors: { [key: string]: Values }
  }
}

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperGridCol = (component: JSX.Element, elt: IForm ) => {
  return elt.field.grid ? <Col sm={elt.field.grid}>{component}</Col> : component;
};


/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperInputGroup = (component: JSX.Element, elt: IForm) => {
  if ((elt.field.left || elt.field.right)) {
    return (
      <InputGroup>
        {elt.field.left && <InputGroupAddon addonType="prepend">{elt.field.left}</InputGroupAddon>}
        {component}
        {elt.field.right && <InputGroupAddon addonType="append">{elt.field.right}</InputGroupAddon>}
      </InputGroup>
    );
  }

  return component;
};


/**
 * InputRender render element
 */
const InputRender = ({ field }: IForm) => (
  <React.Fragment>
    {wrapperGridCol(
      wrapperInputGroup(<Input {...field} />, { field })
    , { field })}
  </React.Fragment>
)

export default InputRender;
