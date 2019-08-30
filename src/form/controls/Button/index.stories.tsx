import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
import { Col } from 'reactstrap';
import { Info, Archive, Coffee } from 'react-feather';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|Button', module)
  .add('Basic Styling', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Button</h2>
        <br/>
        <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. Read the <a href="https://getbootstrap.com/docs/4.2/components/buttons/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p><br/>
        <h4>Basic Styling</h4>
        <br/>
        <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div>
          <div style={{ marginTop: 30 }}><Button color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="secondary">secondary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="success">success</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="info">info</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="warning">warning</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="danger">danger</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button color="link">link</Button></div>
        </div>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value='<div>
          <div style={{ marginTop: 30 }}><Button color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button color="secondary">secondary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button color="success">success</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button color="info">info</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button color="warning">warning</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button color="danger">danger</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button color="link">link</Button></div>
        </div>'
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
  )).add('Outline Buttons', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Outline Buttons</h4>
        <br/>
        <p>In need of a button, but not the hefty background colors they bring? Add element with the <code>outline</code> property ones to remove all background images and colors on any button.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div>
          <div style={{ marginTop: 30 }}><Button outline color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button outline color="secondary">secondary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button outline color="success">success</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button outline color="info">info</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button outline color="warning">warning</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button outline color="danger">danger</Button>{' '}</div>
        </div>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value='<div>
          <div style={{ marginTop: 30 }}><Button outline color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button outline color="secondary">secondary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button outline color="success">success</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button outline color="info">info</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button outline color="warning">warning</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button outline color="danger">danger</Button>{" "}</div>
        </div>'
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
  )).add('Sizes', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Sizes</h4>
      <br/>
      <p>Button can have additional sizes like larger or smaller buttons.</p>
      <br/>
      <h6><strong>Example</strong></h6>
      <hr/>
        <div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'md'} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} color="primary">primary</Button>{' '}</div>
        </div>
      <br/>
      <h6><strong>Code</strong></h6>
      <hr/>
      <CodeMirror
          value='<div>
          <div style={{ marginTop: 30 }}><Button size={"lg"} color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"md"} color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"sm"} color="primary">primary</Button>{" "}</div>
        </div>'
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
  )).add('Loading Buttons', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Loading Buttons</h4>
      <br/>
      <p>Button can have additional loader along with the size property buttons.</p>
      <br/>
      <h6><strong>Example</strong></h6>
      <hr/>
        <div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} loading={true} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'md'} loading={true} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} loading={true} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} loading={true} color="warning">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'md'} loading={true} color="warning">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} loading={true} color="warning">primary</Button>{' '}</div>
        </div>
      <br/>
      <h6><strong>Code</strong></h6>
      <hr/>
      <CodeMirror
          value='<div>
          <div style={{ marginTop: 30 }}><Button size={"lg"} loading={true} color="primary">primary</Button>{""}</div>
          <div style={{ marginTop: 30 }}><Button size={"md"} loading={true} color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"sm"} loading={true} color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"lg"} loading={true} color="warning">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"md"} loading={true} color="warning">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"sm"} loading={true} color="warning">primary</Button>{" "}</div>
        </div>'
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
  )).add('Icon Buttons', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Icon Buttons</h4>
      <br/>
      <p>Make icon buttons by adding only icon and add property <code>icon</code></p>
      <br/>
      <h6><strong>Example</strong></h6>
      <hr/>
        <div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} icon={<Info />} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'lg'} icon={<Info />} color="warning">primary</Button>{' '}</div>

          <div style={{ marginTop: 30 }}><Button size={'md'} outline icon={<Archive size={18} />} color="danger">important</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} outline icon={<Archive size={18} />} color="danger">important</Button>{' '}</div>

          <div style={{ marginTop: 30 }}><Button size={'md'} icon={<Coffee />} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'md'} icon={<Coffee />} color="warning">primary</Button>{' '}</div>

          <div style={{ marginTop: 30 }}><Button size={'sm'} icon={<Info size={18} />} color="primary">primary</Button>{' '}</div>
          <div style={{ marginTop: 30 }}><Button size={'sm'} icon={<Info size={18} />} color="warning">primary</Button>{' '}</div>
        </div>
      <br/>
      <h6><strong>Code</strong></h6>
      <hr/>
      <CodeMirror
          value='<div>
          <div style={{ marginTop: 30 }}><Button size={"lg"} icon={<Info />} color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"lg"} icon={<Info />} color="warning">primary</Button>{" "}</div>
        
          <div style={{ marginTop: 30 }}><Button size={"md"} outline icon={<Archive size={18} />} color="danger">important</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"sm"} outline icon={<Archive size={18} />} color="danger">important</Button>{" "}</div>
        
          <div style={{ marginTop: 30 }}><Button size={"md"} icon={<Coffee />} color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"md"} icon={<Coffee />} color="warning">primary</Button>{" "}</div>
        
          <div style={{ marginTop: 30 }}><Button size={"sm"} icon={<Info size={18} />} color="primary">primary</Button>{" "}</div>
          <div style={{ marginTop: 30 }}><Button size={"sm"} icon={<Info size={18} />} color="warning">primary</Button>{" "}</div>
        </div>'
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
  )).add('Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button - Disabled</h4>
        <br/>
        <p>Make buttons look inactive by adding the disabled boolean attribute to any button element.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div>
          <div style={{ marginTop: 30 }}><Button disabled color="primary">primary</Button>{' '}</div>
        </div>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value='<div>
          <div style={{ marginTop: 30 }}><Button disabled color="primary">primary</Button>{" "}</div>
        </div>'
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
  )).add('Block', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Button - Block</h4>
        <br/>
        <p>Create block level buttons—those that span the full width of a parent</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <div>
          <div style={{ marginTop: 30 }}><Button block outline size color="primary">primary</Button>{' '}</div>
        </div>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value='<div>
          <div style={{ marginTop: 30 }}><Button block outline size color="primary">primary</Button>{" "}</div>
        </div>'
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