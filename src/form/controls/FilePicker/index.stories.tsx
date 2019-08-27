import React from 'react';
import { storiesOf } from '@storybook/react';
import FilePicker from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|FilePicker', module)
  .add('Basic File Browser', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Basic File Browser</h4>
        <br/>
        <p>The file input is the most generaly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Picture and selected file name text.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
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
            `}
          </pre>
      </Col>
    </React.Fragment>
  )).add('Multiple File Browser', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Multiple File Browser</h4>
        <br/>
        <p>Add property <code>multiple</code> to the FilePicker which will allow to select multiple files for upload.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
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
            `}
          </pre>
      </Col>
    </React.Fragment>
  )).add('Disabled File Browser', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Disabled File Browser</h4>
        <br/>
        <p>Add property <code>disabled</code> to the FilePicker which will disable the whole FilePicker element.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
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
            `}
          </pre>
      </Col>
    </React.Fragment>
  )).add('File Browser with Tooltip', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>File Browser with Tooltip</h4>
        <br/>
        <p>Add property <code>tooltip={`{'select picture'}`}</code> to the FilePicker which display the inside content on hovering the label.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
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
            `}
          </pre>
      </Col>
    </React.Fragment>
  ))