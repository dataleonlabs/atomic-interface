import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './index';
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

storiesOf('UI Elements|Avatar', module)
  .add('Sizes', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Avatar</h2>
        <br/>
        <p>Avatars are user's face image that you can use throughout the design from tables to dialog or menus with options for sizes and shapes.</p>
        <hr/>
        <h4>Sizes</h4>
        <br/>
        <p>An avatar can have different sizes like larger and smaller avatar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div style={{ width: "300px", textAlign:"left"}}>
          <Avatar size="sm" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
          <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
          <Avatar size="lg" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
        </div>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />        
        <CodeMirror
          value={`<div style={{ width: "300px", textAlign:"left"}}>
  <Avatar size="sm" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
  <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
  <Avatar size="lg" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
</div>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />        
      </Col>
    </React.Fragment>
  ))
  .add('Shapes', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Avatar - Shapes</h4>
        <br/>
        <p>An avatar can have different shapes by using Bootstrap's border-radius utilities classes.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div style={{ width: "300px", textAlign:"left"}}>
          <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
          <Avatar size="md" className="square" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
        </div>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />        
        <CodeMirror
          value={`<div style={{ width: "300px", textAlign:"left"}}>
  <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
  <Avatar size="md" className="square" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
</div>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  ))
  .add('Initials', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Avatar - Initials</h4>
        <br/>
        <p>An avatar can have a temporary use of user's initial name while their photos are not yet available.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div style={{ width: "300px", textAlign:"left"}}>
          <Avatar size="sm" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
          <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
          <Avatar size="lg" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
        </div>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<div style={{ width: "300px", textAlign:"left"}}>
  <Avatar size="sm" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
  <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
  <Avatar size="lg" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
</div>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  ))
  .add('Abbreviations', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Avatar - Abbreviations</h4>
        <br/>
        <p>An avatar can have a status indicator to indicate users availability.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div style={{ width: "300px", textAlign:"left"}}>
          <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
          <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
        </div>
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<div style={{ width: "300px", textAlign:"left"}}>
  <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
  <Avatar size="md" src="https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246_960_720.jpg" />
</div>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />        
      </Col>
    </React.Fragment>
  ))