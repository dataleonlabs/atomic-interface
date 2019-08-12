import React from 'react';
import { Label, FormGroup, FormText } from 'reactstrap';
import Tooltip from '../display/Tooltip';
import { makeId } from '../utils';
import styled from 'styled-components';
export const StyledControl = styled(FormGroup) `
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
/**
 * Textarea render element
 */
const Control = (props) => {
    const target = makeId(4);
    return (React.createElement(StyledControl, { inline: props.inline },
        props.label && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "WrapperLabel" },
                React.createElement(Label, { className: "Label", id: target, for: props.name, sm: props.labelSize || 12 },
                    props.label,
                    " ",
                    props.required === true && React.createElement("span", null, "*"))),
            props.tooltip &&
                React.createElement(Tooltip, { target: target }, props.tooltip))),
        props.children,
        props.help && React.createElement(FormText, null, props.help)));
};
export default Control;
//# sourceMappingURL=Control.js.map