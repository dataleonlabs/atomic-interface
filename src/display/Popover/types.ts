import { PopoverProps as PopoverPropsBase } from "reactstrap";

/**
* This component Using bootstrap lib https://reactstrap.github.io/components/popovers/
* @example
* <Popover placement="right" target="Popover1" header={'text header'}>
*   Sed posuere consectetur est at lobortis. Aenean eu leo quam.
* </Popover>
*/

export interface PopoverProps extends PopoverPropsBase {

    /** Content in header, disable when is undefined */
    header?: string | JSX.Element
}

