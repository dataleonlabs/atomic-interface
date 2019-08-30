import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|Checkbox', module)
  .add('Checkbox', () => (
    <React.Fragment>
        <Col sm={8} style={{marginTop: 30, marginLeft: 30 }}>
          <h2>Form Elements</h2>
          <br/>
          <hr/>
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br/>
          <h4>Checkbox</h4>
          <br/>
          <p>For even more customization and cross browser consistency, use our completely custom checkbox element to replace the browser defaults.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Form>
            {(_) => (
              <>
                <Checkbox name='gender' label={'Check this custom checkbox'}/>
                <Checkbox disabled name='gender2' label={'Or this one (disabled)'} />
                <Checkbox checked name='gender3' label={'Check this custom checkbox (checked)'}/>
                <Checkbox disabled checked name='gender4' label={'Or this one (checked and disabled)'} />
              </>
            )}
          </Form>
          <br/>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value="<Form>
            {(_) => (
              <>
                <Checkbox name='gender' label={'Check this custom checkbox'}/>
                <Checkbox disabled name='gender2' label={'Or this one (disabled)'} />
                <Checkbox checked name='gender3' label={'Check this custom checkbox (checked)'}/>
                <Checkbox disabled checked name='gender4' label={'Or this one (checked and disabled)'} />
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