import React from 'react';
import { ListGroupItemProps as Props } from './props';
import { ListGroupItem as ListGroupItemBase } from 'reactstrap'
/**
 * ListGroupItem render element
 */
const ListGroupItem = (props: Props) => {

    const onClick = () => {
        if (props.tag === "button") {
            alert(props.children);
        }
    }

    return (
        <ListGroupItemBase {...props} onClick={onClick}>
            {/* {props.children} */}
        </ListGroupItemBase>
    )
}

export default ListGroupItem;