import * as React from 'react'
import * as enzyme from 'enzyme'
import Well from './index'

describe('<Well />', () => {
    it('U-TEST-1 - Render Well', () => {
        const wrapper = enzyme.mount(
            <Well heading="Well">Demo Of Well</Well>
        )        
        expect(wrapper.props().heading).toEqual('Well');        
    })

})