import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './index';
import Body from './Body';
import Header from '../components/Header/Header';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';
import { Col, Container, Row } from 'reactstrap';

storiesOf('Auth|Login', module)
  .add('Example With Default Props', () => (
    <React.Fragment>
      <Container fluid={true} style={{ backgroundColor: "#f8fafb", height: 850 }}>
        <Row>
          <Col md={3}></Col>
          <Col md={6} style={{ margin: 10 }}>
            <Login>
              <Header>
                <HeaderTitle>Sign in</HeaderTitle>
                <HeaderSubTitle>Please sign in to your personal account.</HeaderSubTitle>
              </Header>
              <Body></Body>
            </Login>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </React.Fragment>
  )).add('Example with Custom Props', () => (
    <React.Fragment>
      <Container fluid={true} style={{ backgroundColor: "#f8fafb", height: 850 }}>
        <Row>
          <Col md={3}></Col>
          <Col md={6} style={{ margin: 10 }}>
            <Login>
              <Header>
                <HeaderTitle>Sign in</HeaderTitle>
                <HeaderSubTitle>Please sign in to your personal account.</HeaderSubTitle>
              </Header>
              <Body color={'success'} buttonLable={'Login'} usernameLabel={'Username'} passwordLabel={'Your Password'} passwordPlaceholder={'Enter Your Password'} usernamePlaceholder={'Enter Your Email'}></Body>
            </Login>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </React.Fragment>
  ));