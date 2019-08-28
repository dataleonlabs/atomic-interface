import React from 'react';
import { storiesOf } from '@storybook/react';
import SwitchCollection from './Collection';
import { Col } from 'reactstrap';
import Form from '../../index'

storiesOf('Forms|Switch', module)
  .add('Test Collection rendering', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Switch Collection</h4>
        <Form>
          {(_) => (
            <>
              <SwitchCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Switch Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                fieldUpdate="active">
              </SwitchCollection>
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  ))