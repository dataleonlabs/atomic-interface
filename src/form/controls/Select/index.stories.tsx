import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Select', module)
  .add('Example', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Select</h4>
          <Form>
            {(props) => (
              <Select
                isClearable
                creatable
                name={'favorite'}
                meta={{
                  options
                }}
              />
            )}
          </Form>
        </Col>
      </React.Fragment>
    )
  })
  .add('tooltip beside label', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Select Multiple</h4>
          <Form>
            {(props) => (
              <Select
                isClearable
                creatable
                isMulti
                name={'favorite'}
                label="Favorite"
                meta={{
                  options
                }}
              />
            )}
          </Form>
        </Col>
      </React.Fragment>
    )
  })