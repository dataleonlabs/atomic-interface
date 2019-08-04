// Render Prop
import React from 'react';
import { IForm, Values } from '../../types'
import { wrapperGridCol } from '../../helpers'
import { Input as InputBootstrap, InputGroup, InputGroupAddon } from 'reactstrap';


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
const Input = ({ field }: IForm) => (
  <React.Fragment>
    {wrapperGridCol(
      wrapperInputGroup(<InputBootstrap {...field as Values } />, { field })
    , { field })}
  </React.Fragment>
)

export default Input;
