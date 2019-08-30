import React from 'react';
import { ListGroupItemHeadingProps as Props } from './props';
import { ListGroupItemHeading as ListGroupItemHeadingBase } from 'reactstrap'
/**
 * ListGroupItemHeading render element
 */
const ListGroupItemHeading = (props: Props) => {
    return (
        <ListGroupItemHeadingBase {...props}>
            {/* {props.children} */}
        </ListGroupItemHeadingBase>
    )
}

export default ListGroupItemHeading;