/**
 * Follow documentation https://reactstrap.github.io/components/alerts/
 * @example
 *  <Well heading="Well"> Demo Of Well </Well>
 */

export interface WellProps {

    /** Add icon to left: feathericons info for custom icon when true */
    heading?: string | JSX.Element

    // Children 
    children: string | JSX.Element
}