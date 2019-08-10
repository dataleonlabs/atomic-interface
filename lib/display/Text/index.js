import * as React from 'react';
import moment from 'moment';
import { FormText, Label } from 'reactstrap';
import Tooltip from '../Tooltip';
import { makeId } from '../../utils';
// Sample for ago formting
// import TimeAgo from 'timeago-react'
// import { register } from 'timeago.js'
// import { localeFRFunc, localeENFunc } from './timeago'
// register('fr_FR', localeFRFunc)
// register('en', localeENFunc)
const capitalizeFirstLetter = (str) => {
    if (!str) /* istanbul ignore next  */ {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
export const truncate = (text, n = 20, isCapitalizeFirstLetter = false) => {
    text = String(text);
    if (isCapitalizeFirstLetter) /* istanbul ignore next  */ {
        text = capitalizeFirstLetter(text);
    }
    if (n === -1) /* istanbul ignore next  */ {
        return text;
    }
    return text.length > n ? `${text.substr(0, n - 1)}...` : /* istanbul ignore next  */ text;
};
export const truncateMiddle = (fullStr, strLen, separator, isCapitalizeFirstLetter = false) => {
    fullStr = String(fullStr);
    if (isCapitalizeFirstLetter) /* istanbul ignore next  */ {
        fullStr = capitalizeFirstLetter(fullStr);
    }
    if (fullStr.length <= strLen) /* istanbul ignore next  */ {
        return fullStr;
    }
    separator = separator || /* istanbul ignore next  */ '...';
    const sepLen = separator.length;
    const charsToShow = strLen - sepLen;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};
export const getText = (props) => {
    return props.children &&
        React.Children.map(props.children, child => {
            if (React.isValidElement(child)) {
                return child;
            }
            if (props.type === 'text' && props.trucanteType === 'middle') {
                return truncateMiddle(child, props.useWordBoundary || /* istanbul ignore next  */ 20, '...', props.capitalizeFirstLetter);
            }
            if (props.type === 'text' && props.trucanteType === 'right') {
                return truncate(child, props.useWordBoundary, props.capitalizeFirstLetter);
            }
            if (props.type === 'text' && props.capitalizeFirstLetter) {
                return capitalizeFirstLetter(child);
            }
            if (props.type === 'text') {
                return child;
            }
            if (props.type === 'date') {
                return moment(new Date(child)).locale(props.locale).format(props.format) === 'Invalid date' ? child : moment(new Date(child)).locale(props.locale).format(props.format);
            }
            if (props.type === 'ago') {
                return moment(new Date(child)).locale(props.locale).fromNow() === 'Invalid date' ? child : moment(new Date(child)).locale(props.locale).fromNow();
            }
            if (props.type === 'currency') {
                try {
                    if (isNaN(child)) {
                        return child;
                    }
                    return new Intl.NumberFormat(props.locale, { style: 'currency', currency: props.format }).format(child);
                }
                catch (error) {
                    return new Intl.NumberFormat(props.locale).format(child);
                }
            }
        });
};
/**
 * Text
 */
export default class Text extends React.Component {
    render() {
        const TextStyle = this.props.textStyle === 'help' ? FormText : Label;
        const id = `${makeId()}`;
        return (React.createElement(React.Fragment, null,
            React.createElement(TextStyle, Object.assign({ id: id }, this.props), getText(this.props)),
            this.props.tooltip && (React.createElement(Tooltip, { target: id }, this.props.tooltip))));
    }
}
Text.defaultProps = {
    locale: 'fr-FR',
    textStyle: 'default',
    type: 'text'
};
//# sourceMappingURL=index.js.map