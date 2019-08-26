import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Text', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Text</h2>
        <br/>
        <hr/>
        <p>Use the Bootstrap tab javascript plugin to extend navigational tabs and pills to create tabbable panes of local content.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>The basic text component consists of content as a tooltip.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Text tooltip="this is demo of simple text" >
          this is demo of simple text
        </Text>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Text tooltip="this is demo of simple text" >
  this is demo of simple text
</Text>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Help', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Disabled State</h4>
        <br/>
        <p>Add <code>textStyle="help"</code> property to display the content with relevant font style.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Text textStyle="help" capitalizeFirstLetter>
          this is demo of help textstyle
        </Text>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Text textStyle="help" capitalizeFirstLetter>
  this is demo of help textstyle
</Text>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('With help block', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Text</h4>

        <Text textStyle="help" capitalizeFirstLetter>
          this is demo of help textstyle with capitalizeFirstLetter
       </Text>
         Date:
        <Text type="date" format="DD MMM">
          12-03-2014
       </Text>
        <br /> Time ago:
        <Text type="ago">
          12-03-2018
       </Text>
        <br /> Currency:
        <Text type="currency" format="EUR">
          12032018
       </Text>
      </Col>
    </React.Fragment>
  ))

