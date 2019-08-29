import React from 'react';
import { TitleProps as Props } from './props';
import { StyledTitle } from './style';

/**
 * Title
 */

const Title = (props: Props) => (  
    <StyledTitle size={props.size}>{props.children}</StyledTitle>
)

export default Title;
