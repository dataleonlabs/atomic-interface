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

storiesOf('UI Elements|Modal', module)
  .add('Modal', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Modal</h2>
        <br/>
        <p>Add dialogs to your site for lightboxes, user notifications, or completely custom content. Read the <a href="https://getbootstrap.com/docs/4.2/components/modal/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <hr/>
        <h4>Basic Example</h4>
        <p>Below is the static example of the basic modal.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        
      </Col>
    </React.Fragment>
  ))
  .add('Optional Sizes', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Optional Sizes</h4>
        <br/>
        <p>Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
      </Col>
    </React.Fragment>
  ))
  .add('Remove Animation', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Remove Animation</h4>
        <br/>
        <p>For modals that simply appear rather than fade in to view, remove the <code>.fade</code> class from your modal markup.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
      </Col>
    </React.Fragment>
  ))
  .add('With Button', () => (
    <ModalExample showFooter={true} />
  ))
