// Render Prop
import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Label } from 'reactstrap';
import InputRender from './controls/Input';
import TextareaRender from './controls/Textarea';
import { IFieldConfiguration, Props, State, Values } from './types'

const validate = (values: Values) => {
  const errors: Values = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(String(values.email))
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const onSubmit = (values: Values, { setSubmitting }: { setSubmitting: (v: boolean) => void }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperGridCol = (component: JSX.Element, field: IFieldConfiguration) => {
  return field.grid ? <Col sm={field.grid}>{component}</Col> : component;
};


/**
 * Layout form
 */
class Layout extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    className: '',
  }

  /**
   * Select field to render
   * @param type type of current field
   */
  public renderField(type: string | undefined) {
    if (type === 'textarea') {
      return TextareaRender;
    }

    // Default field is text input for: 'text', 'email', 'number', 'password', 'color'
    return InputRender;
  }

  public render() {
    return (
      <div>
        <Formik
          initialValues={this.props.values || {}}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form inline={this.props.inline} className={this.props.className}>
              {this.props.fields.map((field: IFieldConfiguration, key: number) => (
                <React.Fragment key={key}>
                  {wrapperGridCol(
                    <FormGroup inline={field.inline}>
                      {!field.hideLabel && field.label && (
                        <Label
                          size={field.size || 'md'}
                          for={field.name}
                          className={field.className}
                          sm={field.labelGrid || 12}
                        >
                          {field.label}
                        </Label>
                      )}
                      <Field
                        {...field}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        id={field.name}
                        render={this.renderField(field.type)}
                        bsSize={field.size || 'md'}
                      />
                      <ErrorMessage component={FormFeedback} name={field.name} />
                      {field.help && <FormText>{field.help}</FormText>}
                    </FormGroup>, field)}
                </React.Fragment>
              ))}
              {this.props.button && <Button type="submit" disabled={isSubmitting} {...this.props.button}>{this.props.button.label || 'Submit'}</Button>}
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default Layout;
