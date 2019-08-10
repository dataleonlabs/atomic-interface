import { UncontrolledDropdownProps, DropdownItemProps as DropdownItemPropsBase } from "reactstrap";
/**
 * Follow documentation https://reactstrap.github.io/components/dropdowns/
 * @example
 * <Dropdown isOpen={this.state.dropdownOpen} title={'dropdown'}>
 *    <DropdownItem>Foo Action</DropdownItem>
 *    <DropdownItem>Bar Action</DropdownItem>
 *    <DropdownItem>Quo Action</DropdownItem>
 * </Dropdown>
 */
export interface DropdownItemProps extends DropdownItemPropsBase {
    /** Content in DropdownToggle */
    children?: string | JSX.Element;
}
export interface DropdownProps extends UncontrolledDropdownProps {
    /** Content in DropdownToggle */
    title?: string;
    /** Caret in DropdownToggle */
    caret?: boolean;
}
