import { ArrayHelpers } from "formik";

/**
 * This component using https://jaredpalmer.com/formik/docs/api/fieldarray
 * @example
 *   <FieldArray name="friends">
 *     {(arrayHelpers) => (
 *        <div>
 *          {values.friends.map((friend, index) => (
 *            <div key={index}>
 *              <Field name={`friends[${index}].name`} />
 *              <Field name={`friends.${index}.age`} /> // both these conventions do the same
 *              <button type="button" onClick={() => arrayHelpers.remove(index)}>
 *                -
 *              </button>
 *            </div>
 *          ))}
 *          <button
 *            type="button"
 *            onClick={() => arrayHelpers.push({ name: '', age: '' })}
 *          >
 *            +
 *          </button>
 *        </div>
 *     )}
 *   </FieldArray>
 */

export interface FieldArrayProps {

    /** Nam function */
    name: string

    /** Children function */
    children: (p: ArrayHelpers) => string | JSX.Element | JSX.Element[] | Element
}
