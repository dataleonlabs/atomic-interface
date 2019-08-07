import { ButtonProps as ButtonPropsBase } from 'react-native';

/**
* This component using https://reactstrap.github.io/components/form/ : CustomInput
* @example
*   <Button type="submit">
*/

export interface ButtonProps extends ButtonPropsBase {
    name: string
    /** spinner displayed on right*/
    renderspinner?: boolean
    /** Disabled field */
    disabled?: boolean
    color?:string

}
