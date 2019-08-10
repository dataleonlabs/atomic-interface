import React, { useState } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, NavLink } from 'reactstrap';
import { StyledNavItem, StyledNav } from './style';
/**
 * Tabs render element
 */
const Tabs = (props) => {
    const [active, setActive] = useState(Number(props.activeTab || 0));
    /* istanbul ignore next  */
    function onClick(index, element, child) {
        if ((!child.props.disabled && props.onChange) && (typeof props.onChange === 'function')) {
            setActive(index);
            props.onChange(index, element);
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledNav, { tabs: true }, React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child)) {
                const childProps = child.props;
                const onClickTab = /* istanbul ignore next  */ (elementChlid) => { onClick(index, elementChlid, child); };
                if (childProps && childProps.title) {
                    return (React.createElement(StyledNavItem, null,
                        React.createElement(NavLink, { onClick: onClickTab, className: classnames({ active: active === index }) }, childProps.title)));
                }
            }
            /* istanbul ignore next  */
            return null;
        })),
        React.createElement(TabContent, { activeTab: active }, React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child)) {
                const childProps = child.props;
                if (child.props && childProps.title && (childProps.disabled !== true)) {
                    return (React.createElement(TabPane, { tabId: index }, childProps.children));
                }
            }
            /* istanbul ignore next  */
            return null;
        }))));
};
export default Tabs;
//# sourceMappingURL=index.js.map