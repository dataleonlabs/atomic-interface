import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import FilePickerS3 from './index'
import { CloudRain } from 'react-feather';
import Form from '../../..';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Radio from '../../Radio';
require('codemirror/mode/jsx/jsx');

var reindent = function (cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


storiesOf('Forms|File Browser S3', module)
  .add('File Browser - AWS S3', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>File Browser</h2>
        <br />
        <hr />
        <p>The file input is the most generaly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Choose file… and selected file name text.</p>
        <br />
        <h4>File Browser - AWS S3</h4>
        <br />
        <p>Dropzone to upload the files to the AWS S3 bucket.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {({ values }) => (
            <Col sm={8} style={{ marginTop: 30 }}>
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
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`
<FilePickerS3
  name='myfile'
  color='primary'
  size={'md'}
  multipleFiles={true}
  icon={<CloudRain size={15} />}
  label='Files'
  outline={true}
  onUploadFinish={(data) => { }}
  server='https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com'
  signingUrl='/dev/test-signed'
  signingUrlMethod='PUT'
  XAmzAcl='public-read'
><span>Upload your files with S3</span></FilePickerS3>
<code>values: {JSON.stringify(values)}</code><br />
`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  )).add('File Browser - AWS S3 with Conditional', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30, marginBottom: 30 }}>
        <h2>File Browser</h2>
        <br />
        <hr />
        <p>The file input is the most generaly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Choose file… and selected file name text.</p>
        <br />
        <h4>File Browser - AWS S3</h4>
        <br />
        <p>Dropzone to upload the files to the AWS S3 bucket.</p>
        <hr />
        <h6><strong>Example</strong></h6>
        <hr />
        <Form>
          {({ values }) => (
            <Col sm={8} style={{ marginTop: 30 }}>
              <h4>FilePicker forAWS S3</h4>
              <Radio value="company" id="company" name='account' label="Iam a company" />
              <Radio value="person" id="person" name='account' label="Iam a person" />
              <FilePickerS3
                name="myfile"
                color="primary"
                size={'md'}
                multipleFiles={true}
                icon={<CloudRain size={15} />}
                label="Files For Company"
                outline={true}
                onUploadFinish={(data) => { }}
                server="https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com"
                signingUrl="/dev/test-signed"
                signingUrlMethod="PUT"
                XAmzAcl="public-read"
                conditionnals={{
                  account: 'company'
                }}
              ><span>Upload your files with S3</span></FilePickerS3>
              <FilePickerS3
                name="myfile"
                color="primary"
                size={'md'}
                multipleFiles={true}
                icon={<CloudRain size={15} />}
                label="Files For Person"
                outline={true}
                onUploadFinish={(data) => { }}
                server="https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com"
                signingUrl="/dev/test-signed"
                signingUrlMethod="PUT"
                XAmzAcl="public-read"
                conditionnals={{
                  account: 'person'
                }}
              ><span>Upload your files with S3</span></FilePickerS3>
              <code>values: {JSON.stringify(values)}</code><br />
            </Col>
          )}
        </Form>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Radio value="company" id="company" name='account' label="Iam a company" />
<Radio value="person" id="person" name='account' label="Iam a person" />
<FilePickerS3
  name="myfile"
  color="primary"
  size={'md'}
  multipleFiles={true}
  icon={<CloudRain size={15} />}
  label="Files For Company"
  outline={true}
  onUploadFinish={(data) => { }}
  server="https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com"
  signingUrl="/dev/test-signed"
  signingUrlMethod="PUT"
  XAmzAcl="public-read"
  conditionnals={{
    account: 'company'
  }}
><span>Upload your files with S3</span></FilePickerS3>
<FilePickerS3
  name="myfile"
  color="primary"
  size={'md'}
  multipleFiles={true}
  icon={<CloudRain size={15} />}
  label="Files For Person"
  outline={true}
  onUploadFinish={(data) => { }}
  server="https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com"
  signingUrl="/dev/test-signed"
  signingUrlMethod="PUT"
  XAmzAcl="public-read"
  conditionnals={{
    account: 'person'
  }}
><span>Upload your files with S3</span></FilePickerS3>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ));