export interface UploadProgress {
  /** Original filename */
  name: string

  /** S3 signed url */
  url: string

  /** Upload percentage */
  progress: number

  /** Whether the upload is finished */
  finished: boolean
}

export interface Props {
  /** Function invoked when upload started */
  onStart: (uploadProgress: UploadProgress) => void

  /** Function invoked when upload is in progress */
  onProgress: (uploadProgress: UploadProgress) => void

  /** Function invoked when upload is finished */
  onFinish: (uploadProgress: UploadProgress) => void

  /** Class of the container */
  className?: string
}
