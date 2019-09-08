/**
 * Follow documentation
 * @example
 *  <Choose title="Connectors" icon={Icon}>
 *      This is a secondary alert — check it out!
 *  </Choose>
 */
export interface ChooseProps {

    /** Add icon to left: feathericons info for custom icon when true */
    icon: boolean | JSX.Element

    /** Title to display top */
    title: string | JSX.Element

    /** Is active */
    active: boolean

    /** Background color used for hover color */
    backgroundColorOnHover: string

    /** Background color used for hover color */
    backgroundColorOnActive: string

    // Content display 
    children: string | JSX.Element
}