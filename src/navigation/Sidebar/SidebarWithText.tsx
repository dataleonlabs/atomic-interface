import React from 'react';
import { SidebarProps as Props } from './props';

/**
 * SidebarWithText render element
 */

interface State {
  hover: boolean;
  collapse:boolean;
}
class SidebarWithText extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      hover:false,
      collapse:true
    };
   }
   onClick(){
    this.setState({collapse:!this.state.collapse})
   }
  render(){
    return(
    <div>
        {this.props.children}
     </div>
    )
  }  
}

export default SidebarWithText;
