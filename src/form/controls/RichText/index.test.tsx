import * as React from 'react'
import * as enzyme from 'enzyme'
import RichText from './index';
import ReactQuill from 'react-quill'
import Form from './../../index'
import MutationObserver from 'react-mutation-observer';

describe('<RichText />', () => {
  it('U-TEST-1 - Test Example', () => {
    const wrapper = enzyme.mount(
      <MutationObserver>
        <Form>
          {(_) => (
            <RichText name="richText" label="Enter Your Message" />
          )}
        </Form>
      </MutationObserver>
    )
    expect(wrapper.find(ReactQuill)).toHaveLength(1)
  })

  it('U-TEST-2 - Test Disabled', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RichText name="richText" disabled={true} label="Enter Your Message" />
        )}
      </Form>
    )
    expect(wrapper.find(ReactQuill)).toHaveLength(1)
    expect(wrapper.find(ReactQuill).get(0).props.disabled).toEqual(true)
  })

  it('U-TEST-3 - Test ReadOnly', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RichText name="richText" readOnly={true} label="Enter Your Message" />
        )}
      </Form>
    )
    expect(wrapper.find(ReactQuill)).toHaveLength(1)
    expect(wrapper.find(ReactQuill).get(0).props.readOnly).toEqual(true)
  })

  it('U-TEST-4 - Test Toolbar Disabled', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RichText name="richText" toolbarDisable={true} label="Enter Your Message" />
        )}
      </Form>
    )
    expect(wrapper.find(ReactQuill)).toHaveLength(1)
    expect(wrapper.find(ReactQuill).get(0).props.toolbarDisable).toEqual(true)
  })

  it('U-TEST-5 - Test Theme Bubble', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RichText name="richText" theme="bubble" label="Enter Your Message" />
        )}
      </Form>
    )
    expect(wrapper.find(ReactQuill)).toHaveLength(1)
    expect(wrapper.find(ReactQuill).get(0).props.theme).toEqual("bubble")
  })
})