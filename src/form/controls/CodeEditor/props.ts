import { InputProps } from '../Input/props';

/**
 * This component using https://github.com/microsoft/monaco-editor
 * @example
 *   <CodeEditor name={'function'} label={'Function code'}>
 */

export type Mode =
    | 'javascript'
    | 'xml'
    | 'markdown'
    | 'mysql'
    | 'applicationjson'
    | 'json'
    | 'yaml'
    | 'html'
    | 'jsx'
    | 'graphql'
    | 'typescript'
    | 'css'

type Theme = 'material' | 'solarized'

export interface CodeEditorProps extends InputProps {
    /**
     * Specifies the language of the editor
     * with the key of the Mode object
     * JavaScript | Xml | Markdown
     * MySql | JSON | HTML | JSX | Golang | Typescript | CSS
     */
    mode?: Mode

    /**
     * Specifies the mode of the editor
     * with the key of the Mode object
     * Material
     */
    theme?: Theme

    /** CSS value for width */
    width?: string

    /** CSS value for height */
    height?: string

    /** pixel value for font-size */
    fontSize?: number

}
