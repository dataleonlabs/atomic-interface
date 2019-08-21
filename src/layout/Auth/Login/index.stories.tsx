import React from 'react';
import { storiesOf } from '@storybook/react';
import ConfrimSignIn from './index';
import Body from './Body';
import Header from '../components/Header/Header';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';
import { Col, Container, Row} from 'reactstrap';

storiesOf('Auth|Confirm Sing In', module)
  .add('Example with Default Props', () => (
    <React.Fragment>
      <Container fluid={true} style={{backgroundColor: "#f8fafb", height: 850}}>
        <Row>
          <Col md={3}></Col>
          <Col md={6} style={{ margin: 10 }}>
            <ConfrimSignIn>
              <Header>
                <HeaderTitle>Confirm Sign in</HeaderTitle>
                <HeaderSubTitle>Please verify your account</HeaderSubTitle>
              </Header>
              <Body></Body>
            </ConfrimSignIn>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </React.Fragment>
  ));