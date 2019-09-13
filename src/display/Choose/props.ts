import { InputProps } from '../../form/controls/Input/props';

/**
 * Follow documentation
 * @example
 *  <Choose title="Connectors" icon={Icon}>
 *      This is a content description
 *  </Choose>
 */
export interface ChooseProps extends InputProps{

    /** Add icon to left: feathericons info for custom icon when true */
    icon?: JSX.Element

    /** Add icon to right: feathericons info for custom icon when true */
    badge?: JSX.Element

    // /** Title to display top */
    title: string

    // /** Is active */
    active?: boolean

    // /** Background color used for hover color */
    backgroundColorOnHover?: string

    // /** Background color used for hover color */
    backgroundColorOnActive?: string

    // // Content display 
    children: string | JSX.Element | JSX.Element[]
}