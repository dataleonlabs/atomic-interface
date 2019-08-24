import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Avatar', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Avatar</h4>
        <div style={{ width: "100px", textAlign:"center"}}>
          <h6>SM</h6>
          <Avatar size="sm" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" /> <br />
          <h6>MD</h6>
          <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" /> <br />
          <h6>LG</h6>
          <Avatar size="lg" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" /> <br />
        </div>
      </Col>
    </React.Fragment>
  ))