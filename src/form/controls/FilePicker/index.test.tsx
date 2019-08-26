import * as React from 'react'
import * as enzyme from 'enzyme'
import FilePicker from './index'
import Form from './../../index'

describe('<FilePicker />', () => {
  it('U-TEST-1 filepicker render with d  disabled', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <FilePicker
            name={'image'}
            label={'Picture'}
            disabled
          />
        )}
      </Form>
    )

    expect(wrapper.find(FilePicker)).toHaveLength(1);
    expect(wrapper.find(FilePicker).get(0).props.disabled).toEqual(true)
  })

  it('U-TEST-2 filepicker render tooltip beside label ', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <FilePicker
            name={'image'}
            label={'Picture'}
            tooltip={'select picture'}
          />
        )}
      </Form>
     , { attachTo: div });
    

    expect(wrapper.find(FilePicker)).toHaveLength(1)
    expect(wrapper.find(FilePicker).get(0).props.tooltip).toEqual('select picture')

  })


})