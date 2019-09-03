import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|Switch', module)
  .add('Basic Example', () => (
    <React.Fragment>
        <Col sm={8} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Basic Example</h4>
          <br/>
          <p>A switch has the markup of a whole new element Switch.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Form>
            {(_) => (
              <>
                <Switch name='switch' label="Turn on this custom switch"/>
                <Switch name='switch1' checked label="Turn on this custom switch"/>
              </>
            )}
          </Form>
          <br/>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr/>
          <CodeMirror
            value={`
<Switch name='switch' label='Turn on this custom switch'/>
<Switch name='switch1' checked label='Turn on this custom switch'/>
`}
            options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
            }}
          />
        </Col>
    </React.Fragment>
  )).add('Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Switch - Disabled</h4>
        <br/>
        <p>Switches also support the disabled attribute just add <code>disabled={`{true}`}</code> property.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <>
              <Switch name='switch' label="Can't click this label to turn on!" disabled={true} />
              <Switch name='switch' label="Can't click this label to turn on!" disabled={true} checked/>
            </>
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
            value={`
<Switch name='switch' label='Can not click this label to turn on!' disabled={true} />
<Switch name='switch' label='Can not click this label to turn on!' disabled={true} checked/>
`}
            options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
            }}
          />
      </Col>
    </React.Fragment>
  ));