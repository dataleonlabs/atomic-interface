import * as React from 'react'
import * as enzyme from 'enzyme'
import Select from './index';
import Form from './../../index'

describe('<Select />', () => {
  it('U-TEST-1 - test Select render with render with multiple select option', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Select
            isClearable
            isMulti
            name={'favorite'}
            meta={{
              options
            }}
          />
        )}
      </Form>
    )

    expect(wrapper.find(Select)).toHaveLength(1)
    expect(wrapper.find(Select).get(0).props.isMulti).toEqual(true)
  })

  it('U-TEST-2 - test select render with tooltip beside label ', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <Select
            isClearable
            creatable
            isMulti
            label="Favorite"
            tooltip={'you can select multiple option'}
            name={'favorite'}
            meta={{
              options
            }}
          />
        )}
      </Form>
      , { attachTo: div });

    expect(wrapper.find(Select)).toHaveLength(1)
    expect(wrapper.find(Select).get(0).props.isClearable).toEqual(true)
    expect(wrapper.find(Select).get(0).props.tooltip).toEqual('you can select multiple option')
  })

})