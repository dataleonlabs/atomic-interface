import * as React from 'react'
import * as enzyme from 'enzyme'
import Breadcrumbs from './index';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


describe('<Breadscrumbs />', () => {
  it('U-TEST-1 - Breadcrumb Render', () => {
    const wrapper = enzyme.mount(
      <Breadcrumbs>
        <Breadcrumb >
          <BreadcrumbItem />
         </Breadcrumb>
        </Breadcrumbs>
    )
    expect(wrapper.find(Breadcrumb)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(3)
  })

  it('U-TEST-2 - Breadcrumb With disable', () => {
    const wrapper = enzyme.mount(
      <Breadcrumbs >
        <Breadcrumb>
          <BreadcrumbItem />
        </Breadcrumb>
      </Breadcrumbs>
    )
    expect(wrapper.find(Breadcrumb)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(3)
  })
})