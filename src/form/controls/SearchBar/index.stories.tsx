import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from './index';
import { Col } from 'reactstrap';
import Form from '../../index'

storiesOf('Forms|SearchBar', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>SearchBar</h4>
        <br />
        <Form>
          {(_) => (
            <SearchBar
              name={'search'}
              placeholder={'search'}
            />
          )}
        </Form>
      </Col>
    </React.Fragment>
  ))
