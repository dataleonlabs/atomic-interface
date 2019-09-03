/* istanbul ignore next */
import React from 'react';
import { SidebarProps as Props } from './props';


/**
 * SidebarOnlyIcon render element
 */
/* istanbul ignore next */
interface State {
  hover: boolean;
  collapse: boolean;
}

/* istanbul ignore next */
class SidebarOnlyIcon extends React.Component<Props, State> {
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

    /* istanbul ignore next */
    return (
      <div>
        {this.props.children}
      </div>

    )
  }
}

export default SidebarOnlyIcon;
