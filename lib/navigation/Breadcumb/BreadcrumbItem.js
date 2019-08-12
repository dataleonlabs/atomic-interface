import React from 'react';
import { BreadcrumbItem as BreadcrumbItemBase } from 'reactstrap';
/**
 * BreadcrumbItem render element
 */
const BreadcrumbItem = (props) => (React.createElement(BreadcrumbItemBase, Object.assign({}, props),
    " ",
    props.children));
export default BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.js.map