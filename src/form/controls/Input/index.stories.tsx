import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import Button from './../Button'
import { User, UserPlus } from 'react-feather';
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

storiesOf('Forms|Input', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Input Box</h2>
        <br />
        <hr />
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>A basic form control with disabled and readonly mode.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <Input name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Input name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'}/>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Addon Inputs', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Addon Inputs</h4>
        <br />
        <p>Add <code>Addon</code> property along with the direction indicator like left and right to display the additional content along with input box.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <>
              <Input name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
              <Input
                name={'email'} label={'Email'} placeholder={'Enter your Young App email'}
                rightAddon={'@youngapp.co'}
              />
              <Input
                name={'website'} label={'Website'} placeholder={'Your website'}
                leftAddon={'https://'}
              />
              <div style={{ marginTop: 30 }}><Button icon={<User />} size={'md'} color="primary">Submit user</Button>{' '}</div>
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Input name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
<Input
  name={'email'} label={'Email'} placeholder={'Enter your Young App email'}
  rightAddon={'@youngapp.co'}
/>
<Input
  name={'website'} label={'Website'} placeholder={'Your website'}
  leftAddon={'https://'}
/>
<div style={{ marginTop: 30 }}><Button icon={<User />} size={'md'} color='primary'>Submit user</Button>{' '}</div>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Addon Icon Inputs', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Addon Icon Inputs</h4>
        <br />
        <p>Add <code>Addon</code> property containing icon name as value will add icon. It can be added to both direction left and right.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <Input leftAddon={<UserPlus />} name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Input leftAddon={<UserPlus />} name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Input With Error', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Input With Error</h4>
        <br />
        <p>Add <code>error={`{true}`}</code> property to apply the relevant style.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <Input error={true} name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Input error={true} name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Input Conditionnal Control', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Input With Error</h4>
        <br />
        <p>Add <code>error={`{true}`}</code> property to apply the relevant style.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_, { values }) => (
            <>
              <Radio value="company" name='account' label="Iam a company" />
              <Radio value="person" name='account' label="Iam a person" />
              <Input
                name="company"
                label="Company Name"
                placeholder="Company Name"
                help="Example: Young App"
                conditionnals={{
                  account: 'company'
                }}
              />
              <Input
                name="fullName"
                label="Full Name"
                placeholder="First Name and Last Name"
                help="Example: Gérard TOKO"
                conditionnals={{
                  account: 'person'
                }}
              />
              <pre>
                <code>values: {JSON.stringify(values)}</code><br />
              </pre>
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Input name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
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