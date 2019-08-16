import styled from 'styled-components';


export const StyledImageUploader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .Label {
    font-weight: 500;
    color: #333;
  }

  .FileWrapper {
    margin-top: 10px;
  }
`

export const StyledUploadBtnWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-top: ${(props: { label?: string }) => (props.label ? '10px' : '0')};
  cursor: pointer !important;
  input[type='file'] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer !important;
  }
`

export const StyledIconUpload = styled.span`
  margin-right: 10px !important;
  display: inline-block;
  vertical-align: bottom;
`

export const StyledButtonLabel = styled.span`
  width: 36px !important;
  text-align: center !important;
  display: inline-block;
`