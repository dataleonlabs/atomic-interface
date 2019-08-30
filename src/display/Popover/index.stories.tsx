import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Popper from 'popper.js';
import { Col, Button } from 'reactstrap';
import Popover from './index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

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
          <span style={{marginRight: 30}}>
            <Button color="secondary" id={'Popover-'} type="button">
              show
            </Button>
            <Popover
              placement="right"
              target={'Popover-'}
              header='Popover Title'
            >
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover>
          </span>
          <span style={{marginRight: 30}}>
            <Button color="secondary" id={'Popover-3'} type="button">
              show
            </Button>
            <Popover
              placement="bottom"
              target={'Popover-3'}
              header='Popover Title'
            >
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover>
          </span>
          <span style={{marginRight: 30}}>
            <Button color="secondary" id={'Popover-4'} type="button">
              show
            </Button>
            <Popover
              placement="top"
              target={'Popover-4'}
              header='Popover Title'
            >
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover>
          </span>
          <span style={{marginRight: 30}}>
            <Button color="secondary" id={'Popover-2'} type="button">
              show
            </Button>
            <Popover
              placement="left"
              target={'Popover-2'}
              header='Popover Title'
            >
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover>
          </span>
          <br/>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr/>
          <CodeMirror
          value='<span style={{marginRight: 30}}>
          <Button color="secondary" id={"Popover-"} type="button">
            show
          </Button>
          <Popover
            placement="right"
            target={"Popover-"}
            header="Popover Title"
          >
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover>
        </span>
        <span style={{marginRight: 30}}>
          <Button color="secondary" id={"Popover-3"} type="button">
            show
          </Button>
          <Popover
            placement="bottom"
            target={"Popover-3"}
            header="Popover Title"
          >
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover>
        </span>
        <span style={{marginRight: 30}}>
          <Button color="secondary" id={"Popover-4"} type="button">
            show
          </Button>
          <Popover
            placement="top"
            target={"Popover-4"}
            header="Popover Title"
          >
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover>
        </span>
        <span style={{marginRight: 30}}>
          <Button color="secondary" id={"Popover-2"} type="button">
            show
          </Button>
          <Popover
            placement="left"
            target={"Popover-2"}
            header="Popover Title"
          >
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover>
        </span>'
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
