import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';
import { Col, Button } from 'reactstrap';

class ToastDismissExample extends React.Component {
  state = {
    show: false
  };

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Toast</h4>
          <Button color="primary" onClick={this.toggle}>show</Button>
          <br />
          <br />
          <Toast isOpen={this.state.show} title={'Toast title'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Toast>
        </Col>
      </React.Fragment>
    );
  }
}

storiesOf('UI Elements|Toast', module)
  .add('Example', () => (
    <ToastDismissExample />
  ))

