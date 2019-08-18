import * as React from 'react';
import { DropzoneS3Props as Props, State } from './props'

import { FieldProps, Field } from 'formik';
import Control from '../../../Control';
import { FormText } from 'reactstrap';
import uuidv4 from 'uuidv4';
import UploadDisplay from './UploadDisplay';
import { StyledDropzoneS3Uploader } from './style';

export function getHeaders() {
  const headers = {
    Accept: 'application/json',
    Authorization: '',
    'Content-Type': 'application/json',
  }
  return headers
}

class DropzoneS3 extends React.PureComponent<Props> {

  public static defaultProps: Partial<Props> = {
    XAmzAcl: 'private',
    multipleFiles: false,
    signingUrlMethod: 'PUT',
    uuid: true
  }

  public state: State = {
    error: false,
    errorMessage: '',
    fileName: '',
    loading: false,
    progress: 0,
    uploaded: false,
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
      this.setState({ loading: false, uploaded: true, progress: 0 }, () => {
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
    return (
      <>
        <StyledDropzoneS3Uploader
          s3Url={this.props.s3Url}
          maxSize={this.props.maxSize || 1024 * 1024 * 5}
          upload={{ ...this.props, getSignedUrl: this.getSignedUrl }}
          onFinish={this.onUploadFinish(setFieldValue)}
          onError={this.onUploadError}
          onProgress={this.onUploadProgress}
          key={1}
        >
          <UploadDisplay {...this.props} uploaded={this.state.uploaded} fileName={this.state.fileName} value={field.value[this.props.name]} progress={this.state.progress}>
            {this.props.children}
          </UploadDisplay>
        </StyledDropzoneS3Uploader>
        {submitCount > 0 && (errors[this.props.name] ? true : false)
          && <FormText color="danger">{errors[this.props.name]}</FormText>
        }
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

export default DropzoneS3
