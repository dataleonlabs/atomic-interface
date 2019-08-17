import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import DropzoneS3 from './index'
import { CloudRain } from 'react-feather';
import Form from '../../..';


storiesOf('Forms|Dropzone', module)
  .add('S3', () => (
    <React.Fragment>
      <Form>
        {({ values }) => (
          <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
            <h4>Dropzone for AWS S3</h4>
            <DropzoneS3
              name="myfile"
              s3Url={"http://test-storage.qa.youngapp.co.s3-website-us-east-1.amazonaws.com"}
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
            ><span>Upload your files with S3</span></DropzoneS3>
            <code>values: {JSON.stringify(values)}</code><br />
          </Col>
        )}
      </Form>
    </React.Fragment>
  ))