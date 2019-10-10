import { InputProps } from '../Input/props';

/**
 * This component using https://github.com/JedWatson/react-select
 * @example
 *   <Select name={'gender'} label={'Gender'}>
 */

export interface SelectProps extends InputProps {
    /** All props for the react select */
    meta?: any

    /** Multi */
    isMulti?: boolean

    creatable?: boolean

    /** Close the select menu when the user selects an option */
    closeMenuOnSelect?: boolean

    /** Is the select value clearable */
    isClearable?: boolean

    /** Is the select component readOnly */
    readOnly?: boolean

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
