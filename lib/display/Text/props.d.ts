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
    type?: 'text' | 'number' | 'date' | 'currency' | 'ago';
    /**
     * String to format dependency to type
     * For ago format must be 'eu' or 'en'
     * format "dd/MM/YYYY hh:mm"
     * format for currency: EUR USD etc...
     */
    format?: string | object | 'fr' | 'en';
    /**
     * String to  for locale
     */
    locale?: string;
    tooltip?: string;
    useWordBoundary?: number;
    trucanteType?: 'right' | 'middle';
    capitalizeFirstLetter?: boolean;
    textStyle?: 'default' | 'help';
    /** Colors alert */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'gray';
}
