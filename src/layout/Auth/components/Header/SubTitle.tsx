import * as React from 'react'
import { AuthHeaderSubTitleProps as Props } from '../../../props';
import { StyledCardSubTitle } from './style';

// SubTitle Form Component
const SubTitle = (props: Props) => {
    return (
        <StyledCardSubTitle>{props.children}</StyledCardSubTitle>
    )
}
export default SubTitle;