import { InputProps } from '../Input/props';
/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <SearchBar name={'image'} label={'Picture'}>
 */
export interface SearchBarProps extends InputProps {
    /** If for Navbar */
    navBar?: boolean;
    /** Disable close icon */
    closeIcon?: boolean;
}
