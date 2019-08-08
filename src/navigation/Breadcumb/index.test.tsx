import * as React from 'react'
import * as enzyme from 'enzyme'
import Breadcrumb from './index'
import { Breadcrumb as BreadcrumbBase,BreadcrumbItem } from 'reactstrap';

describe('<Breadcrumb />', () => {
  it('U-TEST-1 - test breadcrumb render', () => {
    const wrapper = enzyme.mount(
      <>
       <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
       </Breadcrumb>
      </>
    )
    expect(wrapper.find(BreadcrumbBase)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(1)
  })

  it('U-TEST-2 - test breadcrumb render with disabled ', () => {
    const wrapper = enzyme.mount(
      <Breadcrumb>
        <BreadcrumbItem active={false}></BreadcrumbItem>
      </Breadcrumb>
    )

    expect(wrapper.find(BreadcrumbBase)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(1)
  })
})