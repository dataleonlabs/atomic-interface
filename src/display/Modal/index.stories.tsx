import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col, Button } from 'reactstrap';
import Modal from './index';

class ModalExample extends React.Component<{ showFooter?: Boolean }> {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    const extraProps = this.props.showFooter ? {
      ok: {
        label: 'Do Something',
        color: "primary",
        onClick: this.toggle
      },
      cancel: {
        label: 'close',
        color: "secondary",
        onClick: this.toggle
      }

    } : {}

    return (
      <React.Fragment>
        <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Modal</h4>
          <Button color="info" onClick={this.toggle}>Show Modal</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            header="Modal title"
            {...extraProps}

          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Modal>
        </Col>
      </React.Fragment>
    )
  }

}

storiesOf('Display|Modal', module)
  .add('Example', () => (
    <ModalExample />
  ))
  .add('With Button', () => (
    <ModalExample showFooter={true} />
  ))
