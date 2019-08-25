/* istanbul ignore next  */
import * as React from 'react'
/* istanbul ignore next  */
import { AuthHeaderSubTitleProps as Props } from '../../props';
/* istanbul ignore next  */
import { StyledCardSubTitle } from './style';

// SubTitle Form Component
/* istanbul ignore next  */
const SubTitle = (props: Props) => /* istanbul ignore next  */ {
    return (
        <StyledCardSubTitle>{props.children}</StyledCardSubTitle>
    )
}

/* istanbul ignore next  */
export default SubTitle;