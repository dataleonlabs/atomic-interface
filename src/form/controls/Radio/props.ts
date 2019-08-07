import {InputProps as InputPropsBase } from '../Input/props';

/**
* This component using https://reactstrap.github.io/components/form/ : CustomInput
* @example
*   <Radio name={'firstName'} label={'First Name'}>
*/

export interface RadioProps extends InputPropsBase {
    name: string
    /** label displayed on right*/
    label?: string | JSX.Element
    /** Disabled field */
    disabled?: boolean
      /** Radio with label on right and tooltip on label */
    tooltip?: string | JSX.Element

}
