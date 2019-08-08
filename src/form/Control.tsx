import React from 'react';
import { ErrorMessage } from 'formik';
import { Label, FormGroup, FormText, FormFeedback } from 'reactstrap';
import { InputProps } from './controls/Input/props';
import Tooltip from '../display/Tooltip';
import { makeId } from '../utils';


export interface Props extends InputProps {

}

/**
 * Textarea render element
 */
const Control = (props: Props) => {
  const target = makeId(4);
  return (
    <FormGroup inline={props.inline}>
      {props.label && (
        <>
          <Label id={target} for={props.name} sm={props.labelSize || 12}>
            {props.label} {props.required === true && <span>*</span>}
          </Label>
          {props.tooltip &&
            <Tooltip target={target}>
              {props.tooltip}
            </Tooltip>

          }
        </>
      )}
      {props.children}
      <ErrorMessage component={FormFeedback} name={props.name} />
      {props.help && <FormText>{props.help}</FormText>}
    </FormGroup>
  )
}

export default Control;
