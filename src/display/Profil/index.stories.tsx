import React from 'react';
import { storiesOf } from '@storybook/react';
import Profil from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Profil', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Profil</h4>
        <div style={{ width: "100px", textAlign:"center"}}>
          <h6>SM</h6>
          <Profil size="sm" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" /> <br />
          <h6>MD</h6>
          <Profil size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" /> <br />
          <h6>LG</h6>
          <Profil size="lg" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" /> <br />
        </div>
      </Col>
    </React.Fragment>
  ))