import * as React from 'react'
import * as enzyme from 'enzyme'
import Well from './index'

describe('<Well />', () => {
    it('U-TEST-1 - Render Well', () => {
        const wrapper = enzyme.mount(
            <Well>Demo Of Well</Well>
        )
        expect(wrapper.text()).toContain('Well'); 
    })

})