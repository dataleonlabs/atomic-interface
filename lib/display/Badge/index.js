import React from 'react';
import { Badge as StrapBadge } from 'reactstrap';
/**
 * Badge render element
 */
const Badge = (props) => (React.createElement(StrapBadge, { color: props.color, pill: props.pill },
    React.createElement(React.Fragment, null, props.children)));
export default Badge;
//# sourceMappingURL=index.js.map