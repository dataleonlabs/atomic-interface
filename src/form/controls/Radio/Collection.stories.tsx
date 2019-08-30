import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioCollection from './Collection';
import { Col } from 'reactstrap';
import Form from '../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


storiesOf('Forms|Radio', module)
  .add('Collection Rendering', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Radios</h2>
        <br/>
        <hr/>
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br/>
        <h4>Collection Rendering</h4>
        <br/>
        <p>Render a collection by calling the API on selecting the radio input.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <>
              <RadioCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Radio Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                fieldUpdate="active">
              </RadioCollection>
            </>
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value="<Form>
          {(_) => (
            <>
              <RadioCollection
                apiKey='xxx'
                apiUrl='test'
                type='update'
                model='Playlist'
                label='Radio Collection'
                name='chk1'
                fieldId={{ key: 'id', value: '1' }}
                fieldUpdate='active'>
              </RadioCollection>
            </>
          )}
          </Form>"
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