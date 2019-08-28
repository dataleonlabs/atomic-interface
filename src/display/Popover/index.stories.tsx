import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Popper from 'popper.js';
import { Col, Button } from 'reactstrap';
import Popover from './index';

class PopoverExample extends React.Component<{ placement?: Popper.Placement }> {
  render() {
    return (
      <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>Popover</h2>
          <br/>
          <hr/>
          <p>Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site. Read the <a href="https://getbootstrap.com/docs/4.2/components/popovers/" target="blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
          <br/>
          <h4>Four Directions</h4>
          <br/>
          <p>Four options are available: top, right, bottom, and left aligned.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
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
          <br/>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr/>
          <pre>
          {`
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
        `}
        </pre>
        </Col>
      </React.Fragment>
    )
  }

}

storiesOf('UI Elements|Popover', module)
  .add('Four Directions', () => (
    <PopoverExample />
  ))
  .add('With placement to Bottom', () => (
    <PopoverExample placement="bottom" />
  ))
