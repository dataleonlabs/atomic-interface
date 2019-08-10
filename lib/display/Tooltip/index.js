import React from 'react';
import { Tooltip as StrapTooltip } from 'reactstrap';
/**
 * Tooltip render element
 */
const Tooltip = (props) => {
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
    /* istanbul ignore next  */
    function toggle() {
        setTooltipOpen(!tooltipOpen);
    }
    return (React.createElement(StrapTooltip, Object.assign({ isOpen: tooltipOpen, toggle: toggle, placement: "right" }, props), props.children));
};
export default Tooltip;
//# sourceMappingURL=index.js.map