import * as React from 'react'
import { debounce } from 'ts-debounce'
import { CodeEditorProps as Props } from './props'
import { Field, FieldProps } from 'formik';
import Control from '../../Control';
import { StyledLabel } from './style';
const monaco = require('monaco-editor');

class CodeEditor extends React.PureComponent<Props> {

  public static defaultProps: Partial<Props> = {
    mode: 'javascript',
    theme: 'material',
    width: "800px",
    height: "400px",
    name: "codeeditor",
    label: "Code Editor",
    colorScheme: "vs"
  }

  public Editor: any = {};
  public Node: any = {};

  public onChange = (newValue: string) => {
    if (this.props.onChange) {
      this.props.onChange({
        name: this.props.name,
        value: newValue,
        error: false,
      })
    }
  }

  public editorDidMount = (editor: any) => {
    setTimeout(function () {
      alert("hello");      
      editor.getAction('editor.action.formatDocument').run();
      editor.focus();
    }, 300);
  }

  public componentDidMount() {
    const { value, mode } = this.props;

    import('monaco-themes/themes/Eiffel.json')
      .then(data => {
        monaco.editor.defineTheme('eiffel', data);
      })


    const model = monaco.editor.createModel(typeof value === "string" && value || "", mode);

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
      editorDidMount: this.editorDidMount,
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

  public componentWillUnmount() {
    return this.Editor && this.Editor.dispose();
  }

  public render() {
    const richTextStyle = {
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