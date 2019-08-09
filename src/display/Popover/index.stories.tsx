import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Popper from 'popper.js';
import { Col, Button } from 'reactstrap';
import Popover from './index';

class PopoverExample extends React.Component<{ placement?: Popper.Placement }> {
  render() {
    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Popover</h4>
          <span>
            <Button color="secondary" id={'Popover-'} type="button">
              show
            </Button>
            <Popover
              placement={this.props.placement}
              target={'Popover-'}
              header='Popover Title'
            >
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </Popover>
          </span>
        </Col>
      </React.Fragment>
    )
  }

}

storiesOf('UI Elements|Popover', module)
  .add('Example', () => (
    <PopoverExample />
  ))
  .add('With placement to Bottom', () => (
    <PopoverExample placement="bottom" />
  ))
