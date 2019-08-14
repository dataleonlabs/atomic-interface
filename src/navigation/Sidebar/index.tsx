import React from 'react';
import { SidebarProps as Props } from './props';
import { StyledSidebar } from './style';
import BrandIcon from './BrandIcon';
import {ChevronLeft,AlignJustify} from 'react-feather';
import SidebarOnlyIcon from './SidebarOnlyIcon'
import SidebarWithText from './SidebarWithText'

/**
 * Sidebar render element
 */

interface State {
  hover: boolean;
  collapse:boolean;
}
class Sidebar extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      hover:false,
      collapse:false
    };
   }
   onClick(){
    this.setState({collapse:!this.state.collapse})
   }
  render(){

    return(
      <StyledSidebar className={this.state.collapse?this.state.hover?`sidebarContainer sidebarContainerTrue`:`sidebarContainer sidebarContainerFalse`:this.state.hover?`sidebarContainerTrue`:`sidebarContainerFalse`}>
     {this.state.hover? <div onClick={()=>this.onClick()}>
      <BrandIcon icon={this.state.collapse?<ChevronLeft size={23} />:<AlignJustify size={23} />} type={this.props.icon?'close':'open'}></BrandIcon>
      </div>:null }
      {this.state.collapse?
      <SidebarOnlyIcon  {...this.props}>
        {this.props.children}
      </SidebarOnlyIcon>
       :
      <SidebarWithText {...this.props}>
       {this.props.children}
      </SidebarWithText>
      }
    <div className="emptyElement" onClick={()=>this.setState({hover:!this.state.hover})} onMouseOver={()=>this.setState({hover:!this.state.hover})}></div>
    </StyledSidebar>
    )
  }  
}

export default Sidebar;
