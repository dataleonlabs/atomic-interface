import * as React from 'react'
import * as enzyme from 'enzyme'
import Textarea from './index'
import Form from './../../index'
import TextareaAutosize from 'react-autosize-textarea';
import { Label } from 'reactstrap';

describe('<Textarea />', () => {
  it('U-TEST-1 - Max Rows', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Textarea name='text' required={true} help="text help" />
        )}
      </Form>
    )
    expect(wrapper.find(TextareaAutosize)).toHaveLength(1)
    expect(wrapper.find(Label)).toHaveLength(0)
    expect(wrapper.text()).toContain('text help')
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
  })
})