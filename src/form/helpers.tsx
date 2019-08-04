// Render Prop
import React from 'react';
import { IForm } from './types'
import { Col } from 'reactstrap';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
export const wrapperGridCol = (component: JSX.Element, elt: IForm ) => {
  return elt.field.grid ? <Col sm={elt.field.grid}>{component}</Col> : component;
};