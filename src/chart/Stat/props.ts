import { TextProps } from "src/display/Text/props";

/**
 * Follow documentation https://elastic.github.io/eui/#/display/stat
 * @example
 *  <Stat color="secondary" title={"Primary color"}>
 *      1000
 *  </Stat>
 */

export interface StatProps extends TextProps {

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

    /** Title of box */
    title?: string | JSX.Element

    /** Size of text display */
    size?: 'sm' | 'md' | 'lg'
}