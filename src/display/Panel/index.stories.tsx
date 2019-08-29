import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Panel from './index';


storiesOf('UI Elements|Panel', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Penal</h2>
        <br/>
        <p>Add panel along with the content along with relevant title.</p>
        <br/>
        <hr/>
        <h4>Basic Example</h4>
        <p>Below is the static example of the basic panel.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Panel title="Header title">
          Special Title Treatment
          With supporting text below as a natural lead-in to additional content.
        </Panel>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<Panel title="Header title">
  Special Title Treatment
  With supporting text below as a natural lead-in to additional content.
</Panel>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
