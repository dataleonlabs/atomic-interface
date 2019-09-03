/* istanbul ignore next */
import React from 'react';
/* istanbul ignore next */
import { ListGroupItemProps as Props } from './props';
/* istanbul ignore next */
import { ListGroupItem as ListGroupItemBase } from 'reactstrap'
/**
 * ListGroupItem render element
 */
const ListGroupItem = (props: Props) /* istanbul ignore next */ => {

/* istanbul ignore next */
    const onClick = () /* istanbul ignore next */ => {
    /* istanbul ignore next */
        if (props.tag === "button") /* istanbul ignore next */ {
            alert(props.children);
        }
    }

/* istanbul ignore next */
    return (
        <ListGroupItemBase {...props} onClick={onClick}>
            {/* {props.children} */}
        </ListGroupItemBase>
    )
}

/* istanbul ignore next */
export default ListGroupItem;