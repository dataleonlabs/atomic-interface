import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';
import { Col, Button } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

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
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>Toast</h2>
          <br />
          <hr />
          <p>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message. Read the <a href="https://getbootstrap.com/docs/4.2/components/toasts/" target="blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
          <br />
          <h4>Basic Example</h4>
          <br />
          <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
          <hr />
          <h6><strong>Example</strong></h6>
          <hr />
          <Button color="primary" onClick={this.toggle}>show</Button>
          <br />
          <br />
          <Toast isOpen={this.state.show} title={'Toast title'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Toast>
          <br />
          <br />
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value='<Button color="primary" onClick={this.toggle}>show</Button>
            <br />
            <br />
            <Toast isOpen={this.state.show} title="Toast title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Toast>'
            options={{
              mode: 'jsx',
              lineNumbers: true,
              smartIndent: true,
              readOnly: true
            }}
            editorDidMount={editor => {
              reindent(editor);
            }}
          />          
        </Col>
      </React.Fragment>
    );
  }
}

storiesOf('UI Elements|Toast', module)
  .add('Basic Example', () => (
    <ToastDismissExample />
  ))
  .add('Placement', () => (
    <ToastDismissExample />
  ))

