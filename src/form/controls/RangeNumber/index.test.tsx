import * as React from 'react'
import * as enzyme from 'enzyme'
import RangeNumber from './index'
import { Input } from 'reactstrap';
import Form from './../../index'

describe('<RangeNumber />', () => {
  it('U-TEST-1 - Addon', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <RangeNumber
            type="number"
            min={0}
            max={125}
            name={'age'}
            label={'Enter Your Age'}
            placeholder={'Enter Number Only'}
          />
        )}
      </Form>
    )

    expect(wrapper.find(Input)).toHaveLength(1);
  })
})