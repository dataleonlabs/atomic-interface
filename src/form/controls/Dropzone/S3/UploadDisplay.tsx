import * as React from 'react';

export default class UploadDisplay extends React.Component<any> {

  public renderFileUpload = (_: any, i: number) => {
    const fileName = (this.props.fileName || this.props.value) as string;
    let url = `${this.props.s3Url}/${fileName}`;

    if (typeof this.props.onDiplay === 'function') {
      url = this.props.onDiplay(this.props.s3Url, fileName);
    }

    return (
      <div key={i}>
        <img
          style={{ width: '100%' }}
          src={url}
        />
      </div>
    )
  }

  public render() {
    const { uploadedFiles, progress, value, uploaded } = this.props as any;
    // For edit value
    if (value && !uploadedFiles.length && !uploaded) {
      return (
        <div className={`Dropzone ${uploadedFiles.length ? "dropped" : ""}`}>
          {this.renderFileUpload(null, 0)}
        </div>
      )
    }

    return (
      <div className={`Dropzone ${uploadedFiles.length ? "dropped" :""}`}>
        {!uploadedFiles.length && !progress && <div className="DropText">{this.props.children}</div>}
        {!uploadedFiles.length && progress && <div className="DropText">{progress}%</div>}
        {uploadedFiles.map(this.renderFileUpload)}
      </div>
    )
  }
}