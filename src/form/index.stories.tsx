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
  .add('Form Layout', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - Forms</h2>
        <br/>
        <hr/>
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br/>
        <h4>Form Layout</h4>
        <br/>
        <p>Use custom form layout styles that can be added to element like cards, modals, sidebars or any other elements. Additional utilities classes can be used to vary this layout.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
              <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
              <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
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
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Validation', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Form - Validation</h4>
        <br/>
        <p>Add <code>validationSchema</code> property. It helps with feedback on their form submission before sending it to server.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
              <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
              <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
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
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Select Field', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Form - Select Field</h4>
        <br/>
        <p>Custom select menus need only a select element with meaningful label and content as an option property.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
              <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
              <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  ));