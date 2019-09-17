import React from 'react';
import { storiesOf } from '@storybook/react';
import SwitchCollection from './Collection';
import { Col } from 'reactstrap';
import Form from '../../index'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Radio from '../Radio';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|Switch Collection', module)
  .add('Switch Collection', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Switch</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Switch Collection</h4>
        <br />
        <p>A SwitchCollection has the markup of a whole new element Switch along with calling the APIs.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
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
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
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
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Conditional Switch Collection', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Switch</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Conditional Switch Collection</h4>
        <br />
        <p>A SwitchCollection has the markup of a whole new element Switch along with calling the APIs.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(values) => (
            <>
              <Radio value="light" id="light" name='element' label="Light" />
              <Radio value="fan" id="fan" name='element' label="Fan" />

              <SwitchCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Trun On or Off Fan"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                conditionnals={{
                  element: 'fan'
                }}
                fieldUpdate="active">
              </SwitchCollection>

              <SwitchCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Trun On or Off Light"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                conditionnals={{
                  element: 'light'
                }}
                fieldUpdate="active">
              </SwitchCollection>
              <br /><code>values: {JSON.stringify(values.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Radio value="light" id="light" name='element' label="Light" />
<Radio value="fan" id="fan" name='element' label="Fan" />

<SwitchCollection
  apiKey="xxx"
  apiUrl="test"
  type="update"
  model="Playlist"
  label="Trun On or Off Fan"
  name="chk1"
  fieldId={{ key: "id", value: "1" }}
  conditionnals={{
    element: 'fan'
  }}
  fieldUpdate="active">
</SwitchCollection>

<SwitchCollection
  apiKey="xxx"
  apiUrl="test"
  type="update"
  model="Playlist"
  label="Trun On or Off Light"
  name="chk1"
  fieldId={{ key: "id", value: "1" }}
  conditionnals={{
    element: 'light'
  }}
  fieldUpdate="active">
</SwitchCollection>
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