import React from 'react';
import { WellProps as Props } from './props';
import { StyledWell } from './style';


/* istanbul ignore next */
const Well = (props: Props) => (
    <StyledWell >
        {props.children}
    </StyledWell>
)

export default Well;