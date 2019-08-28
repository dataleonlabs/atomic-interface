import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './index';
import { Col, Button } from 'reactstrap';



storiesOf('UI Elements|Tooltip', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Tooltip</h2>
        <br/>
        <hr/>
        <p>Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage. Read the <a href="https://getbootstrap.com/docs/4.2/components/toasts/" target="blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>Hover over the links below to see tooltips.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Button color="primary" id={'Tooltip-'}>
          Submit button
        </Button>
        <Tooltip target={'Tooltip-'}>
          Tooltip Content!
        </Tooltip>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Button color="primary" id={'Tooltip-'}>
  Submit button
</Button>
<Tooltip target={'Tooltip-'}>
  Tooltip Content!
</Tooltip>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))

