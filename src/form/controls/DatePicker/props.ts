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
}
