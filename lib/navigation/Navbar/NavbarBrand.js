import React from 'react';
import { NavbarBrand as NavbarBrandBase } from 'reactstrap';
/**
 * NavbarBrand render element
 */
const NavbarBrand = (props) => {
    return (React.createElement(NavbarBrandBase, Object.assign({}, props),
        " ",
        props.children));
};
export default NavbarBrand;
//# sourceMappingURL=NavbarBrand.js.map