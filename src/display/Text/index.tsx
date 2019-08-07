import * as React from 'react'
import moment from 'moment';
import { FormText, Label } from 'reactstrap';
import { TextProps as Props } from './props'
import Tooltip from '../Tooltip';

// Sample for ago formting
// import TimeAgo from 'timeago-react'
// import { register } from 'timeago.js'
// import { localeFRFunc, localeENFunc } from './timeago'
// register('fr_FR', localeFRFunc)
// register('en', localeENFunc)

function makeId(length: number = 5) {
  var result = 'y';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const capitalizeFirstLetter = (str: string) => {
  if (!str) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const truncate = (text: any, n: number = 20, isCapitalizeFirstLetter: boolean = false) => {
  text = String(text)
  if (isCapitalizeFirstLetter) {
    text = capitalizeFirstLetter(text)
  }
  if (n === -1) {
    return text
  }
  return text.length > n ? `${text.substr(0, n - 1)}...` : text
}

export const truncateMiddle = (fullStr: any, strLen: number, separator: string, isCapitalizeFirstLetter: boolean = false) => {
  fullStr = String(fullStr)

  if (isCapitalizeFirstLetter) {
    fullStr = capitalizeFirstLetter(fullStr)
  }

  if (fullStr.length <= strLen) {
    return fullStr;
  }
  separator = separator || '...';
  const sepLen = separator.length;
  const charsToShow = strLen - sepLen;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);


  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};

export const getText = (props: any) => {
  return props.children &&
    React.Children.map(props.children, child => {
      if (React.isValidElement(child)) {
        return child
      }

      if (props.type === 'text' && props.trucanteType === 'middle') {
        return truncateMiddle(child, props.useWordBoundary || 20, '...', props.capitalizeFirstLetter)
      }
      if (props.type === 'text' && props.trucanteType === 'right') {
        return truncate(child, props.useWordBoundary, props.capitalizeFirstLetter)
      }
      if (props.type === 'text' && props.capitalizeFirstLetter) {
        return capitalizeFirstLetter(child)
      }
      if (props.type === 'text') {
        return child
      }
      if (props.type === 'date') {
        return moment(new Date(child)).locale(props.locale).format(props.format) === 'Invalid date' ? child : moment(new Date(child)).locale(props.locale).format(props.format)
      }

      if (props.type === 'ago') {
        return moment(new Date(child)).locale(props.locale).fromNow() === 'Invalid date' ? child : moment(new Date(child)).locale(props.locale).fromNow()
      }

      if (props.type === 'currency') {
        try {
          if (isNaN(child)) {
            return child
          }
          return new Intl.NumberFormat(props.locale, { style: 'currency', currency: props.format }).format(child)
        } catch (error) {
          return new Intl.NumberFormat(props.locale).format(child)
        }
        
      }

    })
}



/**
 * Text
 */
export default class Text extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    textStyle: 'default',
    locale: 'fr-FR',
    type: 'text'
  }

  render() {
    const TextStyle: React.ReactType = this.props.textStyle === 'help' ? FormText : Label;
    const id = `${makeId()}`;
    return (
      <>
        <TextStyle id={id}>
          {getText(this.props)}
        </TextStyle>

        {this.props.tooltip && (<Tooltip target={id}>
          {this.props.tooltip}
        </Tooltip>)}
      </>
    )
  }
}