import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button/index';
import ButtonToolbar from './ButtonToolbar';
import ButtonGroup from './index';
import { Col } from 'reactstrap';
import DropDown from '../../../display/Dropdown/index';
import DropDownItem from '../../../display/Dropdown/DropdownItem';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|ButtonGroup', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col md={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>ButtonGroup</h2>
        <br/>
        <hr/>
        <p>Group a series of buttons together on a single line with the button group, and super-power them with javascript. Read the <a href="https://getbootstrap.com/docs/4.2/components/button-group/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>Group a series of buttons together on a single line with the button group.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value="<ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
          </ButtonGroup>"
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
      <Col md={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>ButtonGroup - Nesting</h4>
        <br/>
        <p>Add <code>mode={`'javascript'`}</code> property to make CodeEditor compatible with javascript.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <DropDown title="DropDown" caret>
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>            
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>
        </ButtonGroup>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value="<ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <DropDown title='DropDown' caret>
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>            
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>
          </ButtonGroup>"
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
      <Col md={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>ButtonGroup - With Toolbar</h4>
        <br/>
        <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>7</Button>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value="<ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>7</Button>
            <Button>8</Button>
          </ButtonGroup>
          </ButtonToolbar>"
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
  ));