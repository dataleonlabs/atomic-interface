import * as React from 'react'
import * as enzyme from 'enzyme'
import FieldArray from './index'
import Form from './../../index'
import Input from '../Input';
import Button from '../Button';
import { XSquare } from 'react-feather';
import { Col, Row } from 'reactstrap';

describe('<FieldArray />', () => {
  it('U-TEST-1 - test FieldArray render', () => {
    const wrapper = enzyme.mount(
      <Form
        initialValues={{ friends: [{ "name": "", "age": "" }] }}
      >
        {({ values }: any) => (
          <FieldArray name="friends">
            {(arrayHelpers) => (
              <>
                {values.friends.map((_: any, index: number) => (
                  <Row key={index}>
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
                      <XSquare onClick={() => arrayHelpers.remove(index)} size={23} />
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
    )
    expect(wrapper.find(Button)).toHaveLength(1)
    expect(wrapper.find(FieldArray)).toHaveLength(1)
    expect(wrapper.find(Input)).toHaveLength(2)
  })
})