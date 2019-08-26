import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';
import { Col } from 'reactstrap';
import Form from './../../index'

storiesOf('Forms|Checkbox', module)
  .add('Checkbox', () => (
    <React.Fragment>
        <Col sm={8} style={{marginTop: 30, marginLeft: 30 }}>
          <h2>Form Elements</h2>
          <br/>
          <hr/>
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <br/>
          <h4>Checkbox</h4>
          <br/>
          <p>For even more customization and cross browser consistency, use our completely custom checkbox element to replace the browser defaults.</p>
          <hr/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Form>
            {(_) => (
              <>
                <Checkbox name='gender' label={'Check this custom checkbox'}/>
                <Checkbox disabled name='gender2' label={'Or this one (disabled)'} />
                <Checkbox checked name='gender3' label={'Check this custom checkbox (checked)'}/>
                <Checkbox disabled checked name='gender4' label={'Or this one (checked and disabled)'} />
              </>
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
    <>
      <Checkbox name='gender' label={'Check this custom checkbox'}/>
      <Checkbox disabled name='gender2' label={'Or this one (disabled)'} />
      <Checkbox checked name='gender3' label={'Check this custom checkbox (checked)'}/>
      <Checkbox disabled checked name='gender4' label={'Or this one (checked and disabled)'} />
    </>
  )}
</Form>
            `}
          </pre>
        </Col>
    </React.Fragment>
  )).add('Test disabled', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Checkbox</h4>
        <Form>
          {(_) => (
            <>
              <Checkbox name='gender' label={'Check this custom checkbox'} />
              <Checkbox disabled name='gender2' label={'Or this one'} />
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  ))