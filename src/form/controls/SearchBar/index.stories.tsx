import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from './index';
import { Col } from 'reactstrap';
import Form from '../../index'

storiesOf('Forms|SearchBar', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements - SearchBar</h2>
        <br/>
        <hr/>
        <p>Search lets users specify a word or phrase to search for relevant pieces of information. Search can be used as a filter or a primary means of searching some content.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>The basic style for search component that can be submitted by hitting enter kay or by clicking the search icon on the right side of the bar.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <br />
        <Form>
          {(_) => (
            <SearchBar
              name={'search'}
              placeholder={'search'}
            />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Form>
  {(_) => (
    <SearchBar
      name={'search'}
      placeholder={'search'}
    />
  )}
</Form>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Navbar', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>SearchBar - Navbar</h4>
        <br/>
        <p>Add <code>navBar={`{true}`}</code> property to display the search element inside the navigation panel.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {(_) => (
            <SearchBar
              name={'search'}
              placeholder={'search'}
              navBar={true}
            />
          )}
        </Form>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Form>
  {(_) => (
    <SearchBar
      name={'search'}
      placeholder={'search'}
      navBar={true}
    />
  )}
</Form>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
