/* istanbul ignore next */
import * as React from 'react'
/* istanbul ignore next */
import { AuthFooterProps as Props } from '../../../props';
/* istanbul ignore next */
import { StyledCardFooter } from './style';

// Login Form Component
/* istanbul ignore next */
const Footer = (props: Props) /* istanbul ignore next */ => {
/* istanbul ignore next */
    return (           
        <StyledCardFooter>{props.children}</StyledCardFooter>
    )
}
/* istanbul ignore next */
export default Footer;