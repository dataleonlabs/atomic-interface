import { InputProps } from '../Input/props';
import { ReactDatePickerProps as DatePickerBaseProps } from 'react-datepicker'

/**
 * This component using https://www.npmjs.com/package/react-datepicker
 * @example
 *   <DatePicker name={'date'} label={'Birthday'}>
 */

export interface DatePickerProps extends InputProps {

    /** Set DatePicker Options*/
    options?: DatePickerBaseProps

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

    readOnly?: boolean
}
