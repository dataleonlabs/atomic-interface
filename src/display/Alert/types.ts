import { Alert } from "reactstrap";

/**
 * Follow documentation https://reactstrap.github.io/components/alerts/
 * @example
 *  <Alert color="secondary" icon={true}>
 *      This is a secondary alert — check it out!
 *  </Alert>
 */

export interface Props extends Alert {

    /** Colors alert */
    color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'

    /** Add icon to left: feathericons info for custom icon when true */
    icon?: boolean | JSX.Element
}