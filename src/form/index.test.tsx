import * as React from 'react'
import * as enzyme from 'enzyme'
import Textarea from './controls/Textarea/index'
import Input from './controls/Input/index'
import Form from './index'
import TextareaAutosize from 'react-autosize-textarea';
import { Label, Form as FormBase } from 'reactstrap';
import { Formik, Field } from 'formik';

describe('<Form />', () => {
  it('U-TEST-1 - With max rows', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Textarea name='text' maxRows={20} />
        )}
      </Form>
    )
    expect(wrapper.find(TextareaAutosize)).toHaveLength(1)
    expect(wrapper.find(Label)).toHaveLength(0)
    expect(wrapper.find(FormBase)).toHaveLength(1)
    expect(wrapper.find(Formik)).toHaveLength(1)
  })

  it('U-TEST-2 - Label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Textarea name='text' maxRows={20} label={'text'} />
        )}
      </Form>
    )
    expect(wrapper.find(TextareaAutosize)).toHaveLength(1)
    expect(wrapper.find(Label)).toHaveLength(1)
    expect(wrapper.find(FormBase)).toHaveLength(1)
    expect(wrapper.find(Formik)).toHaveLength(1)
  })

  it('U-TEST-3 - Multiple Fields', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <>
            <Input name='text' maxRows={20} />
            <Textarea name='text' maxRows={20} label={'text'} />
          </>
        )}
      </Form>
    )
    expect(wrapper.find(TextareaAutosize)).toHaveLength(1)
    expect(wrapper.find(Field)).toHaveLength(2)
    expect(wrapper.find(Input)).toHaveLength(1)
    expect(wrapper.find(Label)).toHaveLength(1)
    expect(wrapper.find(FormBase)).toHaveLength(1)
    expect(wrapper.find(Formik)).toHaveLength(1)
  })
})