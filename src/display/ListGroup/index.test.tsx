import * as React from 'react'
import * as enzyme from 'enzyme'
import ListGroup from './index'
import ListGroupItem from './ListGroupItem'

describe('<ListGroup />', () => {
    it('U-TEST-1 - test ListGroup render', () => {
        const wrapper = enzyme.mount(
            <ListGroup>
                <ListGroupItem>ListItem</ListGroupItem>
            </ListGroup>
        )
        expect(wrapper.find(ListGroup)).toHaveLength(1);
        expect(wrapper.find(ListGroupItem)).toHaveLength(1);
    })
})