import React from 'react';
import { storiesOf } from '@storybook/react';
import ListGroup from './index'
import ListGroupItem from './ListGroupItem'
import ListGroupItemHeading from './ListGroupItemHeading'
import ListGroupItemText from './ListGroupItemText'
import Badge from '../Badge/index';
import { Col } from 'reactstrap';

storiesOf('Forms|ListGroup', module)
    .add('Example', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group</h4>
                <ListGroup>
                    <ListGroupItem>ListGroupItem 1</ListGroupItem>
                    <ListGroupItem>ListGroupItem 2</ListGroupItem>
                    <ListGroupItem>ListGroupItem 3</ListGroupItem>
                    <ListGroupItem>ListGroupItem 4</ListGroupItem>
                    <ListGroupItem>ListGroupItem 5</ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    )).add('With Badge', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group with Badge</h4>
                <ListGroup>
                    <ListGroupItem>ListGroupItem 1 <Badge pill={true}>5</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 2 <Badge pill={true}>20</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 3 <Badge pill={true}>3+</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 4 <Badge pill={true}>40+</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 5 <Badge pill={true}>5</Badge></ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    )).add('With Disabled items', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group With Disabled items</h4>
                <ListGroup>
                    <ListGroupItem disabled tag="a" href="#">ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    )).add('Anchors', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group With Anchors</h4>
                <ListGroup>
                    <ListGroupItem active disabled tag="a" href="#" action>ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="a" href="#" action> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="a" href="#" action> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    )).add('Buttons', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group With Buttons</h4>
                <ListGroup>
                    <ListGroupItem active tag="button" action>ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="button" action> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="button" action> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="button" action> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem disabled tag="button" action> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    )).add('Contextual classes', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group With Contextual classes</h4>
                <ListGroup>
                    <ListGroupItem color="success">ListGroupItem 1</ListGroupItem>
                    <ListGroupItem color="info"> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem color="warning"> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem color="danger"> ListGroupItem 4 </ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    )).add('Custom content', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group With Custom content</h4>
                <ListGroup>
                    <ListGroupItem active>
                        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
                        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
                        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
                        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    )).add('Flush', () => (
        <React.Fragment>
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group With Flush</h4>
                <ListGroup flush>
                    <ListGroupItem disabled tag="a" href="#">ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
            </Col>
        </React.Fragment>
    ));