import * as React from 'react'
import * as enzyme from 'enzyme'
import Form from './index'
import { Field } from 'formik';
import { Label, FormGroup, FormText, Col } from 'reactstrap';

describe('<FormLayout />', () => {
  it('U-TEST-1 - renders field component', () => {
    const wrapper = enzyme.mount(
      <Form
        fields={[
          {
            type: 'text', name: 'name-test'
          }
        ]}
      />
    )

    expect(wrapper.find(Field)).toHaveLength(1)
    expect(wrapper.find(Field).props().name).toEqual('name-test')
    expect(wrapper.find(Field).props().type).toEqual('text')
    expect(wrapper.find(Label)).toHaveLength(0)
    expect(wrapper.find(FormGroup)).toHaveLength(1)
    expect(wrapper.find(FormText)).toHaveLength(0)
  })

  it('U-TEST-2 - renders label and help component', () => {
    const wrapper = enzyme.mount(
      <Form
        fields={[
          {
            type: 'text', name: 'name-test',
            label: 'label', help: 'help'
          }
        ]}
      />
    )

    expect(wrapper.find(Label)).toHaveLength(1)
    expect(wrapper.find(FormGroup)).toHaveLength(1)
    expect(wrapper.find(FormText)).toHaveLength(1)
  })

  it('U-TEST-3 - hidden label', () => {
    const wrapper = enzyme.mount(
      <Form
        fields={[
          {
            type: 'text', name: 'name-test',
            label: 'label', help: 'help', hideLabel: true
          }
        ]}
      />
    )

    expect(wrapper.find(Label)).toHaveLength(0)
    expect(wrapper.find(FormGroup)).toHaveLength(1)
    expect(wrapper.find(FormText)).toHaveLength(1)
    expect(wrapper.find(Field).props().type).toEqual('text')
  })

  it('U-TEST-4 - test grid input', () => {
    const wrapper = enzyme.mount(
      <Form
        fields={[
          {
            type: 'text', name: 'name-test',
            label: 'label', help: 'help', hideLabel: true, labelGrid: 4, inputGrid: 10, grid: 6
          }
        ]}
      />
    )

    expect(wrapper.find(Label)).toHaveLength(0)
    expect(wrapper.find(FormGroup)).toHaveLength(1)
    expect(wrapper.find(FormText)).toHaveLength(1)
    expect(wrapper.find(Field).props().name).toEqual('name-test')
    expect(wrapper.find(Col)).toHaveLength(1)
  })
})