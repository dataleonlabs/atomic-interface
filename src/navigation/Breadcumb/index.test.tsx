import * as React from 'react'
import * as enzyme from 'enzyme'
import BreadcrumbItem from './BreadcrumbItem';
import Breadcrumb from './index';
import { BreadcrumbItem as BreadcrumbItemBase } from 'reactstrap';


describe('<Breadcrumb />', () => {
  it('U-TEST-1 - Breadcrumb Render', () => {
    const wrapper = enzyme.mount(
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    )
    expect(wrapper.find(Breadcrumb)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(3)
    expect(wrapper.find(BreadcrumbItemBase)).toHaveLength(3)
  })

  it('U-TEST-2 - with Breadcrumb active', () => {
    const wrapper = enzyme.mount(
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
        <BreadcrumbItem active={true}>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    )
    expect(wrapper.find(Breadcrumb)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(3)
    expect(wrapper.contains(<BreadcrumbItem active={true}>Breadcrumb</BreadcrumbItem>)).toEqual(true)
  })
})