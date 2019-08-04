import { UncontrolledDropdownProps, DropdownItemProps } from "reactstrap";

/**
 * Follow documentation https://reactstrap.github.io/components/dropdowns/
 * @example
 * <Dropdown isOpen={this.state.dropdownOpen} title={'dropdown'}>
 *    <DropdownItem>Foo Action</DropdownItem>
 *    <DropdownItem>Bar Action</DropdownItem>
 *    <DropdownItem>Quo Action</DropdownItem>
 * </Dropdown>
 */

export interface Item extends DropdownItemProps {
    
    /** Content in DropdownToggle */
    content: string | JSX.Element

}

export interface Props extends UncontrolledDropdownProps {

    /** Content in DropdownToggle */
    title?: string

    /** Caret in DropdownToggle */
    caret?: boolean
}

