import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Column from './Column';
import Table from './index';
import faker from 'faker'
import TableCollection from './Collection'
import Query from '../../utils/Query';
import { APIGatewayFetch } from 'yap-sdk';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

const assets: any[] = [];
for (let index = 0; index < 100; index++) {
  assets.push({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  });
}

function TableWithPaginate() {
  const [currentPage, setCurrentPage] = React.useState(0);

  const codeMirror =
    `
  <Table data={assets} selectable={true} pagination={{ currentPage, total: 1000, onChange:setCurrentPage }}>
  <Column field="firstName">First Name</Column>
  <Column field="lastName">Last Name</Column>
  <Column field="email">Email</Column>
  </Table>
`
  return (
    <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Paginated</h4>
      <br />
      <p>Add <code>pagination={`{{ currentPage: 1, total: 1000 }}`}</code> to enable the pagination at the bottom of table.</p>
      <hr />
      <h6><strong>Example</strong></h6>
      <hr />
      <Table data={assets} selectable={true} pagination={{ currentPage, total: 1000, onChange: setCurrentPage }}  >
        <Column field={'firstName'}>First Name</Column>
        <Column field={'lastName'}>Last Name</Column>
        <Column field={'email'}>Email</Column>
      </Table>
      <br />
      <br />
      <h6><strong>Code</strong></h6>
      <hr />
      <CodeMirror
        value={codeMirror}
        options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true
        }}
      />
    </Col>
  )
}

storiesOf('UI Elements|Table', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Table Basic</h2>
        <br />
        <hr />
        <p>Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap. Read the <a href="https://getbootstrap.com/docs/4.2/components/spinners/" target="blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>Using the most basic table markup, here’s how <code>.table</code> based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={assets} striped={false}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={assets} striped={false}>
  <Column field="firstName">First Name</Column>
  <Column field="lastName">Last Name</Column>
  <Column field="email">Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Sortable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Sortable</h4>
        <br />
        <p>Add <code>sortable={`true`}</code> for sortable columns.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={assets} sortable={true} orderWay="asc" orderBy="firstName">
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={assets} sortable={true}>
  <Column field="firstName">First Name</Column>
  <Column field="lastName">Last Name</Column>
  <Column field="email" sortable={false}>Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Selectable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Selectable</h4>
        <br />
        <p>Add <code>selectable={`true`}</code> to enable the selection checkbox for each row.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={assets} selectable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={assets} selectable={true}>
  <Column field="firstName">First Name</Column>
  <Column field="lastName">Last Name</Column>
  <Column field="email">Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Scrollable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Selectable</h4>
        <br />
        <p>Add <code>scrollable={150}</code> to enable the scrolling option for the table content.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={assets} sortable={true} scrollable={150}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={assets} sortable={true} scrollable={150}>
  <Column field="firstName">First Name</Column>
  <Column field="lastName">Last Name</Column>
  <Column field="email" sortable={false}>Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Paginated', () => (
    <React.Fragment>
      <TableWithPaginate />
    </React.Fragment>
  )).add('Striped', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Striped</h4>
        <br />
        <p>Add <code>striped={`{true}`}</code> to enable the striped styling among rows.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={assets} striped={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={assets} striped={true}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'}>Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ))
  .add('Disabled Selected', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Disabled Selected</h4>
        <br />
        <p>Add <code>disabledSelected={`{[4, 6]}`}</code> to disable the particular row where 4 and 6 are the number of rows.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={assets} selectable={true} disabledSelected={[4, 6]}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={assets} selectable={true} disabledSelected={[4, 6]}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'}>Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Hide Header', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Hide Header</h4>
        <br />
        <p>Add <code>hideHeader={`{true}`}</code> to hide the header row of table.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={assets} hideHeader={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={assets} hideHeader={true}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'}>Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Empty', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Empty</h4>
        <br />
        <p>Add <code>data={`{[]}`}</code> to load table with empty content.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table data={[]} selectable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table data={[]} selectable={true}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'}>Email</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Loading', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Loading</h4>
        <br />
        <p>Add <code>loading={`{true}`}</code> property to display the loader.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table loading={true} selectable={true} data={[{ id: 1 }, { id: 2 }]}>
          <Column field={'id'}>Id</Column>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table loading data={[{ id: 1 }, { id: 2 }]}>
  <Column field="id">Id</Column>
  <Column field="firstName">First Name</Column>
  <Column field="lastName">Last Name</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Controlled Ordering and Hidden column', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Loading</h4>
        <br />
        <p>Add <code>loading={`{true}`}</code> property to display the loader.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Table selectable={true} data={[{ id: 1 }, { id: 2 }]}>
          <Column field={'id'}>Id</Column>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'} hide>Last Name</Column>
        </Table>
        <Table orderingColumns={['lastName', 'firstName', 'id']} selectable={true} data={[{ id: 1 }, { id: 2 }]}>
          <Column field={'id'}>Id</Column>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
        </Table>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Table loading data={[{ id: 1 }, { id: 2 }]}>
  <Column field="id">Id</Column>
  <Column field="firstName" hide>First Name</Column>
  <Column field="lastName">Last Name</Column>
</Table>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ))