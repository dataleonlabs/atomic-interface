import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioCollection from './Collection';
import { Col } from 'reactstrap';
import Form from '../../index'

storiesOf('Forms|Radio', module)
  .add('Test Collection rendering', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Radio Collection</h4>
        <Form>
          {(_) => (
            <>
              <RadioCollection
                apiKey="xxx"
                apiUrl="test"
                type="update"
                model="Playlist"
                label="Radio Collection"
                name="chk1"
                fieldId={{ key: "id", value: "1" }}
                fieldUpdate="active">
              </RadioCollection>
            </>
          )}
        </Form>
      </Col>
    </React.Fragment>
  ))