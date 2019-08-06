import React from 'react';
import { Tooltip as StrapTooltip } from 'reactstrap';
import { TooltipProps as Props } from './props';

/**
 * Tooltip render element
 */

const Tooltip = (props: Props) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  function toggle() {
    setTooltipOpen(!tooltipOpen)
  }
  return (
    <StrapTooltip
      isOpen={tooltipOpen}
      toggle={toggle}
      placement="right"
      {...props}
    >
      {props.children}
    </StrapTooltip>
  )
}

export default Tooltip;
