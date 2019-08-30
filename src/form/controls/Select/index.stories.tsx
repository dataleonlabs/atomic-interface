import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|Select', module)
  .add('Basic Example', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <React.Fragment>
        <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>Form Elements - Select</h2>
          <br/>
          <hr/>
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br/>
          <h4>Basic Example</h4>
          <br/>
          <p>Custom select element with different <code>{`options`}</code>.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Form>
            {(_) => (
              <Select
                isClearable
                creatable
                isMulti
                name={'favorite'}
                options={options}
              />
            )}
          </Form>
          <br/>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr/>
          <CodeMirror
            value="<Form>
            {(_) => (
              <Select
                isClearable
                creatable
                isMulti
                name={'favorite'}
                options={options}
              />
            )}
            </Form>"
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
  }).add('Grouped', () => {
    const colourOptions = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    const flavourOptions = [
      { value: 'vanilla', label: <strong>vanilla</strong>, rating: 'safe' },
      { value: 'chocolate', label: 'Chocolate', rating: 'good' },
      { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
      { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
    ];
    const groupedOptions = [
      {
        label: 'Colours',
        options: colourOptions,
      },
      {
        label: 'Flavours',
        options: flavourOptions,
      },
    ];
    return (
      <React.Fragment>
        <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Select - Grouped</h4>
          <br/>
          <p>Add <code>options={`{groupedOptions}`}</code> property in which <code>{`groupedOptions`}</code> contain an array of multiple object having different attributes defined.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <h4>Select</h4>
          <Form>
            {(_) => (
              <Select
                isClearable
                creatable
                isMulti
                name={'favorite'}
                options={groupedOptions}
              />
            )}
          </Form>
          <br/>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr/>
          <CodeMirror
            value="<Form>
            {(_) => (
              <Select
                isClearable
                creatable
                isMulti
                name={'favorite'}
                options={groupedOptions}
              />
            )}
            </Form>"
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
  })
