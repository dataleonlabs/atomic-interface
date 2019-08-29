import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button/index';
import ButtonToolbar from './ButtonToolbar';
import ButtonGroup from './index';
import { Col } from 'reactstrap';
import DropDown from '../../../display/Dropdown/index';
import DropDownItem from '../../../display/Dropdown/DropdownItem';

storiesOf('Forms|ButtonGroup', module)
  .add('Example', () => (
    <React.Fragment>
      <Col md={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h5>ButtonGroup</h5>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Col>
      <Col md={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h5>ButtonGroup Nesting</h5>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <DropDown title="DropDown" caret>
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>            
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>
        </ButtonGroup>
      </Col>
      <Col md={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h5>ButtonGroup with Toolbar</h5>
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>7</Button>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </React.Fragment>
  ));