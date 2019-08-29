import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckboxCollection from './Collection';
import { Col } from 'reactstrap';
import Form from '../../index'

storiesOf('Forms|Checkbox', module)
  .add('Test Collection rendering', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Checkbox Collection</h4>
        <Form>
          {(_) => (
            <>
              <CheckboxCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Checkbox Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                fieldUpdate="active">                
            </CheckboxCollection>
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  ))