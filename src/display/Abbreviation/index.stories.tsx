import React from 'react';
import { storiesOf } from '@storybook/react';
import Abbreviation from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Abbreviation', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Abbreviation</h2>
        <br/>
        <p>Avatars are user's face image that you can use throughout the design from tables to dialog or menus with options for sizes and shapes.</p>
        <br/>
        <hr/>
        <h4>Basic Example</h4>
        <p>An avatar can have a temporary use of user's initial name while their photos are not yet available.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <p><Abbreviation>Demo Of Alert</Abbreviation></p>
        <p><Abbreviation>Demo Box</Abbreviation></p>
        <p><Abbreviation>Demo Alert</Abbreviation></p>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<p><Abbreviation>Demo Of Alert</Abbreviation></p>
<p><Abbreviation>Demo Box</Abbreviation></p>
<p><Abbreviation>Demo Alert</Abbreviation></p>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))