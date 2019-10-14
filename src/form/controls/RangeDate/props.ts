/**
 * This component using bootstrap lib https://reactstrap.github.io/components/form/
 * @example
 *   <RangeDate name={'firstName'} label={'First Name'}>
 */

export interface RangeDateProps {

  /** component name */
  name: string;

  /** set component min key  */
  nameMin: string

  /** set component max key */
  nameMax: string

  /** set datepicker date format */
  dateFormat?: string;

  /** component onChange */
  onChange?: (value: Range | number) => void;

  /** Current label displayed */
  readOnly?: boolean;

  /** Current label displayed */
  label?: string | JSX.Element

  /** Help display below control */
  help?: string

  /** Inline control */
  minPlaceholder?: string

  /** Inline control */
  maxPlaceholder?: string

  /** control grid */
  controlSize?: number

  /**
   * Check of current values if you have field with same conditionnals values.
   * @example values
   * {
   *   firstName: "Gerard",
   *   email: "example@example.com",
   *   gender: "woman"
   * }
   * @example conditionnals, then display field because gender is equal woman in values
   * {
   *   gender: "woman"
   * }
   * 
   */
  conditionnals?: { [key: string]: any };
}