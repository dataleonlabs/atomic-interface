import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Table from './index'
import Column from './Column';
import TableNew from './indexNew';
import faker from 'faker'
import './style.css'

const assets: any[] = [];
for (let index = 0; index < 10; index++) {
  assets.push({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  });
}
storiesOf('Table|Table', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} striped={false}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With striped', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} striped={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With row size large', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} striped={true} rowSize={'large'}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With row size small', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} striped={false} rowSize={'small'}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With select row', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} selectable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With select row and disabledSelected', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} selectable={true} disabledSelected={[4, 6]}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With hide header', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} hideHeader={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With sortable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} sortable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With scrollable', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} sortable={true} scrollable={150}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </TableNew>
      </Col>
    </React.Fragment>
  )).add('With drag and drop', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table</h4>
        <TableNew data={assets} draggable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </TableNew>
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
  ))
