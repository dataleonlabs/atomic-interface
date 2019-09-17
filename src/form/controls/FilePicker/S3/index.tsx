import * as React from 'react';
const ReactS3Uploader = require('react-s3-uploader');
import {
  StyledImageUploader, StyledUploadBtnWrapper
} from './style';
import { FilePickerS3Props as Props, State } from './props'
import { FieldProps, Field } from 'formik';
import Control from '../../../Control';
import { FormText } from 'reactstrap';
import uuidv4 from 'uuidv4';
import Text from '../../../../display/Text';
import Button from '../../../../form/controls/Button';
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

class FilePickerS3 extends React.PureComponent<Props> {

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
  }

  /* istanbul ignore next  */
  public getSignedUrl = (file: any, callback: any) /* istanbul ignore next  */ => {

    let fileName = file.name;
    /* istanbul ignore next  */
    if (this.props.uuid === true) {
      const ext = file.name.split('.').pop();
      fileName = `${uuidv4().toLocaleUpperCase()}.${ext}`;
    }

    /* istanbul ignore next  */
    this.setState({ fileName }, () /* istanbul ignore next  */ => {
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
  public onClick = () /* istanbul ignore next  */ => {
    // onClick button
  }

  /* istanbul ignore next  */
  public onSignedUrl = () /* istanbul ignore next  */ => {
    this.setState({ loading: true })
  }

  /* istanbul ignore next  */
  public onUploadProgress = (progress: number) /* istanbul ignore next  */ => {
    this.setState({ progress })
  }

  /* istanbul ignore next  */
  public onUploadError = (e: any) /* istanbul ignore next  */ => {
    this.setState({
      error: true,
      errorMessage: e,
      loading: false,
    })
  }

  /* istanbul ignore next  */
  public onUploadFinish = (setFieldValue: FieldProps<{}>['form']['setFieldValue']) => async () /* istanbul ignore next  */ => {
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

  /* istanbul ignore next  */
  public renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) => {

    const objFormControlHelper=new FormControlHelper();
    if(objFormControlHelper.checkConditional(this.props.conditionnals, values)){
      return <></>;
    }

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
        <Control {...this.props}>
          <StyledImageUploader>
            <StyledUploadBtnWrapper label={this.props.label}>
              <Button
                loading={this.state.loading}
                outline={outline}
                block={block}
                color={color}
                disabled={(this.state.loading || 0) > 0 ? /* istanbul ignore next  */ true : false}
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
            {this.state.error === true && /* istanbul ignore next  */ (
              <Text>
                {this.state.errorMessage}
              </Text>
            )}

            {submitCount > 0 && /* istanbul ignore next  */ (errors[this.props.name] ? true : false)
              && <FormText color="danger">{errors[this.props.name]}</FormText>
            }

          </StyledImageUploader>
        </Control>
      </>
    )
  }

  /* istanbul ignore next  */
  public render() /* istanbul ignore next  */ {
    return (
      <Field id={this.props.name} render={this.renderField} />
    )
  }
}

export default FilePickerS3
