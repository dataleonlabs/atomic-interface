import React from 'react';
import { storiesOf } from '@storybook/react';
import NewPassword from './index';
import Body from './Body';
import Header from '../components/Header/Header';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';
import { Col, Container, Row} from 'reactstrap';

storiesOf('Auth|New Password', module)
  .add('Example with Default Props', () => (
    <React.Fragment>
      <Container fluid={true} style={{backgroundColor: "#f8fafb", height: 850}}>
        <Row>
          <Col md={3}></Col>
          <Col md={6} style={{ margin: 10 }}>
            <NewPassword>
              <Header>
                <HeaderTitle>New Password</HeaderTitle>
                <HeaderSubTitle>Create new password for your account</HeaderSubTitle>
              </Header>
              <Body></Body>
            </NewPassword>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </React.Fragment>
  ));