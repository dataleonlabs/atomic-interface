import React from 'react';
import { Formik } from 'formik';
import { Form as FormBase } from 'reactstrap';
/**
 * Form
 */
class Form extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Formik, Object.assign({}, this.props), (props) => {
                const onSubmit = (event) => {
                    event.preventDefault();
                    props.handleSubmit(event);
                    props.setSubmitting(true);
                };
                return (React.createElement(FormBase, { onSubmit: onSubmit }, (typeof this.props.children === 'function')
                    && this.props.children /* tslint:enable */(props)));
            })));
    }
}
Form.defaultProps = {
    inline: false,
};
export default Form;
//# sourceMappingURL=index.js.map