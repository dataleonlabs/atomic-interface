import React from 'react';
import { ErrorMessage } from 'formik';
import { Label, FormGroup, FormText, FormFeedback } from 'reactstrap';
import { InputProps } from './controls/Input/props';
import Tooltip from '../display/Tooltip';
import { makeId } from '../utils';
import styled from 'styled-components'

export const StyledControl = styled(FormGroup)`
  .WrapperLabel {
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    .Label {
      padding-left: 0;
      padding-right: 0;
      display: inline;
    }
  }
`;


export interface Props extends InputProps {

}

/**
 * Textarea render element
 */
const Control = (props: Props) => {
  const target = makeId(4);
  return (
    <StyledControl inline={props.inline}>
      {props.label && (
        <>
          <div className="WrapperLabel">
            <Label className="Label" id={target} for={props.name} sm={props.labelSize || 12}>
              {props.label} {props.required === true && <span>*</span>}
            </Label>
          </div>
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
    </StyledControl>
  )
}

export default Control;
