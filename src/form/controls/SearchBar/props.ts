import { InputProps } from '../Input/props';

/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <SearchBar name={'image'} label={'Picture'}>
 */

export interface SearchBarProps extends InputProps {

    /** If for Navbar */
    navBar?: boolean

    /** Disable close icon */
    closeIcon?: boolean

    /** set Label for Left Addon icon */
    leftAddonString?: string;

    /** set if to display Label for Left Addon icon */
    hideLeftAddonLabel?: boolean;
    
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
