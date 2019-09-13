import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioCollection from './Collection';
import { Col } from 'reactstrap';
import Form from '../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Switch from '../Switch';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


storiesOf('Forms|Radio Collection', module)
  .add('Collection Rendering', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Radios</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Collection Rendering</h4>
        <br />
        <p>Render a collection by calling the API on selecting the radio input.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
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
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
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
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Conditional Radio Collection', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Radios</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Conditional Radio Collection</h4>
        <br />
        <p>Render a collection by calling the API on selecting the radio input.</p>
        <hr />
        <h6><strong>Conditional Radio Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <>
              <Switch
                id="switch"
                name='switch'
                label="Disabled or Standard"
              />
              <RadioCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Radio Collection"
                name="chk1"
                disabled={true}
                fieldId={{ key: "id", value: "1" }}
                conditionnals={{
                  switch: false
                }}
                fieldUpdate="active">
              </RadioCollection>

              <RadioCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Radio Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                conditionnals={{
                  switch: true
                }}
                fieldUpdate="active">
              </RadioCollection>
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Switch
  id="switch"
  name='switch'
  label="Disabled or Standard"
/>
<RadioCollection
  apiKey="xxx"
  apiUrl="test"
  type="update"
  model="Playlist"
  label="Radio Collection"
  name="chk1"
  disabled={true}
  fieldId={{ key: "id", value: "1" }}
  conditionnals={{
    switch: false
  }}
  fieldUpdate="active">
</RadioCollection>

<RadioCollection
  apiKey="xxx"
  apiUrl="test"
  type="update"
  model="Playlist"
  label="Radio Collection"
  name="chk1"
  fieldId={{ key: "id", value: "1" }}
  conditionnals={{
    switch: true
  }}
  fieldUpdate="active">
</RadioCollection>
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