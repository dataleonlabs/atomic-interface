/**
* @example
* <Text useWordBoundary={30} trucanteType={'right'} capitalizeFirstLetter={true}>
*   Try to select this text!
* </Text>
*/

export interface TextProps {

    /** Type of current text: default is text
    * date: use momentjs
    * currency and number https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/NumberFormat
    * 
    */
    type?: 'text' | 'number' | 'date' | 'currency' | 'ago'

    /**
    * String to format dependency to type
    * For ago format must be 'eu' or 'en'
    * format "dd/MM/YYYY hh:mm"
    * format for currency: EUR USD etc...
    */
    format?: string | object | 'fr' | 'en'

    /**
    * String to  for locale
    */
    locale?: string

    /* Tooltip to display in balise */
    tooltip?: string

    // Only text
    /* Number of letters to display before cutting the sentence with a "..." */
    useWordBoundary?: number

    // Only text
    /* Trucante type */
    trucanteType?: 'right' | 'middle'

    // Only text
    /* Displays the first letter of the text in uppercase */
    capitalizeFirstLetter?: boolean

    /* Text default or use Bootstrap Help Input */
    textStyle?: 'default' | 'help'
}