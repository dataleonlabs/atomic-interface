import React from 'react';
import { storiesOf } from '@storybook/react';
import SwitchCollection from './Collection';
import { Col } from 'reactstrap';
import Form from '../../index'
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
  .add('Switch Collection', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Switch</h2>
        <br/>
        <hr/>
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br/>
        <h4>Switch Collection</h4>
        <br/>
        <p>A SwitchCollection has the markup of a whole new element Switch along with calling the APIs.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <>
              <SwitchCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Switch Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                fieldUpdate="active">
              </SwitchCollection>
            </>
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<Form>
          {(_) => (
            <>
              <SwitchCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Switch Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                fieldUpdate="active">
              </SwitchCollection>
            </>
          )}
          </Form>`}
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