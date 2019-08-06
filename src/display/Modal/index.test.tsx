import * as React from 'react'
import * as enzyme from 'enzyme'
import Modal from './index'
import ModalButton from './ModalButton'
import { Modal as strapModal , Button  } from 'reactstrap';

describe('<Modal />', () => {
  it('U-TEST-1 - modal render', () => {
    const wrapper = enzyme.mount(
      <Modal header="modal" >
        this is demo 
      </Modal>
    )
    expect(wrapper.find(strapModal)).toHaveLength(1);
    
  })

  it('U-TEST-2 - modal render with button', () => {
    const wrapper = enzyme.mount(
      <Modal header="modal" ok={{label:'submit'}} cancel={{label:'close'}} >
        this is demo 
      </Modal>
    )
    expect(wrapper.find(strapModal)).toHaveLength(1);
    expect(wrapper.props().ok).toEqual({label:'submit'});
    expect(wrapper.props().cancel).toEqual({label:'close'});
    
  })

  it('U-TEST-3 - modalbutton render', () => {
    const wrapper = enzyme.mount(
      <ModalButton label="submit" />
    )
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.props().label).toEqual('submit');
    
  })

})