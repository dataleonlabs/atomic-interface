import styled from 'styled-components';
const DropzoneS3Uploader = require('react-dropzone-s3-uploader');

export const StyledDropzoneS3Uploader = styled(DropzoneS3Uploader)`
  border: none!important;
  height: auto;

  .Dropzone {
    border: 2px dashed #ddd;
    height: 200px;
    :hover {
      border-color: #007bff;
    }
  }

  .Dropzone.dropped {
    height: auto;
    border: 2px solid #ddd;
  }

  .DropText {
    text-align: center;
    line-height: 200px;
  }
`