import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Column from './Column';
import Table from './index';
import faker from 'faker'
import TableCollection from './Collection'
import Query from '../../utils/Query';
import { APIGatewayFetch } from 'yap-sdk';

const assets: any[] = [];
for (let index = 0; index < 10; index++) {
  assets.push({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  });
}
storiesOf('UI Elements|Table', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Table Basic</h2>
        <br/>
        <hr/>
        <p>Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap. Read the <a href="https://getbootstrap.com/docs/4.2/components/spinners/" target="blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>Using the most basic table markup, here’s how <code>.table</code> based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Table data={assets} striped={false}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Table data={assets} striped={false}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'}>Email</Column>
</Table>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Sortable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Sortable</h4>
        <br/>
        <p>Add <code>sortable={`true`}</code> for sortable columns.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Table data={assets} sortable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Table data={assets} sortable={true}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'} sortable={false}>Email</Column>
</Table>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Selectable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Selectable</h4>
        <br/>
        <p>Add <code>selectable={`true`}</code> to enable the selection checkbox for each row.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Table data={assets} selectable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Table data={assets} selectable={true}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'}>Email</Column>
</Table>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Draggable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Selectable</h4>
        <br/>
        <p>Add <code>draggable={`true`}</code> to enable the drag and drop functionality.</p>
        <hr/>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <br/>
        <h4>Table 1</h4>
        <Table data={assets} draggable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
        <h4>Table 2</h4>
        <Table data={assets} draggable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<h4>Table 1</h4>
<Table data={assets} draggable={true}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'} sortable={false}>Email</Column>
</Table>
<h4>Table 2</h4>
<Table data={assets} draggable={true}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'} sortable={false}>Email</Column>
</Table>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Scrollable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Selectable</h4>
        <br/>
        <p>Add <code>scrollable={150}</code> to enable the scrolling option for the table content.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Table data={assets} sortable={true} scrollable={150}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Table data={assets} sortable={true} scrollable={150}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'} sortable={false}>Email</Column>
</Table>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Paginated', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Paginated</h4>
        <br/>
        <p>Add <code>pagination={`{{ currentPage: 1, total: 1000 }}`}</code> to enable the pagination at the bottom of table.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Table data={assets} selectable={true} pagination={{ currentPage: 1, total: 1000 }}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Table data={assets} selectable={true} pagination={{ currentPage: 1, total: 1000 }}>
  <Column field={'firstName'}>First Name</Column>
  <Column field={'lastName'}>Last Name</Column>
  <Column field={'email'}>Email</Column>
</Table>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('With striped', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <Table data={assets} striped={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  )).add('With row size large', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <Table data={assets} striped={true} rowSize={'large'}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  )).add('With row size small', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <Table data={assets} striped={false} rowSize={'small'}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  )).add('With select row and disabledSelected', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <Table data={assets} selectable={true} disabledSelected={[4, 6]}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  )).add('With hide header', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <Table data={assets} hideHeader={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  )).add('With empty table', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <Table data={[]} selectable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  )).add('With loading', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <Table loading={true} selectable={true} draggable={true} data={[{ id: 1 }, { id: 2 }]}>
          <Column field={'id'}>Id</Column>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))