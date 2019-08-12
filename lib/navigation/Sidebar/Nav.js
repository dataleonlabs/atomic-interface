import React from 'react';
import { Nav as NavBase } from 'reactstrap';
/**
 * Nav render element
 */
const Nav = (props) => (React.createElement(NavBase, Object.assign({ className: "SidebarNav" }, props, { vertical: true }), props.children));
export default Nav;
//# sourceMappingURL=Nav.js.map