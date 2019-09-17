import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Radio from '../Radio';
require('codemirror/mode/jsx/jsx');

storiesOf('Forms|Checkbox', module)
  .add('Checkbox', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Checkbox</h4>
        <br />
        <p>For even more customization and cross browser consistency, use our completely custom checkbox element to replace the browser defaults.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <>
              <Checkbox name='gender' label={'Check this custom checkbox'} />
              <Checkbox disabled name='gender2' label={'Or this one (disabled)'} />
              <Checkbox checked name='gender3' label={'Check this custom checkbox (checked)'} />
              <Checkbox disabled checked name='gender4' label={'Or this one (checked and disabled)'} />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Checkbox name='gender' label={'Check this custom checkbox'}/>
<Checkbox disabled name='gender2' label={'Or this one (disabled)'} />
<Checkbox checked name='gender3' label={'Check this custom checkbox (checked)'}/>
<Checkbox disabled checked name='gender4' label={'Or this one (checked and disabled)'} />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Checkbox Conditional', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Checkbox</h4>
        <br />
        <p>For even more customization and cross browser consistency, use our completely custom checkbox element to replace the browser defaults.</p>
        <hr />
        <h6><strong>Example Conditional</strong></h6>
        <hr />
        <Form>
          {(values) => (
            <>
              <Radio value="default" id="default" name='type' label="Default" />
              <Radio value="disabled" id="disabled" name='type' label="Disabled" />

              <Checkbox
                name='gender'
                label={'Check this custom checkbox'}
                conditionnals={{
                  type: 'default'
                }}
              />

              <Checkbox
                disabled name='gender2'
                label={'Or this one (disabled)'}
                conditionnals={{
                  type: 'disabled'
                }}
              />

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

<Checkbox
  name='gender'
  label={'Check this custom checkbox'}
  conditionnals={{
    type: 'default'
  }}
/>

<Checkbox
  disabled name='gender2'
  label={'Or this one (disabled)'}
  conditionnals={{
    type: 'disabled'
  }}
/>
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