import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './controls/Input/index';
import { Col } from 'reactstrap';
import Form from './index';
import Button from './controls/Button'
import * as Yup from 'yup';
import Select from './controls/Select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  website: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  favorite: Yup.string()
    .required('Required'),
});

storiesOf('Forms|Form', module)
  .add('Example with default value', () => (
    <React.Fragment>
      <Col sm={12} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Form</h4>
        <Form
          initialValues={{ name: 'Gérard TOKO' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, isSubmitting, handleSubmit }) => (
            <>
              <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <Input name={'name'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
                <Input
                  name={'email'} label={'Email'} placeholder={'Enter your Young App email'}
                  rightAddon={'@youngapp.co'}
                />
                <Input
                  name={'website'} label={'Website'} placeholder={'Your website'}
                  leftAddon={'https://'}
                />
                <Button color="primary" disabled={isSubmitting} loading={isSubmitting}>Submit</Button>
              </Col>
              <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <hr />
                <pre>
                  <code>values: {JSON.stringify(values)}</code><br />
                  <code>errors: {JSON.stringify(errors)}</code><br />
                  <code>touched: {JSON.stringify(touched)}</code><br />
                </pre>
              </Col>
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('With validation', () => (
    <React.Fragment>
      <Col sm={12} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Form</h4>
        <Form
          initialValues={{ name: 'Gérard TOKO' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched }) => (
            <>
              <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <Input name={'name'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
                <Input
                  name={'email'} label={'Email'} placeholder={'Enter your Young App email'}
                  rightAddon={'@youngapp.co'}
                />
                <Input
                  name={'website'} label={'Website'} placeholder={'Your website'}
                  leftAddon={'https://'}
                />
                <Button color="primary">Submit</Button>
              </Col>
              <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <hr />
                <pre>
                  <code>values: {JSON.stringify(values)}</code><br />
                  <code>errors: {JSON.stringify(errors)}</code><br />
                  <code>touched: {JSON.stringify(touched)}</code><br />
                </pre>
              </Col>
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  )).add('With select field', () => (
    <React.Fragment>
      <Col sm={12} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Form</h4>
        <Form
          initialValues={{ name: 'Gérard TOKO' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched }) => (
            <>
              <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <Input name={'name'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
                <Input
                  name={'email'} label={'Email'} placeholder={'Enter your Young App email'}
                  rightAddon={'@youngapp.co'}
                />
                <Input
                  name={'website'} label={'Website'} placeholder={'Your website'}
                  leftAddon={'https://'}
                />
                <Select
                  name={'favorite'}
                  label={'Favorite'}
                  placeholder={'Select your favorite...'}
                  options={options}
                />
                <Button color="primary">Submit</Button>
              </Col>
              <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <hr />
                <pre>
                  <code>values: {JSON.stringify(values)}</code><br />
                  <code>errors: {JSON.stringify(errors)}</code><br />
                  <code>touched: {JSON.stringify(touched)}</code><br />
                </pre>
              </Col>
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));