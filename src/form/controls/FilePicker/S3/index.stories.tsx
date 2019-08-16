import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import FilePickerS3 from './index'


storiesOf('Forms|FilePickerS3', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>FilePickerS3</h4>
        <FilePickerS3
          name="image"
          label="Picture"
          onUploadFinish={(data) => { }}
          server="https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com"
          signingUrl="/dev/test-signed"
          signingUrlMethod="PUT"
          XAmzAcl="public-read"
        />
      </Col>
    </React.Fragment>
  ))