import * as React from 'react'
import { debounce } from 'ts-debounce'
import { CodeEditorProps as Props } from './props'
import { Field, FieldProps } from 'formik';
import Control from '../../Control';
import { StyledLabel } from './style';
import monaco = require('monaco-editor');

class CodeEditor extends React.PureComponent<Props> {

  public static defaultProps: Partial<Props> = {    
    mode: 'javascript',
    theme: 'material',
    width: "800px",
    height: "400px",
    name: "codeeditor",
    label: "Code Editor",
    colorScheme: "vs-dark"
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
    const model = monaco.editor.createModel(typeof value == "string" && value || "", mode);
    this.Editor = monaco.editor.create(this.Node, {
      selectOnLineNumbers: true,
      automaticLayout: true,
      roundedSelection: false,
      language: this.props.mode || 'javascript',
      theme: this.props.colorScheme,
      autoIndent: true,
      autoClosingQuotes: "always",
      scrollBeyondLastLine: false,
      quickSuggestions: true,            
      minimap: {
        enabled: false,
      },
    });
    this.Editor.setModel(model);
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

    let richTextStyle = {
      width: this.props.width,
      height: this.props.height,
      border: "solid 1px #eee",
    };

    const renderField = ({ field }: FieldProps<{}>) => (
      <React.Fragment>
        <>          
          {this.props.label && <StyledLabel>{this.props.label}</StyledLabel>}
          <div {...field} ref={c => this.Node = c} style={richTextStyle} />
        </>
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

export default CodeEditor