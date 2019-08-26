import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import FilePickerS3 from './index'
import { CloudRain } from 'react-feather';
import Form from '../../..';


storiesOf('Forms|FilePicker', module)
  .add('File Browser - AWS S3', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h2>File Browser</h2>
      <br/>
      <hr/>
      <p>The file input is the most generaly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Choose file… and selected file name text.</p>
      <br/>
      <h4>File Browser - AWS S3</h4>
      <br/>
      <p>Dropzone to upload the files to the AWS S3 bucket.</p>
      <hr/>
      <h6><strong>Example</strong></h6>
      <hr/>
      <Form>
        {({ values }) => (
          <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
            <h4>FilePicker forAWS S3</h4>
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
      <br/>
      <br/>
      <h6><strong>Code</strong></h6>
      <hr/>
      <pre>
        {`
<Form>
  {({ values }) => (
    <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>FilePicker forAWS S3</h4>
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))