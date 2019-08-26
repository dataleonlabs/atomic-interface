import * as React from 'react'
import * as enzyme from 'enzyme'
import DropzoneS3 from './index'
import Form from '../../..';
import { CloudRain } from 'react-feather';

describe('<DropzoneS3 />', () => {
  it('U-TEST-1 - Dropzone', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <DropzoneS3
            name="image"
            s3Url={"http://test-storage.qa.youngapp.co.s3-website-us-east-1.amazonaws.com"}
            color="primary"
            size={'md'}
            multipleFiles={true}
            icon={<CloudRain size={15} />}
            label="Files"
            outline={true}
            onUploadFinish={() => { }}
            server="https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com"
            signingUrl="/dev/test-signed"
            signingUrlMethod="PUT"
            XAmzAcl="public-read"
          ><span>Upload your files with S3</span></DropzoneS3>
        )}
      </Form>
    )

    expect(wrapper.find(DropzoneS3)).toHaveLength(1);
  })
})