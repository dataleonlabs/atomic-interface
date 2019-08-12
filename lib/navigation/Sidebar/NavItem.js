import React from 'react';
import { NavItem as NavItemBase } from 'reactstrap';
/**
 * NavItem render element
 */
const NavItem = (props) => (React.createElement(NavItemBase, Object.assign({}, props),
    React.createElement("div", { className: "nav-link" }, props.children)));
export default NavItem;
//# sourceMappingURL=NavItem.js.map