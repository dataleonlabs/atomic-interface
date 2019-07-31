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

export interface Props {
  /**
   * Automation a function when the editor change
   * @param newValue
   */
  onChange: (data: {
    name: string
    value: string
    error: boolean
  }) => void

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

  /**
   * Unique Id to be used for the editor
   * Default: 'brace-editor'
   */
  name: string

  /**
   * Value you want to populate in the code highlighter
   */
  value?: string

  /**
   * custom className
   */
  className?: string

  /**
   * CSS value for width
   */
  width?: string

  /**
   * CSS value for height
   */
  height?: string

  /**
   * pixel value for font-size
   */
  fontSize?: number

  /**
   * The label of the code editor
   */
  label?: string | JSX.Element
}
