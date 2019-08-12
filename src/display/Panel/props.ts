/**
 * This component using bootstrap lib https://reactstrap.github.io/components/cards/
 * @example
 *   <Panel title={'Title'}>
 *      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 *       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *   </Panel>
 */

export interface PanelProps {

    /** Content in header, disable when is undefined */
    title?: string | JSX.Element | Element

    /** Cancel button */
    children?: string | JSX.Element | Element
}

