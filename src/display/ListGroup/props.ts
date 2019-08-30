import {
    ListGroupProps as ListGroupPropsBase,
    ListGroupItemProps as ListGroupItemPropsBase,
    ListGroupItemHeadingProps as ListGroupItemHeadingPropsBase,
    ListGroupItemTextProps as ListGroupItemTextPropsBase
} from "reactstrap";

/**
* Tihs component use bootstrap: documentation https://reactstrap.github.io/components/navbar/
* @example
*    <ListGroup>
*        <ListGroupItem>Cras justo odio</ListGroupItem>
*        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
*        <ListGroupItem>Morbi leo risus</ListGroupItem>
*        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
*        <ListGroupItem>Vestibulum at eros</ListGroupItem>
*    </ListGroup>
*/


export interface ListGroupProps extends ListGroupPropsBase {
}

export interface ListGroupItemProps extends ListGroupItemPropsBase {

    /** ListItem on Click */
    onClick?: React.MouseEventHandler<any>
}

export interface ListGroupItemHeadingProps extends ListGroupItemHeadingPropsBase {
}

export interface ListGroupItemTextProps extends ListGroupItemTextPropsBase {
}