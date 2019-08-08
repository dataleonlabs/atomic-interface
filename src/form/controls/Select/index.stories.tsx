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
                isMulti
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
  }).add('With Group', () => {
    const colourOptions = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    const flavourOptions = [
      { value: 'vanilla', label: <strong>vanilla</strong>, rating: 'safe' },
      { value: 'chocolate', label: 'Chocolate', rating: 'good' },
      { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
      { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
    ];
    const groupedOptions = [
      {
        label: 'Colours',
        options: colourOptions,
      },
      {
        label: 'Flavours',
        options: flavourOptions,
      },
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
                isMulti
                name={'favorite'}
                meta={{
                  options: groupedOptions
                }}
              />
            )}
          </Form>
        </Col>
      </React.Fragment>
    )
  })
