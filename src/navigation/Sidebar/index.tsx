import React from 'react';
import { SidebarProps as Props } from './props';
import { StyledSidebar } from './style';
import BrandIcon from './BrandIcon';
import { ChevronLeft, ChevronRight } from 'react-feather';
import SidebarOnlyIcon from './SidebarOnlyIcon'
import SidebarWithText from './SidebarWithText'

/**
 * Sidebar render element
 */

interface State {
  hover: boolean;
  collapse: boolean;
  icon: boolean;
}

class Sidebar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapse: false,
      hover: false,
      icon: false
    };
  }

  public toggleSideBar = () => {
    const setCollapseVal = (this.state.collapse) ? false : true
    this.setState({ collapse: setCollapseVal })
  }

  public componentDidMount(){
    if(this.props.icon){
      this.setState({ icon: true })
    }    
  }
  
  public render() {
    return (
      <StyledSidebar className={this.state.collapse ? `sidebarContainer` : ``}>
        {
          this.state.collapse
            ?
            <SidebarOnlyIcon  {...this.props}>
              {this.props.children}
            </SidebarOnlyIcon>
            :
            <SidebarWithText {...this.props}>
              {this.props.children}
            </SidebarWithText>
        }
        <div className="sideBarTransition flex-column" onClick={this.toggleSideBar}>
          <BrandIcon
            icon=
            {
              this.state.collapse
                ?
                <ChevronRight size={23} />
                :
                <ChevronLeft size={23} />
            }
            type=
            {
              this.props.icon
                ? 'close'
                : 'open'
            }
          />
        </div>
      </StyledSidebar>
    )
  }
}

export default Sidebar;
