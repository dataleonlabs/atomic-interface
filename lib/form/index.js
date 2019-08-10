import React from 'react';
import { Form as FormFormik, Formik } from 'formik';
/**
 * Form
 */
class Form extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Formik, Object.assign({}, this.props), (props) => (React.createElement(FormFormik, null, (typeof this.props.children === 'function')
                && this.props.children /* tslint:enable */(props))))));
    }
}
Form.defaultProps = {
    inline: false,
};
export default Form;
//# sourceMappingURL=index.js.map