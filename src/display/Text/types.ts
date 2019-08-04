
/**
* @example
* <Text useWordBoundary={30} trucanteType={'right'} capitalizeFirstLetter={true}>
*    Try to select this text!
* </Text>
*/

export interface TextProps {

    /** Type of current text: default is text */
    type?: 'text' | 'number' | 'date' | 'money' | 'ago'

    /**
     * String to format dependency to type
     * For ago format must be 'fr' or 'en'
     */
    format?: string | object | 'fr' | 'en'

    /** Tooltip to display in balise */
    tooltip?: string

    /** Number of letters to display before cutting the sentence with a "..." */
    useWordBoundary?: number

    /** Trucante type */
    trucanteType?: 'right' | 'middle'

    /** Displays the first letter of the text in uppercase */
    capitalizeFirstLetter?: boolean

    /** Text default or use Bootstrap Help Input */
    style?: 'default' | 'help'
}
