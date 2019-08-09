import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import Button from './../Button'
import { User } from 'react-feather';
// import { User } from 'react-feather';

storiesOf('Forms|Input', module)
  .add('Example', () => (
    <React.Fragment>
        <Col sm={4} style={{marginTop: 30, marginLeft: 30 }}>
          <h4>Input</h4>
        <Form>
          {(props) => (
            <Input name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'}/>
          )}
        </Form>
        </Col>
    </React.Fragment>
  )).add('With left and right', () => (
    <React.Fragment>
      <Col sm={5} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Input</h4>
        <Form>
          {(props) => (
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
      </Col>
    </React.Fragment>
  )).add('With error', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Input</h4>
        <Form>
          {(props) => (
            <Input error={true} name={'fullName'} label={'Full Name'} placeholder={'First Name and Last Name'} help={'Example: Gérard TOKO'} />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ));