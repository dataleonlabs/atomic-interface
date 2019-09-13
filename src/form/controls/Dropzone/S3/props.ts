import { FilePickerS3Props } from '../../FilePicker/S3/props';

/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <DropzoneS3 name="image" label="Picture" onUploadFinish={(data) => void}>
 */

export interface State {
  /** on loading */
  loading: boolean

  /** On progress upload */
  progress: number

  uploaded: boolean

  fileName: string

  /** If error */
  error: boolean

  /** Error message */
  errorMessage: string
}

export interface DropzoneS3Props extends FilePickerS3Props {

  /** Get S3 URL */
  s3Url: string

  /**
   * Max size of file
   */
  maxSize?: number;

  /** onDisplay */
  onDiplay?: (name: string) => string

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
