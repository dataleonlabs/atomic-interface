/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <FilePickerS3 name="image" label="Picture" onUploadFinish={(data) => void}>
 */

export interface State {
  /** on loading */
  loading: boolean

  /** On progress upload */
  progress: number

  /** If error */
  error: boolean

  /** Error message */
  errorMessage: string
}

export interface Props extends ReactS3Uploader {

  /** Signed url */
  signingUrl: string

  /** Signed server */
  server: string 

  /** Acl upload aws */
  XAmzAcl?: string

  /** The label that will be displayed */
  label: string

  /** The name that will identify the checkbox */
  name: string

  /** Handle a function when the input file is changed */
  onUploadFinish: (
    data: {
      name: string
      value: { id: string; key: string; name: string }
      error: boolean
    },
  ) => void

  /** Upload multiple files */
  multipleFiles?: boolean

  /** Accept files */
  accept?: string

  /**
   * The value that contain a filename on string and the data on string
   */
  value?: { id?: string; key?: string; name?: string }

  showLink?: boolean
}
