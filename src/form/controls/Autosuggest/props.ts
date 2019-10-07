import { InputProps as InputPropsBase } from 'reactstrap';

/**
 * This component using bootstrap lib https://reactstrap.github.io/components/form/
 * @example
 *   <Input name={'firstName'} label={'First Name'}>
 */

export interface AutoSuggestProps extends InputPropsBase {    

  name: string  

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

  suggesions?: any;

}