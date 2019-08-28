import React from 'react';
import { ActionButtonProps as Props } from './props';
import { StyledActionPanel } from './style';

/**
 * Action Panel
 */

const ActionPanel = (props: Props) => (
    <StyledActionPanel>
        {props.children}
    </StyledActionPanel>
)

export default ActionPanel;
