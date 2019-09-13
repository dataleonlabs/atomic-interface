import React from 'react';
import { WellProps as Props } from './props';
import { StyledWell } from './style';


/* istanbul ignore next */
const Well = (props: Props) => {
    return (
        <div>
            <h2>{props.heading}</h2>
            <StyledWell >
                {props.children}
            </StyledWell>
        </div>
    )
}

export default Well;