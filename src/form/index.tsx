import React from 'react';
import { Form as FormFormik, FormikProps, Formik } from 'formik';
import { Props } from './types'

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
          {(props: FormikProps<{}>) => (
            <FormFormik>
              {(typeof this.props.children === 'function') && (this.props.children as Function)(props)}
            </FormFormik>
          )}
        </Formik>
      </div>
    )
  }
}

export default Form;
