import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from './index';
import { Col } from 'reactstrap';
import Form from '../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Radio from '../Radio';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Forms|SearchBar', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - SearchBar</h2>
        <br />
        <hr />
        <p>Search lets users specify a word or phrase to search for relevant pieces of information. Search can be used as a filter or a primary means of searching some content.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>The basic style for search component that can be submitted by hitting enter kay or by clicking the search icon on the right side of the bar.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <br />
        <Form>
          {(_) => (
            <SearchBar
              name={'search'}
              placeholder={'search'}
            />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<SearchBar
  name={'search'}
  placeholder={'search'}
/>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Set Lable for Left Addon', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - SearchBar</h2>
        <br />
        <hr />
        <p>Search lets users specify a word or phrase to search for relevant pieces of information. Search can be used as a filter or a primary means of searching some content.</p>
        <br />
        <h4>Set Lable for Left Addon</h4>
        <br />
        <p>The basic style for search component that can be submitted by hitting enter kay or by clicking the search icon on the right side of the bar.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <br />
        <Form>
          {(_) => (
            <>
              <strong>Default</strong>
              <SearchBar                
                name={'search_brands'}
                placeholder={'search'}
              />
              <hr />
              <strong>Custom Label</strong>
              <SearchBar
                leftAddonString={"Brands"}
                name={'search_brands'}
                placeholder={'search brands'}
              />
              <hr />
              <strong>Hide Label</strong>
              <SearchBar
                hideLeftAddonLabel
                name={'search'}
                placeholder={'search'}
              />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<SearchBar                
  name={'search_brands'}
  placeholder={'search'}
/>

<SearchBar
  leftAddonString={"Brands"}
  name={'search_brands'}
  placeholder={'search brands'}
/>

<SearchBar
  hideLeftAddonLabel
  name={'search'}
  placeholder={'search'}
/>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Navbar', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>SearchBar - Navbar</h4>
        <br />
        <p>Add <code>navBar={`{true}`}</code> property to display the search element inside the navigation panel.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <SearchBar
              name={'search'}
              placeholder={'search'}
              navBar={true}
            />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<SearchBar
  name={'search'}
  placeholder={'search'}
  navBar={true}
/>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Example Conditional', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - SearchBar</h2>
        <br />
        <hr />
        <p>Search lets users specify a word or phrase to search for relevant pieces of information. Search can be used as a filter or a primary means of searching some content.</p>
        <br />
        <h4>Conditional Example</h4>
        <br />
        <p>The basic style for search component that can be submitted by hitting enter kay or by clicking the search icon on the right side of the bar.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <br />
        <Form>
          {(values) => (
            <>
              <Radio value="default" id="default" name='type' label="Default" />
              <Radio value="navbar" id="navbar" name='type' label="Navbar" />
              <SearchBar
                name={'search'}
                placeholder={'search'}
                conditionnals={{
                  type: 'default'
                }}
              />
              <SearchBar
                name={'search'}
                placeholder={'search'}
                navBar={true}
                conditionnals={{
                  type: 'navbar'
                }}
              />
              <br /><code>values: {JSON.stringify(values.values)}</code><br />
            </>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<Radio value="default" id="default" name='type' label="Default" />
<Radio value="navbar" id="navbar" name='type' label="Navbar" />
<SearchBar
  name={'search'}
  placeholder={'search'}
  conditionnals={{
    type: 'default'
  }}
/>
<SearchBar
  name={'search'}
  placeholder={'search'}
  navBar={true}
  conditionnals={{
    type: 'navbar'
  }}
/>
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ))
