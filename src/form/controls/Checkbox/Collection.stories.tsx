import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckboxCollection from './Collection';
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

storiesOf('Forms|Checkbox Collection', module)
  .add('Checkbox Collection', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Checkbox Collection</h4>
        <br />
        <p>Using checkbox collection one can make API calls on selection of checkbox.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <h4>Checkbox Collection</h4>
        <Form>
          {(_) => (
            <>
              <CheckboxCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Checkbox Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                fieldUpdate="active">
              </CheckboxCollection>
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<CheckboxCollection
  apiKey="xxx"
  apiUrl="test"
  type="update"
  model="Playlist"
  label="Checkbox Collection"
  name="chk1"
  fieldId={{ key: "id", value: "1" }}
  fieldUpdate="active">                
</CheckboxCollection>
    `}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Conditional Checkbox Collection', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Condtional Checkbox Collection</h4>
        <br />
        <p>Using checkbox collection one can make API calls on selection of checkbox.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <h4>Condtional Checkbox Collection</h4>
        <Form>
          {(values) => (
            <>
              <Radio value="default" id="default" name='type' label="Default" />
              <Radio value="disabled" id="disabled" name='type' label="Disabled" />
              <CheckboxCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Checkbox Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                conditionnals={{
                  type: 'default'
                }}
                fieldUpdate="active">
              </CheckboxCollection>

              <CheckboxCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                disabled={true}
                label="Checkbox Collection Disabled"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                conditionnals={{
                  type: 'disabled'
                }}
                fieldUpdate="active">
              </CheckboxCollection>
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
<Radio value="default" id="default" name='type' label="Default" />
<Radio value="disabled" id="disabled" name='type' label="Disabled" />
<CheckboxCollection
  apiKey="xxx"
  apiUrl="test"
  type="update"
  model="Playlist"
  label="Checkbox Collection"
  name="chk1"
  fieldId={{ key: "id", value: "1" }}
  conditionnals={{
    type: 'default'
  }}
  fieldUpdate="active">
</CheckboxCollection>

<CheckboxCollection
  apiKey="xxx"
  apiUrl="test"
  type="update"
  model="Playlist"
  disabled={true}
  label="Checkbox Collection Disabled"
  name="chk1"
  fieldId={{ key: "id", value: "1" }}
  conditionnals={{
    type: 'disabled'
  }}
  fieldUpdate="active">
</CheckboxCollection>
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