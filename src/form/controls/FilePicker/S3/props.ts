import React from 'react';
import { FilePickerProps } from '../props';

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

  fileName: string

  /** If error */
  error: boolean

  /** Error message */
  errorMessage: string,

  fileNames: [],

  originalValues: {
    key: string,
    fileName: string,
    size: string,
    type: string
  },

  originalValuesForMultiple: [],  
}

export interface FilePickerS3Props extends FilePickerProps {

  /** Signed url */
  signingUrl: string

  /** Active filename with uuidv4 */
  uuid?: boolean

  /** Signed method */
  signingUrlMethod?: 'PUT' | 'GET'

  /** Signed server */
  server: string

  /** Acl upload aws */
  XAmzAcl?: 'private' | 'public-read' | 'public-read-write' | 'aws-exec-read' | 'authenticated-read' | 'bucket-owner-read' | 'bucket-owner-full-control'

  /** The label that will be displayed */
  label: string

  /** The name that will identify the checkbox */
  name: string

  /** Handle a function when the input file is changed */
  onUploadFinish?: (name: string) => void

  /** Upload multiple files */
  multipleFiles?: boolean

  /** Accept files */
  accept?: string

  outline?: boolean;
  block?: boolean;
  color?: string;
  size?: any;
  id?: string;
  style?: React.CSSProperties;

  /** icon displayed on left */
  icon?: JSX.Element

  children: string | JSX.Element | JSX.Element[] | Element

  /** set values to converseOriginalFilename */
  converseOriginalFileName?: boolean

  /** set true if want to see links of uploaded files */
  displayLinks?: boolean

  /** Get S3 URL */
  s3Url: string

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
