import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Radio from '../Radio';
require('codemirror/mode/jsx/jsx');
storiesOf('Forms|DatePicker', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>DatePicker</h2>
        <br />
        <hr />
        <p>The datepicker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay. Read the <a href="https://jqueryui.com/datepicker/" target="_blank">Official jQuery UI Datepicker Documentation</a> for a full list of instructions and other options.</p>
        <br />
        <h4>Basic Example</h4>
        <br />
        <p>Choose a date, click elsewhere on the page (blur the input), or hit the Esc key to close. If a date is chosen, feedback is shown as the input's value.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <DatePicker dateFormat="yyyy/MM/dd" name="datepicker" />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<DatePicker dateFormat='yyyy/MM/dd' name='datepicker' />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Disabled', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>DatePicker - Disabled</h4>
        <br />
        <p>Add <code>disabled={`{true}`}</code> property to make datepicker component disbale.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <DatePicker disabled={true} dateFormat="yyyy/MM/dd" name="datepicker" />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<DatePicker disabled={true} dateFormat='yyyy/MM/dd' name='datepicker' />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('DateRange', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>DatePicker - DateRange</h4>
        <br />
        <p>Add <code>startDate</code>, <code>endDate</code>, <code>selected</code> property to use date range.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(_) => (
            <DatePicker
              options={{
                onChange: date => new Date("2019/09/08"),
                selected: new Date("2019/09/02"),
                startDate: new Date("2019/09/02"),
                endDate: new Date("2019/09/5")
              }}
              name="datepicker"
            />
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<DatePicker
  options={{
    onChange: date => new Date("2019/09/08"),
    selected: new Date("2019/09/02"),
    startDate: new Date("2019/09/02"),
    endDate: new Date("2019/09/5")
  }}
  name="datepicker"
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
  )).add('Conditional Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30, marginBottom: 30 }}>
        <h2>DatePicker</h2>
        <br />
        <hr />
        <p>The datepicker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay. Read the <a href="https://jqueryui.com/datepicker/" target="_blank">Official jQuery UI Datepicker Documentation</a> for a full list of instructions and other options.</p>
        <br />
        <h4>Conditional Example</h4>
        <br />
        <p>Choose a date, click elsewhere on the page (blur the input), or hit the Esc key to close. If a date is chosen, feedback is shown as the input's value.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {(values) => (
            <>
              <Radio value="standard" id="standard" name='type' label="Standard" />
              <Radio value="disabled" id="disabled" name='type' label="Disabled" />
              <Radio value="range" id="range" name='type' label="Date Range" />

              <DatePicker
                dateFormat="yyyy/MM/dd"
                conditionnals={{
                  type: 'standard'
                }}
                name="datepicker" />

              <DatePicker
                disabled={true}
                dateFormat="yyyy/MM/dd"
                conditionnals={{
                  type: 'disabled'
                }}
                name="datepicker" />

              <DatePicker
                options={{
                  onChange: date => new Date("2019/09/08"),
                  selected: new Date("2019/09/02"),
                  startDate: new Date("2019/09/02"),
                  endDate: new Date("2019/09/5")
                }}
                conditionnals={{
                  type: 'range'
                }}
                name="datepicker"
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
<Radio value="standard" id="standard" name='type' label="Standard" />
<Radio value="disabled" id="disabled" name='type' label="Disabled" />

<DatePicker
  dateFormat="yyyy/MM/dd"
  conditionnals={{
    type: 'standard'
  }}
  name="datepicker" />

<DatePicker
  disabled={true}
  dateFormat="yyyy/MM/dd"
  conditionnals={{
    type: 'disabled'
  }}
  name="datepicker" />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ));