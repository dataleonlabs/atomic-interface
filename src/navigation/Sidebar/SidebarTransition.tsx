/* istanbul ignore next */
import React from 'react';
import { SidebarProps as Props } from './props';
import BrandIcon from './BrandIcon';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface State {
    hover: boolean;
    collapse: boolean;
}

/* istanbul ignore next */
class SidebarTransition extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hover: false,
            collapse: false
        };
    }

    public toggleSideBar = () => {
        const setCollapseVal = (this.state.collapse) ? false : true
        this.setState({ collapse: setCollapseVal })
    }

    public render() {
        return (
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
        )
    }
}

/* istanbul ignore next */
export default SidebarTransition;
