import { InputProps } from '../Input/props';

/**
* This component using https://reactstrap.github.io/components/form/ : CustomInput
* @example
*   <Checkbox name={'firstName'} label={'First Name'}>
*/

export interface CheckbokProps extends InputProps {
    name: string
    /** label displayed on right*/
    label?: string | JSX.Element
    /** Disabled field */
    disabled?: boolean
      /** Radio with label on right and tooltip on label */
    tooltip?: string | JSX.Element
}
