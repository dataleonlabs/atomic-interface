import * as React from 'react'
import * as enzyme from 'enzyme'
import ButtonComponent from './index'
import { FormGroup,Button, Spinner } from 'reactstrap';
import Form from './../../index'
describe('<Input />', () => {
  it('U-TEST-1 - test button render disabled', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <ButtonComponent
            onPress={()=>alert("I am pressed")}
            name='test'
            renderspinner={false}
            disabled={true}
            color="primary"
            title={'test'} 
          />
          
        )}
      </Form>
    )
    expect(wrapper.find(FormGroup)).toHaveLength(2)
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it('U-TEST-2 - test button render with spinner ', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(props) => (
          <ButtonComponent 
          onPress={()=>alert("I am pressed")}
          name={'test'}
          title={'test'} 
          disabled={false} 
          renderspinner={true}
          color="primary" />
        )}
      </Form>
    )

    expect(wrapper.find(FormGroup)).toHaveLength(2)
    expect(wrapper.find(Button)).toHaveLength(1)
    expect(wrapper.find(Spinner)).toHaveLength(1)
  })
})