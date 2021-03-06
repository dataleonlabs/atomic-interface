import * as React from 'react'
import * as enzyme from 'enzyme'
import Button from './index'
import { Button as ButtonBase, Spinner } from 'reactstrap';
import { Info } from 'react-feather';

describe('<Button />', () => {
  it('U-TEST-1 button render disabled', () => {
    const wrapper = enzyme.mount(
      <>
        <Button>primary</Button>
        <Button>primary</Button>
      </>
    )
    expect(wrapper.find(ButtonBase)).toHaveLength(2)
  })

  it('U-TEST-2 button render with loading ', () => {
    const wrapper = enzyme.mount(
      <Button loading={true}>primary</Button>
    )

    expect(wrapper.find(ButtonBase)).toHaveLength(1)
    expect(wrapper.find(Spinner)).toHaveLength(1)
  })

  it('U-TEST-3 button render with icon ', () => {
    const wrapper = enzyme.mount(
      <Button icon={<Info size={18} />}>primary</Button>
    )

    expect(wrapper.find(ButtonBase)).toHaveLength(1)
    expect(wrapper.find(Info)).toHaveLength(1)
    expect(wrapper.find(Spinner)).toHaveLength(0)
  })
})