import { InputProps } from '../Input/props';

/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <FilePicker name={'image'} label={'Picture'}>
 */

export interface FilePickerProps extends InputProps {
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
