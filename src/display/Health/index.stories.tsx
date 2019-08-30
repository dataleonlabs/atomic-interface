import React from 'react';
import { storiesOf } from '@storybook/react';
import Health from './index';
import { Col } from 'reactstrap';
import Spacer from '../Spacer/index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


storiesOf('UI Elements|Health', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={11} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Health</h4>
        <p>The <b>Health</b> component should be used when showing comparitive health of listed objects (like servers, nodes, indexes..etc). Because icons are vague and bulky and color alone does not work, we think color plus text provides a recognizable, lightweight combo that works in most situations.</p>
        <hr />
        <Spacer size="md" />
        <Health size="sm" color="failure">Failure</Health>
        <Spacer size="sm" />
        <Health size="sm" color="healthy">Healthy</Health>
        <Spacer size="sm" />
        <Health size="sm" color="warning">Warning</Health>
        <Spacer size="sm" />
        <Health size="sm" color="unknown">Unknown</Health>
        <Spacer size="sm" />
        <Health size="sm" color="info">Information</Health>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>        
        <hr/>         
        <CodeMirror
          value='<Spacer size="md" />
          <Health size="sm" color="failure">Failure</Health>
          <Spacer size="sm" />
          <Health size="sm" color="healthy">Healthy</Health>
          <Spacer size="sm" />
          <Health size="sm" color="warning">Warning</Health>
          <Spacer size="sm" />
          <Health size="sm" color="unknown">Unknown</Health>
          <Spacer size="sm" />
          <Health size="sm" color="info">Information</Health>'
          options={{
            mode: 'jsx',
            lineNumbers: true,
            smartIndent: true,
            readOnly: true            
          }}
          editorDidMount={editor => {            
            reindent(editor);
          }}
        />    
      </Col>
    </React.Fragment>
  ))

