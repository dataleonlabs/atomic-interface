import { PopoverProps } from "../Popover/props";
/**
 * This component Using bootstrap lib https://reactstrap.github.io/components/popovers/
 * @example
 * <HelpIcon placement="right" header={'text header'}>
 *   Sed posuere consectetur est at lobortis. Aenean eu leo quam.
 * </HelpIcon>
 */
export interface HelpIconProps extends PopoverProps {
    /** Content in header, disable when is undefined */
    header?: string | JSX.Element;
}
