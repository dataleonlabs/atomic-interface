import * as React from 'react'
import * as enzyme from 'enzyme'
import TextareaRender from './index'
import TextareaAutosize from 'react-autosize-textarea';

describe('<TextareaRender />', () => {
  it('U-TEST-1 - testarea render with max rows', () => {
    const wrapper = enzyme.mount(
      <TextareaRender
        field={{
          maxRows: 10
        }}
      />
    )
    expect(wrapper.find(TextareaAutosize)).toHaveLength(1)
  })
})