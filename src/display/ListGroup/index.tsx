import React from 'react';
import { ListGroupProps as Props } from './props';
import { ListGroup as ListGroupBase } from 'reactstrap'

/* istanbul ignore next */
const ListGroup = (props: Props) => {
    return (
        <ListGroupBase {...props}>
            {props.children}
        </ListGroupBase>
    )
}

export default ListGroup;