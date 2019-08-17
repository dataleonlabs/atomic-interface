import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import FilePickerS3 from './index'
import { CloudRain } from 'react-feather';
import Form from '../../..';


storiesOf('Forms|FilePickerS3', module)
  .add('Example', () => (
    <React.Fragment>
      <Form>
        {({ values }) => (
          <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
            <h4>FilePickerS3</h4>
            <FilePickerS3
              name="myfile"
              color="primary"
              size={'md'}
              multipleFiles={true}
              icon={<CloudRain size={15} />}
              label="Files"
              outline={true}
              onUploadFinish={(data) => { }}
              server="https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com"
              signingUrl="/dev/test-signed"
              signingUrlMethod="PUT"
              XAmzAcl="public-read"
            ><span>Upload your files with S3</span></FilePickerS3>
            <code>values: {JSON.stringify(values)}</code><br />
          </Col>
        )}
      </Form>
    </React.Fragment>
  ))