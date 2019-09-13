import * as React from 'react'
import * as enzyme from 'enzyme'
import Choose from './index'
import { CloudRain, Info } from 'react-feather'
import { Badge, Label } from 'reactstrap';

describe('<Choose />', () => {
    it('U-TEST-1 - Basic Example', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={<CloudRain size={23} className="checkIcon"/>} >
                <Badge color="primary" pill={true} className='checkBadge'>9+</Badge>
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(Choose)).toHaveLength(1);
    
    })
    it('U-TEST-2 - Icon', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={<Info size={23} className="checkIcon"/>} >
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(Choose)).toHaveLength(1);
        expect(wrapper.find(Choose).props().icon).toEqual(<Info size={23} className="checkIcon"/>);
        
    })
    it('U-TEST-3 - Badge', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={false} >
                <Badge color="primary" pill={true} className='checkBadge'>9+</Badge>
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(Choose)).toHaveLength(1);
        expect(wrapper.find(Badge)).toHaveLength(1);
    })
    it('U-TEST-4 - Color', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={false} active={true} backgroundColorOnActive='lightblue' backgroundColorOnHover='skyblue'>
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(Choose)).toHaveLength(1);
        expect(wrapper.find(Label)).toHaveLength(1);
        expect(wrapper.find(Choose).props().active).toEqual(true);
        expect(wrapper.find(Choose).props().backgroundColorOnActive).toEqual('lightblue');
        expect(wrapper.find(Choose).props().backgroundColorOnHover).toEqual('skyblue');
    })

})