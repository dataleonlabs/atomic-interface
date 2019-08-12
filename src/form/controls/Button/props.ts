import { ButtonProps as ButtonPropsBase } from "reactstrap";

/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <Button type="submit">primary</Button>
 */

export interface ButtonProps extends ButtonPropsBase {

    /** icon displayed on left */
    icon?: JSX.Element

    /** spinner displayed on right */
    loading?: boolean

    children: string | JSX.Element | JSX.Element[] | Element
}
