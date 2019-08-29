import { InputProps } from '../Input/props';
import { QueryProps } from '../../../utils/Query/props';

/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <Switch name={'firstName'} label={'First Name'}>
 */

export interface SwitchProps extends InputProps {

}


export interface SwitchCollectionProps extends QueryProps {

    /** Current name form */
    name: string

    /** Label for Switch Collection */
    label: string

    /** Id of record in database */
    fieldId: { key: string, value: string }

    /** Update field */
    fieldUpdate: string

    /** Help display below control */
    help?: string

    /** Hide current input */
    hide?: boolean

    /** Disabled field */
    disabled?: boolean

    /** Is required */
    required?: boolean

    /** to display response */
    children: any;
}
