import { InputProps } from '../Input/props';

/**
 * This component using https://github.com/buildo/react-autosize-textarea
 * @example
 *   <Textarea name={'firstName'} label={'First Name'}>
 */

export interface TextareaProps extends InputProps {

  /** Texearea Called whenever the textarea resizes */
  onResize?: (e: Event) => void;

  /** Texearea Minimum number of visible rows */
  rows?: React.HTMLProps<HTMLTextAreaElement>["rows"];

  /** Texearea Maximum number of visible rows */
  maxRows?: number;

  /** Texearea Initialize `autosize` asynchronously.
   * Enable it if you are using StyledComponents
   * This is forced to true when `maxRows` is set.
   */
  async?: boolean;

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
