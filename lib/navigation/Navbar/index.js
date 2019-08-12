import React from 'react';
import { StyledNavbar } from './style';
/**
 * NavBar render element
 */
const Navbar = (props) => {
    return (React.createElement(StyledNavbar, Object.assign({}, props, { expand: "md" }), props.children));
};
export default Navbar;
//# sourceMappingURL=index.js.map