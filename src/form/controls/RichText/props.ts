import { InputProps } from '../Input/props';

/**
 * This component using https://github.com/zenoamaro/react-quill
 * @example
 *   <RichText name={'firstName'} label={'First Name'}>
 */

export interface RichTextProps extends InputProps {
    /** Editor content */
    value?: string

    /** set editor to be accessible or not */
    disabled?: boolean

    /** set toolbar to accessible or not */
    toolbarDisable?: boolean

    /** set RichText theme */
    theme?: "snow" | "bubble"

    /** Function invoked when value is changed by the user  */
    onChange?: ({ name, value }: { name: string; value: string }) => void

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
