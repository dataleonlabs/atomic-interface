import * as React from 'react'
import * as monaco from 'monaco-editor';
import { debounce } from 'ts-debounce'
import { ControlLabel } from 'react-bootstrap'
import styled from 'styled-components'

import { Props } from './types'

const StyledLabel = styled(ControlLabel)`
  margin: 0;
  font-weight: 500;
  color: #333;
  margin-bottom: 15px;
`

class CodeEditor extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    mode: 'javascript',
    theme: 'solarized',
  }

  Editor: any = {};
  Node: any = {};

  onChange = (newValue: string) => {
    if (this.props.onChange) {
      this.props.onChange({
        name: this.props.name,
        value: newValue,
        error: false,
      })
    }
  }

  editorDidMount = (editor: any) => {
    editor.focus();
  }

  componentDidMount() {
    const { value, mode } = this.props;
    const model = monaco.editor.createModel(value || '', mode);
    this.Editor = monaco.editor.create(this.Node, {
      selectOnLineNumbers: true,
      automaticLayout: true,
      roundedSelection: false,
      language: this.props.mode || 'javascript',
      theme: 'vs',
      autoIndent: true,
      autoClosingQuotes: "always",
      scrollBeyondLastLine: false,
      quickSuggestions: true,
      minimap: {
        enabled: false,
      },
    });
    this.Editor.setModel(model);
    this.Editor.layout({ height: 300 })
    model.onDidChangeContent(debounce(() => {
      this.props.onChange({
        name: this.props.name,
        value: model.getValue(),
        error: false,
      })
    }, 2000));
  }

  componentWillUnmount() {
    return this.Editor && this.Editor.dispose();
  }

  render() {
    return (
      <>
        {this.props.label && <StyledLabel>{this.props.label}</StyledLabel>}
        <div ref={c => this.Node = c} style={{ border: "solid 1px #eee" }} />
      </>
    )
  }
}

export default CodeEditor
