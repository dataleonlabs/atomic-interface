import * as React from 'react'
import * as enzyme from 'enzyme'
import Choose from './index'
import { CustomInput } from 'reactstrap';
import { CloudRain } from 'react-feather';

describe('<Choose />', () => {
    it('U-TEST-1 - Basic Example', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={false}>
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(CustomInput)).toHaveLength(1);
    })
    it('U-TEST-2 - Icon', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={true}>
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(CustomInput)).toHaveLength(1);
        expect(wrapper.props().icon).toEqual(true);
        expect(wrapper.find(CloudRain)).toHaveLength(1)
    })
    it('U-TEST-3 - Badge', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={true}>
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(CustomInput)).toHaveLength(1);
        expect(wrapper.props().icon).toEqual(true);
        expect(wrapper.find(CloudRain)).toHaveLength(1)
    })
    it('U-TEST-4 - Color', () => {
        const wrapper = enzyme.mount(
            <Choose className='customCheck' name='connect' title='Connectors' icon={true}>
                <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
            </Choose>
        )
        expect(wrapper.find(CustomInput)).toHaveLength(1);
        expect(wrapper.props().icon).toEqual(true);
        expect(wrapper.find(CloudRain)).toHaveLength(1)
    })

})