import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Radio from '../Radio';
import Button from '../Button';
require('codemirror/mode/jsx/jsx');

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
          <br />
          <hr />
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br />
          <h4>Basic Example</h4>
          <br />
          <p>Custom select element with different <code>{`options`}</code>.</p>
          <hr />
          <h6><strong>Example</strong></h6>
          <hr />
          <Form
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            {(values) => (
              <>
                <Select
                  isClearable
                  creatable
                  name={'favorite'}
                  options={options}
                />
                <Button type="submit">Submit</Button><br />
                <code>values: {JSON.stringify(values.values)}</code><br />
              </>
            )}
          </Form>
          <br />
          <br />
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Form            
  onSubmit={(values) => {
    alert(JSON.stringify(values));
  }}
  >
  {(values) => (
    <>
      <Select
        isClearable
        creatable                  
        name={'favorite'}
        options={options}
      />
      <Button type="submit">Submit</Button><br />
      <code>values: {JSON.stringify(values.values)}</code><br />
    </>
  )}
</Form>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true
            }}
          />
        </Col>
      </React.Fragment>
    )
  }).add('Basic Example Multi Selection', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <React.Fragment>
        <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>Form Elements - Select</h2>
          <br />
          <hr />
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br />
          <h4>Basic Example Multi Selection</h4>
          <br />
          <p>To enable multiple selection make true property just write <code>{`isMulti`}</code>.</p>
          <hr />
          <h6><strong>Example</strong></h6>
          <hr />
          <Form
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            {(values) => (
              <>
                <Select
                  isClearable
                  creatable
                  isMulti
                  name={'favorite'}
                  options={options}
                />
                <Button type="submit">Submit</Button><br />
                <code>values: {JSON.stringify(values.values)}</code><br />
              </>
            )}
          </Form>
          <br />
          <br />
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Form            
  onSubmit={(values) => {
    alert(JSON.stringify(values));
  }}
>
  {(values) => (
    <>
      <Select
        isClearable
        creatable
        isMulti
        name={'favorite'}
        options={options}
      />
      <Button type="submit">Submit</Button><br />
      <code>values: {JSON.stringify(values.values)}</code><br />
    </>
  )}
</Form>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true
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
          <br />
          <p>Add <code>options={`{groupedOptions}`}</code> property in which <code>{`groupedOptions`}</code> contain an array of multiple object having different attributes defined.</p>
          <hr />
          <h6><strong>Example</strong></h6>
          <hr />
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
          <br />
          <br />
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`
<Select
  isClearable
  creatable
  isMulti
  name={'favorite'}
  options={groupedOptions}
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
    )
  }).add('Conditional Example', () => {

    const drinkOptions = [
      { value: 'pepsi', label: 'Pepsi' },
      { value: 'cola', label: 'Coca-Cola' },
      { value: 'thumsup', label: 'Thums Up' },
    ];
    const fruitsOptions = [
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'mango', label: 'Mango' },
    ];

    return (
      <React.Fragment>
        <Col sm={6} style={{ marginTop: 30, marginLeft: 30, marginBottom: 30 }}>
          <h2>Form Elements - Select</h2>
          <br />
          <hr />
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br />
          <h4>Conditional Example</h4>
          <br />
          <p>Custom select element with different <code>{`options`}</code>.</p>
          <hr />
          <h6><strong>Example</strong></h6>
          <hr />
          <Form>
            {(values) => (
              <>
                <Radio value="drinks" id="drinks" name='type' label="Drinks" />
                <Radio value="fruits" id="fruits" name='type' label="Fruits" />
                <Select
                  isClearable
                  creatable
                  isMulti
                  label="Drinks"
                  name={'drink'}
                  options={drinkOptions}
                  conditionnals={{
                    type: 'drinks'
                  }}
                />
                <Select
                  isClearable
                  creatable
                  isMulti
                  label="Fruits"
                  name={'fruit'}
                  options={fruitsOptions}
                  conditionnals={{
                    type: 'fruits'
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
            value={`<Radio value="drinks" id="drinks" name='type' label="Drinks" />
<Radio value="fruits" id="fruits" name='type' label="Fruits" />
<Select
  isClearable
  creatable
  isMulti
  label="Drinks"
  name={'drink'}
  options={drinkOptions}
  conditionnals={{
    type: 'drinks'
  }}
/>
<Select
  isClearable
  creatable
  isMulti
  label="Fruits"
  name={'fruit'}
  options={fruitsOptions}
  conditionnals={{
    type: 'fruits'
  }}
/>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true
            }}
          />
        </Col>
      </React.Fragment>
    )
  }).add('readOnly Example ', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <React.Fragment>
        <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>Form Elements - Select</h2>
          <br />
          <hr />
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br />
          <h4>readOnly Example</h4>
          <br />
          <p>Custom select element with different <code>{`options`}</code>.</p>
          <hr />
          <h6><strong>Example</strong></h6>
          <hr />
          <Form
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            {(values) => (
              <>
                <Select
                  readOnly={true}                  
                  isClearable
                  creatable
                  name={'favorite'}
                  options={options}
                />
                <Button type="submit">Submit</Button><br />
                <code>values: {JSON.stringify(values.values)}</code><br />
              </>
            )}
          </Form>
          <br />
          <br />
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Form            
  onSubmit={(values) => {
    alert(JSON.stringify(values));
  }}
  >
  {(values) => (
    <>
      <Select
        isClearable
        creatable                  
        name={'favorite'}
        options={options}
      />
      <Button type="submit">Submit</Button><br />
      <code>values: {JSON.stringify(values.values)}</code><br />
    </>
  )}
</Form>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true
            }}
          />
        </Col>
      </React.Fragment>
    )
  });
