import React from 'react'
import { FormikConfig } from 'formik';


/**
 * This component using formik lib https://jaredpalmer.com/formik/docs/api/formik
 * @example
 * <Form>
 *   {(_) => (
 *     <Email name="email" placeholder="Email" />
 *     <Password name="password" placeholder="Email" />
 *     <Buttom>Submit</Buttom>
 *   )}
 * </Form>
 */

export interface FormProps extends FormikConfig<{}> {

  /** Indicates whether the style of fields is inline or not */
  inline?: boolean

  /** The title will be placed top on the form if specified */
  title?: React.ReactNode

  /** The description will be placed just below the title if specified */
  description?: React.ReactNode
}