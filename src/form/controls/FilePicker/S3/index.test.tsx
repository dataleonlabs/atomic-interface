import * as React from 'react'
import * as enzyme from 'enzyme'
import FilePickerS3 from './index'
import Form from '../../..';
import { CloudRain } from 'react-feather';

describe('<FilePickerS3 />', () => {
  it('U-TEST-1 filepicker render with d  disabled', () => {
    const wrapper = enzyme.mount(
      <Form>
        {(_) => (
          <FilePickerS3
            name="image"
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
          ><span>Upload your files with S3</span></FilePickerS3>
        )}
      </Form>
    )

    expect(wrapper.find(FilePickerS3)).toHaveLength(1);
    expect(wrapper.find(CloudRain)).toHaveLength(1);
  })
})