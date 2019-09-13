import React from 'react';
import { storiesOf } from '@storybook/react';
import FilePicker from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
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


storiesOf('Forms|File Browser', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>File Browser - Basic Example</h4>
        <br />
        <p>The file input is the most generaly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Picture and selected file name text.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <>
              <FilePicker
                name={'image'}
                label={'Picture'}
                onChange={(event) => {
                  if (event.currentTarget.files) {
                    props.setFieldValue('image', event.currentTarget.files[0])
                  }
                }}
              />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<FilePicker
  name={'image'}
  label={'Picture'}
  onChange={(event) => {
    if (event.currentTarget.files) {
      props.setFieldValue('image', event.currentTarget.files[0])
    }
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
  )).add('Multiple', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>File Browser - Multiple</h4>
        <br />
        <p>Add property <code>multiple</code> to the FilePicker which will allow to select multiple files for upload.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <>
              <FilePicker
                name={'image'}
                label={'Picture'}
                multiple
                onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
              />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<FilePicker
  name={'image'}
  label={'Picture'}
  multiple
  onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
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
  )).add('Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>File Browser - Disabled</h4>
        <br />
        <p>Add property <code>disabled</code> to the FilePicker which will disable the whole FilePicker element.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <>
              <FilePicker
                name={'image'}
                label={'Picture'}
                disabled
                onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
              />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<FilePicker
  name={'image'}
  label={'Picture'}
  disabled
  onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
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
  )).add('Tooltip', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>File Browser - Tooltip</h4>
        <br />
        <p>Add property <code>tooltip={`{'select picture'}`}</code> to the FilePicker which display the inside content on hovering the label.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <>
              <FilePicker
                name={'image'}
                label={'Here you can choose file'}
                tooltip={'select picture'}
                onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
              />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<FilePicker
  name={'image'}
  label={'Here you can choose file'}
  tooltip={'select picture'}
  onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
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
  )).add('With Conditional', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30, marginBottom: 30 }}>
        <h4>File Browser - With Conditional</h4>
        <br />
        <p>Add property <code>conditionnals</code> to the FilePicker which display the inside content on hovering the label.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <>
              <Radio value="company" id="company" name='account' label="Iam a company" />
              <Radio value="person" id="person" name='account' label="Iam a person" />
              <FilePicker
                name={'image'}
                label={'Choose Company Certification'}
                tooltip={'select proof'}
                onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
                conditionnals={{
                  account: 'company'
                }}
              />
              <FilePicker
                name={'image'}
                label={'Choose Personal Passport'}
                tooltip={'select proof'}
                onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
                conditionnals={{
                  account: 'person'
                }}
              />
              <code>values: {JSON.stringify(props.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Radio value="company" id="company" name='account' label="Iam a company" />
<Radio value="person" id="person" name='account' label="Iam a person" />
<FilePicker
  name={'image'}
  label={'Choose Company Certification'}
  tooltip={'select proof'}
  onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
  conditionnals={{
    account: 'company'
  }}
/>
<FilePicker
  name={'image'}
  label={'Choose Personal Passport'}
  tooltip={'select proof'}
  onChange={(event) => { props.setFieldValue('image', event.currentTarget.files) }}
  conditionnals={{
    account: 'person'
  }}
/>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ));