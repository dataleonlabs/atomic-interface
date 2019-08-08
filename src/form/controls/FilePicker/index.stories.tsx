import React from 'react';
import { storiesOf } from '@storybook/react';
import FilePicker from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|FilePicker', module)
  .add('Example', () => (
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
                onChange={(event) => { props.setFieldValue('image', event.currentTarget.files[0]) }}
              />
              <button type="submit" >Submit</button>
            </>
          )}
        </Form>
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
              <button type="submit" >Submit</button>
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
              <button type="submit" >Submit</button>
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
              <button type="submit" >Submit</button>
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  ))