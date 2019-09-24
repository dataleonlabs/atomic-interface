/* istanbul ignore next */
import * as React from 'react'
import { debounce } from 'ts-debounce'
import { Field, FieldProps } from 'formik';
import Control from '../../Control';
import { StyledLabel } from './style';
import  * as monaco  from 'monaco-editor';
import { CodeEditorProps as Props } from './props'

/* istanbul ignore next */
class CodeEditor extends React.PureComponent<Props> {

  /* istanbul ignore next */
  public static defaultProps: Partial<Props> = {
    mode: 'javascript',
    theme: 'material',
    width: "800px",
    height: "400px",
    name: "codeeditor",
    label: "Code Editor",
    colorScheme: "vs"
  }

  /* istanbul ignore next */
  public Editor: any = {};
  /* istanbul ignore next */
  public Node: any = {};

  /* istanbul ignore next */
  public onChange = (newValue: string) /* istanbul ignore next */ /* istanbul ignore next */ => {
    if (this.props.onChange) {
      this.props.onChange({
        name: this.props.name,
        value: newValue,
        error: false,
      })
    }
  }

  /* istanbul ignore next */
  public editorDidMount = (editor: any) /* istanbul ignore next */ => {
    setTimeout(() /* istanbul ignore next */ => {
      alert("hello");
      editor.getAction('editor.action.formatDocument').run();
      editor.focus();
    }, 300);
  }

  /* istanbul ignore next */
  public componentDidMount() {
    const { value, mode } = this.props;

    /* istanbul ignore next */
    import('monaco-themes/themes/Eiffel.json')
      .then(data /* istanbul ignore next */ => {
        monaco.editor.defineTheme('eiffel', data as any);
      })


    /* istanbul ignore next */
    const model = monaco.editor.createModel(typeof value === "string" && value || "", mode);

    /* istanbul ignore next */
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
      // editorDidMount: this.editorDidMount,
      minimap: {
        enabled: false,
      },
    });
    this.Editor.setModel(model);
    model.onDidChangeContent(debounce(() /* istanbul ignore next */ => {
      this.props.onChange({
        name: this.props.name,
        value: model.getValue(),
        error: false,
      })
    }, 2000));
  }

  /* istanbul ignore next */
  public componentWillUnmount() {
    return this.Editor && this.Editor.dispose();
  }

  /* istanbul ignore next */
  public render() {
    const richTextStyle = /* istanbul ignore next */ {
      width: this.props.width,
      height: this.props.height,
      border: "solid 1px #eee",
    };

    /* istanbul ignore next */
    const renderField = ({ field }: FieldProps<{}>) /* istanbul ignore next */ => {

      return (
        <Control {...this.props} label={undefined}>
          <React.Fragment>
            <>
              {this.props.label && <StyledLabel>{this.props.label}</StyledLabel>}
              <div {...field} ref={c /* istanbul ignore next */ => this.Node = c} style={richTextStyle} />
            </>
          </React.Fragment>
        </Control>
      )
    }

    /* istanbul ignore next */
    return (
      <Field
        {...this.props}
        id={this.props.name}
        render={renderField}
      />
    )
  }
}

/* istanbul ignore next */
export default CodeEditor