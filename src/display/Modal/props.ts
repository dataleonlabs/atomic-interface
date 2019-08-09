import { ModalProps as ModalPropsBase, ButtonProps } from "reactstrap";

/**
 * This component using bootstrap lib https://reactstrap.github.io/components/modals/
 * @example
 *   <Modal isOpen={this.state.modal} header={} cancel={{ label: "Cancel" }} ok={}>
 *      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 *       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *   </Modal>
 */

export interface ModalButtonProps extends ButtonProps {

    /** Content in button */
    label?: string | JSX.Element
}


export interface ModalProps extends ModalPropsBase {

    /** Content in header, disable when is undefined */
    header?: string | JSX.Element

    /** Cancel button */
    cancel?: ModalButtonProps

    /** ok button */
    ok?: ModalButtonProps
}

