import React from 'react'
import { FileHeader } from './FileHeader'
import PropTypes from 'prop-types'

export const UploadableFile = [
  {
    id: '',
    file: File,
    url: '',
    errors: []
  }
]

const FileUploadError = ({ file, onDelete, errors }) => {
  return (
    <React.Fragment>
      <FileHeader file={file} onDelete={onDelete} />
      {errors.map((error) => (
        <div key={error.code}>
          <Typography color='error'>{error.message}</Typography>
        </div>
      ))}
    </React.Fragment>
  )
}

FileUploadError.prototype = {
  file: PropTypes.array,
  onDelete: PropTypes.func,
  error: PropTypes.array
}

export default FileUploadError
