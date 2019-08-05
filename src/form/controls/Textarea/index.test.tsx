import * as React from 'react'
import * as enzyme from 'enzyme'
import Textarea from './index'
import Form from './../../index'
import TextareaAutosize from 'react-autosize-textarea';
import { Label } from 'reactstrap';

describe('<Textarea />', () => {
  it('U-TEST-1 - testarea render with max rows', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Textarea name='text' maxRows={20}/>
        )}
      </Form>
    )
    expect(wrapper.find(TextareaAutosize)).toHaveLength(1)
    expect(wrapper.find(Label)).toHaveLength(0)
  })

  it('U-TEST-2 - testarea with label', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <Textarea name='text' maxRows={20} label={'text'} />
        )}
      </Form>
    )
    expect(wrapper.find(TextareaAutosize)).toHaveLength(1)
    expect(wrapper.find(Label)).toHaveLength(1)
  })
})