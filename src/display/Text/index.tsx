import * as React from 'react'

import { TextProps as Props } from './types'

// Sample for ago formting
// import TimeAgo from 'timeago-react'
// import { register } from 'timeago.js'
// import { localeFRFunc, localeENFunc } from './timeago'
// register('fr_FR', localeFRFunc)
// register('en', localeENFunc)

const capitalizeFirstLetter = (str: string) => {
  if (!str) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const truncate = (
  text: any,
  n: number = 20,
  isCapitalizeFirstLetter: boolean = false,
) => {
  text = String(text)
  if (isCapitalizeFirstLetter) {
    text = capitalizeFirstLetter(text)
  }
  if (n === -1) {
    return text
  }
  return text.length > n ? `${text.substr(0, n - 1)}...` : text
}

export const truncateMiddle = (fullStr: any, strLen: number, separator: string) => {
  if (fullStr.length <= strLen) {
    return fullStr;
  }
  separator = separator || '...';
  const sepLen = separator.length;
  const charsToShow = strLen - sepLen;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars);
};

/**
 * Text
 */
export default class Text extends React.Component<Props> {

  render() {
    return (
      <span
        title={this.props.tooltip || String(this.props.tooltip || '')}
      >
        {this.props.children &&
          React.Children.map(this.props.children, child => {
            if (React.isValidElement(child)) {
              return child
            }

            if (this.props.trucanteType === 'middle') {
              return truncateMiddle(
                child,
                this.props.useWordBoundary || 20,
                '...'
              )
            }

            return truncate(
              child,
              this.props.useWordBoundary,
              this.props.capitalizeFirstLetter,
            )
          })}
      </span>
    )
  }
}
