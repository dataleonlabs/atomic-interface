import * as React from 'react'
import * as enzyme from 'enzyme'
import Popover from './index'
import { UncontrolledPopover as StrapUncontrolledPopover, Button } from 'reactstrap';

describe('<Popover/>', () => {

  it('U-TEST-1 - Popover render', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = enzyme.mount(
      < >
        <Button color="secondary" id={'Popover-'} type="button">
          show
        </Button>
        <Popover
          target={'Popover-'}
          header="popover"
        >
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      </Popover>
      </>
      , { attachTo: div });

    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).get(0).props.id).toEqual('Popover-');
  })

  it('U-TEST-2 - Popover render with placement right', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const wrapper = enzyme.mount(
      <div >
        <Button color="secondary" id={'Popover-'} type="button">
          show
        </Button>
        <Popover
          placement="bottom"
          target={'Popover-'}
          header="popover"
        >
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      </Popover>
      </div>
      , { attachTo: div });

    expect(wrapper.find(StrapUncontrolledPopover)).toHaveLength(1);
    expect(wrapper.find(StrapUncontrolledPopover).get(0).props.placement).toEqual('bottom');
  })


})