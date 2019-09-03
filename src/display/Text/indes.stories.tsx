import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

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
        <CodeMirror
          value={`<Text tooltip="this is demo of simple text" >
  this is demo of simple text
</Text>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />
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
        <CodeMirror
          value={`<Text textStyle="help" capitalizeFirstLetter>
  this is demo of help textstyle
</Text>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />        
      </Col>
    </React.Fragment>
  ))
  .add('Help Block', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Help Block</h4>
        <br/>
        <p>Add <code>textStyle={`"help"`}</code> property to display the content with relevant font style.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
<Text textStyle="help" capitalizeFirstLetter>
  this is demo of help textstyle with capitalizeFirstLetter
</Text>
Date:
<Text type="date" format="DD MMM">
    12-03-2014
</Text>
Time ago:
<Text type="ago">
    12-03-2018
</Text>
Currency:
<Text type="currency" format="EUR">
    12032018
</Text>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        /> 
      </Col>
    </React.Fragment>
  ))

