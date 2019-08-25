import * as React from 'react'
import { AuthHeaderTitleProps as Props } from '../../../props';
import { StyledCardTitle } from './style';

// Login Form Component
const Title = (props: Props) => {
    return (
        <StyledCardTitle>{props.children}</StyledCardTitle>
    )
}
export default Title;