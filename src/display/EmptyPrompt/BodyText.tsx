import React from 'react';
import { BodyTextProps as Props } from './props';
import { StyledBody } from './style';

/**
 * BodyText
 */

const BodyText = (props: Props) => (
    <StyledBody size={props.size}>
        {props.children}
    </StyledBody>
)

export default BodyText;
