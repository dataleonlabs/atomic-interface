import React from 'react';
import { SidebarProps as Props } from './props';

/**
 * SidebarWithText render element
 */

interface State {
  hover: boolean;
  collapse: boolean;
}

/* istanbul ignore next */
class SidebarWithText extends React.Component<Props, State> {

  /* istanbul ignore next */
  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false,
      collapse: true
    };
  }

  /* istanbul ignore next */
  public onClick() {
    this.setState({ collapse: !this.state.collapse })
  }

  /* istanbul ignore next */
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

/* istanbul ignore next */
export default SidebarWithText;
