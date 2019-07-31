import * as React from 'react'
import * as enzyme from 'enzyme'
import RichTextEditor from './index'
import { ControlLabel } from 'react-bootstrap'

describe('Elements - RicheTextEditor', () => {
  test('F-TEST-1: Should have a label', () => {
    const wrapper = enzyme.render(
      <RichTextEditor value="" label="test_richtexteditor" />,
    )

    expect(wrapper.text()).toContain('test_richtexteditor')
  })
  
})
