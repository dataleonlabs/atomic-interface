import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './index';
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

storiesOf('UI Elements|Badge', module)
  .add('Contextual Variations', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Badge</h2>
        <br/>
        <p>Documentation and examples for badges, our small count and labeling component. Read the <a href="https://getbootstrap.com/docs/4.2/components/badge/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <hr/>
        <h4>Contextual Variations</h4>
        <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <h5><Badge color="primary">Primary</Badge></h5>
        <h5><Badge color="secondary">Secondary</Badge></h5>
        <h5><Badge color="success">Success</Badge></h5>
        <h5><Badge color="danger">Danger</Badge></h5>
        <h5><Badge color="warning">Warning</Badge></h5>
        <h5><Badge color="info">Info</Badge></h5>
        <h5><Badge color="light">Light</Badge></h5>
        <h5><Badge color="dark">Dark</Badge></h5>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />           
        <CodeMirror
          value={`
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>
<Badge color="light">Light</Badge>
<Badge color="dark">Dark</Badge>
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
  .add('Pill Badges', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Pill Badges</h4>
      <br/>
      <p>Use the <code>pill</code> property to make badges more rounded.</p>
      <br/>
      <h6><strong>Example</strong></h6>
      <hr/>
      <h5><Badge color="primary" pill>Primary</Badge></h5>
      <h5><Badge color="secondary" pill>Secondary</Badge></h5>
      <h5><Badge color="success" pill>Success</Badge></h5>
      <h5><Badge color="danger" pill>Danger</Badge></h5>
      <h5><Badge color="warning" pill>Warning</Badge></h5>
      <h5><Badge color="info" pill>Info</Badge></h5>
      <h5><Badge color="light" pill>Light</Badge></h5>
      <h5><Badge color="dark" pill>Dark</Badge></h5>
      <br/>
      <h6><strong>Code</strong></h6>      
      <hr />
        <CodeMirror
          value={`
<Badge color="primary" pill>Primary</Badge>
<Badge color="secondary" pill>Secondary</Badge>
<Badge color="success" pill>Success</Badge>
<Badge color="danger" pill>Danger</Badge>
<Badge color="warning" pill>Warning</Badge>
<Badge color="info" pill>Info</Badge>
<Badge color="light" pill>Light</Badge>
<Badge color="dark" pill>Dark</Badge>
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