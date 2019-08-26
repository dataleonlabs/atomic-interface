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
        <p>Basic File Browser</p>
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
  )).add('With Multiple', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>FilePicker</h4>
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
      </Col>
    </React.Fragment>
  )).add('With Disable', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>FilePicker</h4>
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
      </Col>
    </React.Fragment>
  )).add('With tooltip beside label', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>FilePicker</h4>
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
      </Col>
    </React.Fragment>
  ))