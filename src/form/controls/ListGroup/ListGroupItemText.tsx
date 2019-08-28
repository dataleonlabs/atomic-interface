import React from 'react';
import { ListGroupItemTextProps as Props } from './props';
import { ListGroupItemText as ListGroupItemTextBase } from 'reactstrap'
/**
 * ListGroupItemText render element
 */
const ListGroupItemText = (props: Props) => {
    return (
        <ListGroupItemTextBase {...props}>
            {/* {props.children} */}
        </ListGroupItemTextBase>
    )
}

export default ListGroupItemText;