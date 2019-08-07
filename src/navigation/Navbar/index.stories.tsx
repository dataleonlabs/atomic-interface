import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './index';
import { Col } from 'reactstrap';
 import {Input,Navbar,NavbarBrand,Button} from 'reactstrap';
storiesOf('Navigation|Navbar', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar</h4>
           <NavBar/>
      </Col>
    </React.Fragment>
 )).add('With searchbar', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar with searchbar</h4>
        <Navbar color="light" light expand="md">
        <Input 
          type="search"
          name="search"
          id="Search"
          placeholder="search"/>
          <NavBar />
        </Navbar>
      </Col>
    </React.Fragment>
  )).add('With right button', () => (
    <React.Fragment>
          <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar with right icon</h4>
        <Navbar color="light">
          <NavBar />
          <Button color="primary">Add</Button>
        </Navbar>
      </Col>
    </React.Fragment>
  
  )).add('With Brand', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar with Brand</h4>
        <Navbar color="light">
        <NavbarBrand href="#">reactstrap</NavbarBrand>

          <NavBar />
        </Navbar>
      </Col>
    </React.Fragment>
  ));