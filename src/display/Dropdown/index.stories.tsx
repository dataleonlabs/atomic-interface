import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import DropDown from './index';
import DropDownItem from './DropdownItem';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


class RenderDropDown extends React.Component<{ divider?: Boolean }> {


  render() {
    return (
      <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>DropDown</h2>
          <DropDown title="DropDown" caret >
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>
            {this.props.divider && <DropDownItem divider />}
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>
        </Col>
      </React.Fragment>
    )
  }

}

storiesOf('UI Elements|DropDown', module)
  .add('Basic Example', () => (
    <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>DropDown</h2>
          <br/>
          <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown javascript plugin. Read the <a href="https://getbootstrap.com/docs/4.2/components/dropdowns/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
          <br/>
          <hr/>
          <h4>Basic Example</h4>
          <br/>
          <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>.dropdown</code>, or another element that declares position relative. Dropdowns can be triggered from link or button elements to better fit your potential needs.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <DropDown title="DropDown" caret >
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr />        
          <CodeMirror
            value='<DropDown title="DropDown" caret >
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>'
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
  ))
  .add('DropDown Divider', () => (
    <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>DropDown Divider</h4>
          <br/>
          <p>Separate groups of related menu items with a divider.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <DropDown title="DropDown" caret >
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>
            <DropDownItem divider />
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>
          <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
          <CodeMirror
            value='<DropDown title="DropDown" caret >
            <DropDownItem>Item1</DropDownItem>
            <DropDownItem>Item2</DropDownItem>
            <DropDownItem divider />
            <DropDownItem>Item3</DropDownItem>
            <DropDownItem>Item4</DropDownItem>
          </DropDown>'
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
  ))
