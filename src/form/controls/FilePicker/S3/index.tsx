import * as React from 'react';
const ReactS3Uploader = require('react-s3-uploader');
import {
  StyledImageUploader, StyledUploadBtnWrapper
} from './style';
import { Props, State } from './props'

import { Text, Button } from '../../../../../src'
import { FieldProps, Field } from 'formik';
import Control from '../../../Control';
import { FormText } from 'reactstrap';
import uuidv4 from 'uuidv4';

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
    uuid: true
  }

  public state: State = {
    error: false,
    errorMessage: '',
    fileName: '',
    loading: false,
    progress: 0,
  }

  public getSignedUrl = (file: any, callback: any) => {

    let fileName = file.name;
    if (this.props.uuid === true) {
      const ext = file.name.split('.').pop();
      fileName = `${uuidv4().toLocaleUpperCase()}.${ext}`;
    }

    this.setState({ fileName }, () => {
      fetch(`${this.props.server}${this.props.signingUrl}?key=${fileName}&contentType=${file.type}&type=put&acl=${this.props.XAmzAcl}`)
        .then(data => data.json())
        .then(data => {
          callback({ signedUrl: data.data });
        })
        .catch(error => {
          this.setState(error);
        });
    })
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

  public onUploadFinish = (setFieldValue: FieldProps<{}>['form']['setFieldValue']) => async () => {
    try {
      this.setState({ loading: false, progress: 0 }, () => {
        setFieldValue(this.props.name, this.state.fileName);
        if (typeof this.props.onUploadFinish === 'function') {
          this.props.onUploadFinish(this.state.fileName);
        }
      })
    } catch (e) {
      this.setState({
        error: true,
        errorMessage: e.message,
        loading: false,
      })
    }
  }


  public renderField = ({ field, form: { submitCount, errors, setFieldValue } }: FieldProps<{}>) => {
    const {
      outline,
      block,
      color,
      size,
      id,
      style,
      icon,
    } = this.props;
    const { value, ...rest } = field;
    return (
      <>
        <StyledImageUploader>
          <StyledUploadBtnWrapper label={this.props.label}>
            <Button
              loading={this.state.loading}
              outline={outline}
              block={block}
              color={color}
              disabled={(this.state.loading || 0) > 0 ? true : false}
              size={size}
              icon={icon}
              id={id}
              style={style}
              type={'button'}
            >
              <>
                {this.props.children} {this.state.progress ? `- ${this.state.progress}%` : ''}
              </>
            </Button>
            <ReactS3Uploader
              {...rest}
              multiple={this.props.multipleFiles}
              signingUrl={this.props.signingUrl}
              signingUrlMethod="PUT"
              getSignedUrl={this.getSignedUrl}
              accept={this.props.accept}
              s3path="/"
              onSignedUrl={this.onSignedUrl}
              onProgress={this.onUploadProgress}
              onError={this.onUploadError}
              onFinish={this.onUploadFinish(setFieldValue)}
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

          {submitCount > 0 && (errors[this.props.name] ? true : false)
            && <FormText color="danger">{errors[this.props.name]}</FormText>
          }

        </StyledImageUploader>
      </>
    )
  }

  public render() {
    return (
      <Control {...this.props}>
        <Field id={this.props.name} render={this.renderField} />
      </Control>
    )
  }
}

export default FilePickerS3
