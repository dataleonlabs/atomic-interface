import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import DropzoneS3 from './index'
import { CloudRain } from 'react-feather';
import Form from '../../..';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


storiesOf('Forms|Dropzone', module)
  .add('Dropzone - AWS S3', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Form Elements</h2>
        <br/>
        <hr/>
        <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        <br/>
        <h4>Dropzone - AWS S3</h4>
        <br/>
        <p>Dropzone to upload the files.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Form>
          {({ values }) => (
            <Col sm={4} style={{ marginTop: 30, paddingLeft: 0}}>
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
        <Form initialValues={{
          myfile: 'FE3731BC-4C71-4505-90B3-A705FC6F6F99.png'
        }}>
          {({ values }) => (
            <Col sm={4} style={{ marginTop: 30}}>
              <h5>With value</h5>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value="<Form>
          {({ values }) => (
            <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
              <DropzoneS3
                name='myfile'
                s3Url={'http://test-storage.qa.youngapp.co.s3-website-us-east-1.amazonaws.com'}
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
              ><span>Upload your files with S3</span></DropzoneS3>
              <code>values: {JSON.stringify(values)}</code><br />
            </Col>
          )}
          </Form>
          <Form initialValues={{
            myfile: 'FE3731BC-4C71-4505-90B3-A705FC6F6F99.png'
          }}>
            {({ values }) => (
              <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
                <h5>With value</h5>
                <DropzoneS3
                  name='myfile'
                  s3Url={'http://test-storage.qa.youngapp.co.s3-website-us-east-1.amazonaws.com'}
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
                ><span>Upload your files with S3</span></DropzoneS3>
                <code>values: {JSON.stringify(values)}</code><br />
              </Col>
            )}
          </Form>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  ))