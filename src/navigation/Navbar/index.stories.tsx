import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './index';
import { Col } from 'reactstrap';
storiesOf('Navigation|Navbar', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar</h4>
           <NavBar
               routeOne="Home"
               routeTwo="Our Mission"
           />
      </Col>
    </React.Fragment>
 )).add('With searchbar', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar with searchbar</h4>
        
        
          <NavBar 
            renderSearch={true}
            routeOne="Home"
            routeTwo="Our Mission"
          />
      
      </Col>
    </React.Fragment>
  )).add('With right button', () => (
    <React.Fragment>
          <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar with right icon</h4>
      
          <NavBar 
            renderRightButton={true} 
            routeOne="Home"
            routeTwo="Our Mission"/>
          
     
      </Col>
    </React.Fragment>
  
  )).add('With Brand', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar with Brand</h4>

       
          <NavBar renderBrand={true} 
            routeOne="Home"
            routeTwo="Our Mission"/>
    
      </Col>
    </React.Fragment>
  ));