import * as React from 'react'
import { ControlLabel } from 'react-bootstrap'
import styled from 'styled-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { Props } from './types'

const StyledContainer = styled.div`
  margin-bottom: 15px;
`
const StyledLabel = styled(ControlLabel)`
  color: #333;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 15px;
`

class RichTextEditor extends React.PureComponent<Props> {
  handleChange = (value: string, delta: any, source: any) => {
    if (source === 'user' && this.props.onChange) {
      this.props.onChange({
        name: this.props.name || '',
        value,
      })
    }
  }

  render() {
    return (
      <StyledContainer>
        {(this.props.label || this.props.label !== '') && (
          <StyledLabel>{this.props.label}</StyledLabel>
        )}
        <ReactQuill
          value={this.props.value || ''}
          theme="snow"
          modules={modules}
          onChange={this.handleChange}
        />
      </StyledContainer>
    )
  }
}

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

export default RichTextEditor
