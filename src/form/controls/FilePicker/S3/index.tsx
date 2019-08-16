import * as React from 'react';
const ReactS3Uploader = require('react-s3-uploader');
import {
  StyledButtonLabel, StyledIconUpload,
  StyledImageUploader, StyledUploadBtnWrapper
} from './style';
import { Props, State } from './props'

import { Text, Button } from '../../../../../src'


export function getHeaders() {
  const headers = {
    Accept: 'application/json',
    Authorization: '',
    'Content-Type': 'application/json',
  }
  return headers
}



class FilePickerS3 extends React.PureComponent<Props> {

  public static defaultProps: Partial<Props> = {
    XAmzAcl: 'private',
    multipleFiles: true,
    value: {
      key: '',
      name: '',
    },
  }

  public state: State = {
    error: false,
    errorMessage: '',
    loading: false,
    progress: 0,
  }

  public getSignedUrl = (file: any, callback: any) => {

    fetch(`${this.props.server}${this.props.signingUrl}?key=${file.name}&contentType=${file.type}&type=${'put'}`)
      .then(data => data.json())
      .then(data => {
        callback(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  public onClick = () => {
    // onClick button
  }

  public onSignedUrl = () => {
    this.setState({ loading: true })
  }

  public onUploadProgress = (progress: number) => {
    this.setState({ progress })
  }

  public onUploadError = (e: any) => {
    this.setState({
      error: true,
      errorMessage: e,
      loading: false,
    })
  }

  public onUploadFinish = async (params: any) => {
    try {
      const values = {
        key: params.filename,
        name: params.originalFilename,
      }

      this.setState({ loading: false, progress: 0 })

      this.props.onUploadFinish({
        error: false,
        name: this.props.name,
        value: { ...values },
      })
    } catch (e) {
      this.setState({
        error: true,
        errorMessage: e.message,
        loading: false,
      })
    }
  }

  public render() {
    return (
      <>
        <StyledImageUploader>
          <span className="Label">{this.props.label}</span>
          <StyledUploadBtnWrapper label={this.props.label}>
            <Button
              loading={this.state.loading}
              onClick={this.onClick}
              {...this.props.buttonProps}
            >
              <>
                <StyledIconUpload />
                {'Upload image'}
                {this.state.loading && (
                  <StyledButtonLabel>{this.state.progress}%</StyledButtonLabel>
                )}
              </>
            </Button>
            <ReactS3Uploader
              multiple={this.props.multipleFiles}
              signingUrl={this.props.signingUrl}
              signingUrlMethod={this.props.signingUrlMethod}
              getSignedUrl={this.getSignedUrl}
              accept={this.props.accept}
              s3path="/"
              onSignedUrl={this.onSignedUrl}
              onProgress={this.onUploadProgress}
              onError={this.onUploadError}
              onFinish={this.onUploadFinish}
              signingUrlHeaders={{ ...getHeaders() }}
              signingUrlQueryParams={{ type: 'PUT' }}
              uploadRequestHeaders={{ 'x-amz-acl': this.props.XAmzAcl }} // this is the default
              contentDisposition="auto"
              server={this.props.server}
              autoUpload={true}
            />
          </StyledUploadBtnWrapper>
          {this.state.error === true && (
            <Text>
              {this.state.errorMessage}
            </Text>
          )}

        </StyledImageUploader>
      </>
    )
  }
}

export default FilePickerS3
