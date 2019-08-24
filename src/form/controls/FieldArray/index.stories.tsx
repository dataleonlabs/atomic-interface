import React from 'react';
import { storiesOf } from '@storybook/react';
import FieldArray from './index';
import { Col, Row } from 'reactstrap';
import Form from './../../index'
import Input from '../Input';
import Button from '../Button';
import { XSquare } from 'react-feather';

storiesOf('Forms|FieldArray', module)
  .add('Simple Example', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>FieldArray - Simple Example</h4>
        <Row>
          <Col sm={8} style={{ marginTop: 15 }}>
            <p>
              <code>{'<FieldArray />'}</code> is a component that helps with common array/list manipulations. You pass it a name property with the path to the key within values that holds the relevant array. <code>{'<FieldArray />'}</code> will then give you access to array helper methods via render props. For convenience, calling these methods will trigger validation and also manage touched for you.
          </p>
          </Col>
        </Row>
        <h6>Example</h6>
        <hr />
        <Form
          initialValues={{ friends: [{ "name": "", "age": "" }] }}
        >
          {({ values }: any) => (
            <FieldArray name="friends">
              {(arrayHelpers) => (
                <>
                  {values.friends.map((_: any, index: number) => (
                    <Row>
                      <Col sm={4}>
                        <Input inline={true}
                          name={`friends[${index}].name`}
                          placeholder="First Name and Last Name"
                          help="Example: Gérard TOKO"
                        />
                      </Col>
                      <Col sm={4}>
                        <Input
                          inline={true}
                          name={`friends[${index}].email`}
                          placeholder="Enter your Young App email"
                          rightAddon="@youngapp.co"
                        />
                      </Col>
                      <Col sm={4}>
                        <XSquare onClick={() => arrayHelpers.remove(index)} size={23}/>
                      </Col>
                    </Row>
                  ))}
                  <Row>
                    <Col sm={12} style={{ marginTop: 15 }}>
                      <Button color="primary"
                        onClick={() => arrayHelpers.push({ name: '', age: '' })}
                      >Add</Button>
                      <hr />
                      <pre>
                        <code>values: {JSON.stringify(values)}</code><br />
                      </pre>
                    </Col>
                  </Row>
                </>
              )}
            </FieldArray>
          )}
        </Form>
          <hr/>
          <h6>Code</h6>
          <pre>
            {`
<Form
  initialValues={{ friends: [] }}
>
  {({ values }: any) => (
    <FieldArray name="friends">
      {(arrayHelpers) => (
        <>
          {values.friends.map((_: any, index: number) => (
            <Row>
              <Col sm={4}>
                <Input inline={true}
                  name={"friends[\${index}].name"}
                  placeholder="First Name and Last Name"
                  help="Example: Gérard TOKO"
                />
              </Col>
              <Col sm={4}>
                <Input
                  inline={true}
                  name={"friends[\${index}].email"}
                  placeholder="Enter your Young App email"
                  rightAddon="@youngapp.co"
                />
              </Col>
              <Col sm={4}>
                <Button color="primary" onClick={() => arrayHelpers.remove(index)}>Remove</Button>
              </Col>
            </Row>
          ))}
          <Row>
            <Col sm={12} style={{ marginTop: 30 }}>
              <Button color="primary"
                onClick={() => arrayHelpers.push({ name: '', age: '' })}
              >Add</Button>
              <hr />
              <pre>
                <code>values: {JSON.stringify(values)}</code><br />
              </pre>
            </Col>
          </Row>
        </>
      )}
    </FieldArray>
  )}
</Form>
            `}
          </pre>
      </Col>
    </React.Fragment>
  ))