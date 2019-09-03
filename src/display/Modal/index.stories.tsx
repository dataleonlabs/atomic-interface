import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col, Button } from 'reactstrap';
import Modal from './index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

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
        <Button color="info" onClick={this.toggle}>Show Modal</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          header="Modal title"
          {...extraProps}

        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Button color="info" onClick={this.toggle}>Show Modal</Button>
<Modal
  isOpen={this.state.modal}
  toggle={this.toggle}
  header="Modal title"
  {...extraProps}
>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Modal>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />        
      </Col>
    </React.Fragment>
        
    )
  }

}

storiesOf('UI Elements|Modal', module)
  .add('Basic Example', () => (
    <ModalExample showFooter={true} />
  ))
