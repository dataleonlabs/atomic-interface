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
  errorMessage: string
}

export interface Props extends FilePickerProps {

  /** Signed url */
  signingUrl: string

  /** Active filename with uuidv4 */
  uuid?: boolean

  /** Signed method */
  signingUrlMethod: 'PUT' | 'GET'

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
}
