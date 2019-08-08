import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
import { Col } from 'reactstrap';
import { Info, Archive, Coffee } from 'react-feather';

storiesOf('Forms|Button', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button</h4>
        <div>
          <div style={{ marginTop: 30 }}><Button color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="secondary">secondary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="success">success</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="info">info</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="warning">warning</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="danger">danger</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="link">link</Button></div>
        </div>
      </Col>
    </React.Fragment>
  )).add('Test disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button</h4>
        <div>
          <div style={{ marginTop: 30 }}><Button disabled color="primary">primary</Button>{' '}</div>
        </div>
      </Col>
    </React.Fragment>
  )).add('Test outline', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button</h4>
        <div>
          <div style={{ marginTop: 30 }}><Button outline color="primary">primary</Button>{' '}</div>
        </div>
      </Col>
    </React.Fragment>
  )).add('Test size', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button</h4>
        <div>
          <div style={{ marginTop: 30 }}><Button outline size={'lg'} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button outline size={'md'} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button outline size={'sm'} color="primary">primary</Button>{' '}</div>
        </div>
      </Col>
    </React.Fragment>
  )).add('Test block', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button</h4>
        <div>
          <div style={{ marginTop: 30 }}><Button block outline size color="primary">primary</Button>{' '}</div>
        </div>
      </Col>
    </React.Fragment>
  )).add('Test loading', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button</h4>
        <div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} loading={true} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'md'} loading={true} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} loading={true} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} loading={true} color="warning">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'md'} loading={true} color="warning">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} loading={true} color="warning">primary</Button>{' '}</div>
        </div>
      </Col>
    </React.Fragment>
  )).add('Test with icon left', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button</h4>
        <div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} icon={<Info />} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} icon={<Info />} color="warning">primary</Button>{' '}</div>

          <div style={{ marginTop: 30 }}><Button size={'md'} outline icon={<Archive size={18} />} color="danger">important</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} outline icon={<Archive size={18} />} color="danger">important</Button>{' '}</div>

          <div style={{ marginTop: 30 }}><Button size={'md'} icon={<Coffee />} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'md'} icon={<Coffee />} color="warning">primary</Button>{' '}</div>

          <div style={{ marginTop: 30 }}><Button size={'sm'} icon={<Info size={18} />} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} icon={<Info size={18} />} color="warning">primary</Button>{' '}</div>
        </div>
      </Col>
    </React.Fragment>
  ));