import * as React from 'react'
import * as enzyme from 'enzyme'
import SearchBar from './index'
import { InputGroup, InputGroupAddon } from 'reactstrap';
import Form from './../../index'

describe('<SearchBar />', () => {
  
  it('U-TEST-1 - Addon', () => {
    const wrapper = enzyme.mount(
      <div>
        <Form>
          {(_) => (
            <SearchBar
              name={'email'}
              placeholder={'Search products in catalogs...'}
            />
          )}
        </Form>
      </div>
    )

    expect(wrapper.find(InputGroup)).toHaveLength(1)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(1)
  })

})