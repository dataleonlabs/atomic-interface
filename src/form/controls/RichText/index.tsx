import * as React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css'
import { RichTextProps as Props } from './props'
import { Field, FieldProps } from 'formik';
import Control from '../../Control';
import { StyledLabel, StyledContainer, StyledContainerDisabled, StyledContainerToolbarDisable } from './style';
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
}
class RichText extends React.PureComponent<Props> {

  public static defaultProps: Partial<Props> = {
    width: "500px",
    height: "200px",
    name: "ai-editor",
    label: "Rich Text Editor",
    theme: "snow",
    disabled: false,
    toolbarDisable: false
  }

/* istanbul ignore next */
  public handleChange = /* istanbul ignore next */ (value: string, source: any) /* istanbul ignore next */ => {
    /* istanbul ignore next */
    if (source === 'user' && this.props.onChange) /* istanbul ignore next */ {
      this.props.onChange({
        name: this.props.name || '',
        value,
      })
    }
  }

  public render() {
    const richTextStyle = {
      width: this.props.width,
      height: this.props.height,
      border: this.props.theme === "bubble" && "solid 1px #ccc" || "solid 0px #ccc"
    };
    const renderField = ({ field }: FieldProps<{}>) => (
      <React.Fragment>
        {this.props.disabled === false && this.props.toolbarDisable === false &&
          <StyledContainer>
          {(this.props.label || /* istanbul ignore next */ this.props.label !== '') && (
                <StyledLabel>{this.props.label}</StyledLabel>
            )}
            <ReactQuill
              {...field}
            id={this.props.id || /* istanbul ignore next */ this.props.name}
              readOnly={this.props.readOnly}
              style={richTextStyle}
              value={this.props.value || ''}
              theme={this.props.theme}
              modules={modules}
              onChange={this.handleChange}
            />
          </StyledContainer>
        }
        {this.props.disabled && this.props.disabled === true &&
          <StyledContainerDisabled>
          {(this.props.label || /* istanbul ignore next */ this.props.label !== '') && (
              <StyledLabel>{this.props.label}</StyledLabel>
            )}
            <ReactQuill
              {...field}
            id={this.props.id || /* istanbul ignore next */ this.props.name}
              readOnly={this.props.readOnly}
              style={richTextStyle}
              value={this.props.value || ''}
              theme={this.props.theme}
              modules={modules}
              onChange={this.handleChange}
            />
          </StyledContainerDisabled>
        }
        {this.props.disabled === false && this.props.toolbarDisable === true &&
          <StyledContainerToolbarDisable>
          {(this.props.label || /* istanbul ignore next */ this.props.label !== '') && (
              <StyledLabel>{this.props.label}</StyledLabel>
            )}
            <ReactQuill
              {...field}
            id={this.props.id || /* istanbul ignore next */ this.props.name}
              readOnly={this.props.readOnly}
              style={richTextStyle}
              value={this.props.value || ''}
              theme={this.props.theme}
              modules={modules}
              onChange={this.handleChange}
            />
          </StyledContainerToolbarDisable>
        }
      </React.Fragment>
    );
    return (
      <Control {...this.props} label={undefined}>
        <Field
          {...this.props}
          id={this.props.name}
          render={renderField}
        />
      </Control>
    )
  }
}

export default RichText