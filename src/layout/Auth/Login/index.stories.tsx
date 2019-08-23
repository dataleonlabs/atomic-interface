import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './index';
import Header from '../components/Header/Header';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';
import { Col, Container, Row} from 'reactstrap';
import { type } from 'os';
import { placeholder } from '@babel/types';

storiesOf('Layout|Auth', module)
  .add('Example with Default Props', () => (
    <React.Fragment>
      <Container fluid={true} style={{backgroundColor: "#f8fafb", height: 850}}>
        <Row>
          <Col md={3}></Col>
          <Col md={6} style={{ margin: 10 }}>
            <Login>
              <Header>
                <HeaderTitle>Sign in</HeaderTitle>
                <HeaderSubTitle>Please login to account with your credentials</HeaderSubTitle>
              </Header>
            </Login>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </React.Fragment>
  ));