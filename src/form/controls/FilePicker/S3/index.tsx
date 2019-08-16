import * as React from 'react'
import styled from 'styled-components'
import ReactS3Uploader from 'react-s3-uploader'

import { API_URL } from 'src/parameters'
import { getHeaders } from 'src/utils/graph'
import { create } from 'src/utils/graph/GraphExplorer'
import Button from 'src/presentations/elements/Button'
import File from 'src/presentations/collections/File'
import Text from 'src/presentations/elements/Text'
import { Props, State } from './types'


export function getHeaders() {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  }
  return headers
}

const StyledImageUploader = styled.div`
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

const StyledUploadBtnWrapper = styled.div`
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

const StyledIconUpload = styled.span`
  margin-right: 10px !important;
  display: inline-block;
  vertical-align: bottom;
`

const StyledButtonLabel = styled.span`
  width: 36px !important;
  text-align: center !important;
  display: inline-block;
`

class ImageUploader extends React.PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    multipleFiles: true,
    value: {
      key: '',
      name: '',
    },
  }

  state: State = {
    loading: false,
    progress: 0,
    error: false,
    errorMessage: '',
  }

  onClick = () => {
    // onClick button
  }

  onSignedUrl = () => {
    this.setState({ loading: true })
  }

  onUploadProgress = (progress: number) => {
    this.setState({ progress })
  }

  onUploadError = (e: any) => {
    this.setState({
      error: true,
      loading: false,
      errorMessage: e,
    })
  }

  onUploadFinish = async (params: any) => {
    try {
      const values = {
        name: params.originalFilename,
        key: params.filename,
      }

      this.setState({ loading: false, progress: 0 }, async () => {
        const res: any = await create({
          target: 'File',
          alias: 'row',
          values,
        })

        this.props.onUploadFinish({
          name: this.props.name,
          value: { ...values, id: res.row.id },
          error: false,
        })
      })
    } catch (e) {
      this.setState({
        error: true,
        loading: false,
        errorMessage: e.message,
      })
    }
  }

  render() {
    return (
      <StyledImageUploader>
        <span className="Label">{this.props.label}</span>
        <StyledUploadBtnWrapper label={this.props.label}>
          <Button
            loading={this.state.loading}
            size="small"
            themeColor="primary"
            label={
              <>
                <StyledIconUpload />
                {i18n.t('Upload image')}
                {this.state.loading && (
                  <StyledButtonLabel>{this.state.progress}%</StyledButtonLabel>
                )}
              </>
            }
            onClick={this.onClick}
          />
          <ReactS3Uploader
            multiple={this.props.multipleFiles}
            signingUrl="/s3/sign"
            signingUrlMethod="GET"
            accept={this.props.accept}
            s3path="/"
            onSignedUrl={this.onSignedUrl}
            onProgress={this.onUploadProgress}
            onError={this.onUploadError}
            onFinish={this.onUploadFinish}
            signingUrlHeaders={{ ...getHeaders() }}
            signingUrlQueryParams={{ type: 'PUT' }}
            uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} // this is the default
            contentDisposition="auto"
            server={API_URL}
            autoUpload={true}
          />
        </StyledUploadBtnWrapper>
        {this.state.error === true && (
          <Text className="clr-red ft-small" useWordBoundary={30}>
            {this.state.errorMessage}
          </Text>
        )}
        {typeof this.props.value === 'object' && (
          <div className="FileWrapper">
            <File
              fileId={this.props.value.id}
              fileKey={this.props.value.key}
              fileName={this.props.value.name}
              showLink={this.props.showLink}
            />
          </div>
        )}
      </StyledImageUploader>
    )
  }
}

export default ImageUploader
