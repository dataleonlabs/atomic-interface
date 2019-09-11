import { InputProps as InputPropsBase } from 'reactstrap';

/**
 * This component using bootstrap lib https://reactstrap.github.io/components/form/
 * @example
 *   <Input name={'firstName'} label={'First Name'}>
 */

export interface InputProps extends InputPropsBase {
  name: string

  /** Type of input default value is text */
  type?:
    | 'text'
    | 'email'
    | 'url'
    | 'number'
    | 'password'
    | 'datetime'
    | 'date'
    | 'time'
    | 'color'
    | 'search'

  /** Current label displayed */
  label?: string | JSX.Element

  /** Help display below control */
  help?: string

  /** Inline control */
  placeholder?: string

  /** Validators control */
  validators?: Array<{
    fn: (value: string | boolean | number, values?: string | boolean | number[]) => boolean
    msg?: string
  }>

  /** Inline control */
  inline?: boolean

  /** Label grid */
  labelSize?: number

  /** control grid */
  controlSize?: number

  /** Hide current input */
  hide?: boolean

  /** Input Group left with InputGroupAddon */
  leftAddon?: string | JSX.Element

  /** Input Group right with InputGroupAddon */
  rightAddon?: string | JSX.Element

  /** Disabled field */
  disabled?: boolean

  /** Is required */
  required?: boolean

  onChange?: any; 
  
  /**
   * Check of current values if you have field with same conditionnals values.
   * @example values
   * {
   *   firstName: "Gerard",
   *   email: "example@example.com",
   *   gender: "woman"
   * }
   * @example conditionnals, then display field because gender is equal woman in values
   * {
   *   gender: "woman"
   * }
   * 
   */
  conditionnals?: { [key: string]: any }; 
  
}