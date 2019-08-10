import * as React from 'react';
import { HelpCircle } from 'react-feather';
import Popover from './../Popover';
import { makeId } from '../../utils';
const HelpIcon = (props) => {
    const target = `help-icon${makeId(2)}`;
    return (React.createElement("span", null,
        React.createElement(HelpCircle, { id: target, size: 17 }),
        React.createElement(Popover, Object.assign({}, props, { target: target }), props.children)));
};
export default HelpIcon;
//# sourceMappingURL=index.js.map