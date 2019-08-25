import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import Column from './Column';
import Table from './index';
import faker from 'faker'

const assets: any[] = [];
for (let index = 0; index < 10; index++) {
  assets.push({
    id: `usr_${index + 1}`,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  });
}
storiesOf('UI Elements|Table', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Getting Started</h4>
        <p>
          Table is a component that displays table data from a local or remote source.
          It supports paging, sorting, filtering, grouping and other data shaping options, row selection, and data editing. 
        </p>
        <hr />
        <Table data={assets} striped={false}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Loading', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Loading</h4>
        <p>
          The loading property should indicate whether there is an active request. Once the request is completed, pass the loaded data to the Taable plugin’s rows property.
        </p>
        <hr />
        <Table data={assets} selectable={true} loading={true} sortable={true} columnOrdering={[]} fixedLeftColumns={['firstName']}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Customize the Appearance', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Customize the Appearance</h4>
        <p>
          Most popular customization tasks are described below with striped.
        </p>
        <hr />
        <Table data={assets} striped={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Column Alignment', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Column Alignment</h4>
        <p>
          The Table allows you to specify the column alignment with align on each Column
        </p>
        <hr />
        <Table data={assets} striped={true}>
          <Column align="right" field={'firstName'}>First Name</Column>
          <Column align="center" field={'firstName'}>First Name</Column>
          <Column align="center" field={'lastName'}>Last Name</Column>
          <Column align="left" field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  // .add('With row size large', () => (
  //   <React.Fragment>
  //     <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
  //       <h4>Table</h4>
  //       <Table data={assets} striped={true} rowSize={'large'}>
  //         <Column field={'firstName'}>First Name</Column>
  //         <Column field={'lastName'}>Last Name</Column>
  //         <Column field={'email'}>Email</Column>
  //       </Table>
  //     </Col>
  //   </React.Fragment>
  // )).add('With row size small', () => (
  //   <React.Fragment>
  //     <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
  //       <h4>Table</h4>
  //       <Table data={assets} striped={false} rowSize={'small'}>
  //         <Column field={'firstName'}>First Name</Column>
  //         <Column field={'lastName'}>Last Name</Column>
  //         <Column field={'email'}>Email</Column>
  //       </Table>
  //     </Col>
  //   </React.Fragment>
  // ))
  .add('Selection', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Selection</h4>
        <p>The Table component supports selecting/deselecting rows programmatically or via the UI.
          It seamlessly integrates with paging, sorting, filtering, and grouping.</p>
        <hr />
        <Table data={assets} selectable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Disabled Selected</h4>
        <p>
          Table is a component that displays table data from a local or remote source.
          It supports paging, sorting, filtering, grouping and other data shaping options, row selection, and data editing.
        </p>
        <hr />
        <Table data={assets} selectable={true} disabledSelected={[4, 6]}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Hide Header', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Hide Header</h4>
        <p>
          Table is a component that displays table data from a local or remote source.
          It supports paging, sorting, filtering, grouping and other data shaping options, row selection, and data editing.
        </p>
        <hr />
        <Table data={assets} hideHeader={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Sorting', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Sorting</h4>
        <p>
          The Table component supports sorting data by one or several column values. Use the corresponding plugins and UI (column headers and Group Panel) to manage the sorting state and sort data programmatically.
          Click several columns while holding Shift to sort data by these columns. Clicking a column while holding Ctrl (Cmd for MacOS) cancels sorting by this column.
        </p>
        <hr/>
        <Table data={assets} sortable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Column Reordering', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Column Reordering</h4>
        <p>
          The Table component allows reordering grid columns programmatically or using the drag-and-drop feature
        </p>
        <hr />
        <Table data={assets} selectable={true} sortable={true} columnOrdering={[]}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Column Visibility', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Column Visibility</h4>
        <p>A Table component provides the capability to hide or show table columns at runtime.</p>
        <hr />
        <Table data={assets} selectable={true} sortable={true} columnOrdering={[]} hiddenColumnNames={['email']}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Fixed Columns', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Fixed Columns</h4>
        <p>
          Table allows you to fix one or more first and last columns.
          Fixed columns remain at their initial places regardless of the current scrolling position.
        </p>
        <hr />
        <Table data={assets} selectable={true} sortable={true} columnOrdering={[]} fixedLeftColumns={['firstName']}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Loading', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Loading</h4>
        <p>
          The loading property should indicate whether there is an active request. Once the request is completed, pass the loaded data to the Taable plugin’s rows property.
        </p>
        <hr/>
        <Table data={assets} selectable={true} loading={true} sortable={true} columnOrdering={[]} fixedLeftColumns={['firstName']}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'} sortable={false}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))

  .add('Empty', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Empty</h4>
        <p>
          Table allows empty table display
        </p>
        <hr />
        <Table data={[]} selectable={true}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Paging', () => (
    <React.Fragment>
      <Col sm={10} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Table - Paging</h4>
        <p>
          The Table component supports data paging.
          You can specify the page size and switch pages programmatically or via the Paging Panel’s UI controls.
          The paging state management, Paging Panel rendering, and built-in paging logic are implemented in the corresponding plugins.
          You can also configure the Grid to use server-side paging if your data service supports it.
        </p>
        <Table data={assets} selectable={true} pagination={{ currentPage: 1, total: 1000 }}>
          <Column field={'firstName'}>First Name</Column>
          <Column field={'lastName'}>Last Name</Column>
          <Column field={'email'}>Email</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))