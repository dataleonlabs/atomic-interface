import * as React from 'react'
import * as enzyme from 'enzyme'
import SearchBar from './index'
import { InputGroup, InputGroupAddon } from 'reactstrap';
import Form from './../../index'

describe('<SearchBar />', () => {
  
  it('U-TEST-1 - test SearchBar render with addon', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <SearchBar
            name={'email'}
            placeholder={'search'}
          />
        )}
      </Form>
    )

    expect(wrapper.find(InputGroup)).toHaveLength(1)
    expect(wrapper.find(InputGroupAddon)).toHaveLength(1)
  })

})