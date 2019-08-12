import React from 'react';
import { FormikProps, Formik } from 'formik';
import { FormProps as Props } from './props'
import { Form as FormBase } from 'reactstrap';

/**
 * Form 
 */
class Form extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    inline: false,
  }

  public render() {
    return (
      <div>
        <Formik {...this.props}>
          {(props: FormikProps<{}>) => {
            const onSubmit = (event: any) => {
              event.preventDefault();
              props.handleSubmit(event);
              props.setSubmitting(true);
            }
            return (
              <FormBase onSubmit={onSubmit}>
                {(typeof this.props.children === 'function')
                  && (this.props.children as /* tslint:disable */ Function /* tslint:enable */)(props)}
              </FormBase>
            );
          }}
        </Formik>
      </div>
    )
  }
}

export default Form;