import * as React from 'react'
import styled from 'styled-components'
import ReactS3Uploader from 'react-s3-uploader'

import { API_URL } from 'src/parameters'
import { getHeaders } from 'src/utils/graph'
import Button from 'src/presentations/elements/Button'
import i18n from 'src/assets/messages'
import { signS3URLGet } from 'src/utils/graph'
import { UploadProgress, Props } from './types'

const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`

const UploadButton = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;

  input[type='file'] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer !important;
  }
`

const FileUploader: React.FC<Props> = props => {
  const [, setUploadProgress] = React.useState<UploadProgress>({
    name: '',
    url: '',
    progress: 0,
    finished: false,
  })

  const onSignedUrl = (data: any) => {
    setUploadProgress(() => {
      const newState = {
        name: data.originalFilename,
        url: '',
        progress: 0,
        finished: false,
      }
      props.onStart(newState)
      return newState
    })
  }

  const onProgress = (progress: number) => {
    setUploadProgress(prevState => {
      const newState = {
        ...prevState,
        progress,
      }
      props.onProgress(newState)
      return newState
    })
  }

  const onFinish = async (data: any) => {
    const result = (await signS3URLGet({
      key: data.originalFilename,
      name: data.originalFilename,
    })) as any

    setUploadProgress(prevState => {
      const newState = {
        ...prevState,
        url: result.signedUrl,
        finished: true,
      }
      props.onFinish(newState)
      return newState
    })
  }

  return (
    <Container className={props.className}>
      <UploadButton>
        <Button
          label={i18n.t('uploadFile')}
          size="small"
          themeColor="primary"
        />
        <ReactS3Uploader
          multiple={false}
          signingUrl="/s3/sign"
          signingUrlMethod="GET"
          s3path="/"
          onSignedUrl={onSignedUrl}
          onProgress={onProgress}
          // onError={onError}
          onFinish={onFinish}
          signingUrlHeaders={{ ...getHeaders() }}
          signingUrlQueryParams={{ type: 'PUT' }}
          uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} // this is the default
          contentDisposition="auto"
          server={API_URL}
          autoUpload={true}
        />
      </UploadButton>
    </Container>
  )
}

export default FileUploader
