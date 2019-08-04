import * as React from 'react'

export interface IForm {
  field: IValues | IFieldConfiguration,
  form?: {
    touched: { [key: string]: IValues },
    errors: { [key: string]: IValues }
  }
}

export interface IFieldConfiguration {
  name: string
  type?:
    | 'text'
    | 'email'
    | 'number'
    | 'password'

    | 'textarea'

    | 'select'

    | 'break'
    | 'separator'
  

    | 'switch'
    | 'checkbox'

    | 'code'
    | 'richText'
    | 'color'
    | 'file'
  label?: string
  help?: string
  hideLabel?: boolean
  placeholder?: string
  className?: string
  validators?: Array<{
    fn: (value: string | boolean | number, values?: string | boolean | number[]) => boolean
    msg?: string
  }>
  customRender?: React.ComponentType<{
    name: string
    value: string | boolean | number
    error: boolean
    submitted: boolean
    onChange: (data: {
      name: string
      value: string | boolean | number
      error: boolean
      submitAfterChange?: boolean
    }) => void
  }>
  options?: Array<{
    value: string | boolean | number
    label: string
  }>

  size?: 'lg' | 'md' | 'sm'
  inline?: boolean

  grid?: number
  labelGrid?: number
  inputGrid?: number

  hide?: boolean

  /** Input Group left with InputGroupAddon */
  left?: string | JSX.Element

  /** Input Group right with InputGroupAddon */
  right?: string | JSX.Element

  /** Disabled field */
  disabled?: boolean

  /** Texearea Called whenever the textarea resizes */
  onResize?: (e: Event) => void;

  /** Texearea Minimum number of visible rows */
  rows?: React.HTMLProps<HTMLTextAreaElement>["rows"];

  /** Texearea Maximum number of visible rows */
  maxRows?: number;

  /** Texearea Initialize `autosize` asynchronously.
   * Enable it if you are using StyledComponents
   * This is forced to true when `maxRows` is set.
   */
  async?: boolean;
}

export interface IValues {
  [key: string]: string | boolean | number | IValues | string[] | boolean[] | number[] | IValues[]
}

export interface IOutput {
  [key: string]: boolean | IOutput
}

export interface IProps {
  /** Specify the different fields that will be displayed in the Form */
  fields: IFieldConfiguration[]

  /** Indicates whether the style of fields is inline or not */
  inline?: boolean

  /** Handle a function when the submit was failed */
  onSubmitFailed?: () => void

  /** Handle a function when the submit was succeded */
  onSubmitSucceded?: (values: IValues) => void

  /** Handle a function when the submit is actived */
  onSubmit?: (values: IValues) => void

  /** Adds the different messages for the add button, the edit button and the title */
  messages?: {
    messageButtonAdd?: string
    messageButtonUpdate?: string
    headerTitle?: string
  }

  /** The description will be placed just below the title if specified */
  description?: React.ReactNode

  /** Values recovered after Form submission */
  values?: IValues

  /** Display a customize button, this will overwrite the default button */
  customButton?: (ref: string) => React.ReactNode

  /** the className attribute of the button */
  button?: {
    color?: string

    /** Button submit size */
    size?: 'lg' | 'small' | 'xsmall'

    /** the style attribute of the button */
    styleBtn?: React.CSSProperties

    label?: string
  }

  /** the className attribute of the form */
  className?: string

  /** the style attribute of the loader */
  styleLoader?: React.CSSProperties

  /** If it is set, the link to change the password will be displayed */
  otherContent?: () => void

  /** If it is set, the link to change the password will be displayed */
  onChange?: (row: { [key: string]: string | boolean | number }) => void
}

export interface IState {
  row: IValues
}
