import * as React from 'react';
import { DropzoneS3Props as Props, State } from './props'

import { FieldProps, Field } from 'formik';
import Control from '../../../Control';
import { FormText } from 'reactstrap';
import uuidv4 from 'uuidv4';
import UploadDisplay from './UploadDisplay';
import { StyledDropzoneS3Uploader } from './style';
import { FormControlHelper } from '../../../formControlHelper';

/* istanbul ignore next  */
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

  /* istanbul ignore next  */
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

  /* istanbul ignore next  */
  public onClick = () => {
    // onClick button
  }

  /* istanbul ignore next  */
  public onSignedUrl = () => {
    this.setState({ loading: true })
  }

  /* istanbul ignore next  */
  public onUploadProgress = (progress: number) => {
    this.setState({ progress })
  }

  /* istanbul ignore next  */
  public onUploadError = (e: any) => {
    this.setState({
      error: true,
      errorMessage: e,
      loading: false,
    })
  }

  /* istanbul ignore next  */
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

  /* istanbul ignore next  */
  public renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) => {

    const objFormControlHelper=new FormControlHelper();
    if(objFormControlHelper.checkConditional(this.props.conditionnals, values)){
      return <></>;
    }
    
    return (
      <Control {...this.props}>
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
        {/* istanbul ignore next  */ submitCount > 0 && (errors[this.props.name] ? true : false)
          && <FormText color="danger">{errors[this.props.name]}</FormText>
        }
      </Control>
    )
  }

  public render() {
    return (
      <Field id={this.props.name} render={this.renderField} />
    )
  }
}

export default DropzoneS3
