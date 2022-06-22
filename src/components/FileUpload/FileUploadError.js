
import React from "react";
import { FileHeader } from "./FileHeader";

export const UploadableFile = [
  {
    id: "",
    file: File,
    url: "",
    errors: [],
  },
];


const FileUploadError = ({ file, onDelete, errors }) =>{
  return (
    <React.Fragment>
      <FileHeader file={file} onDelete={onDelete} />
      {errors.map((error) => (
        <div key={error.code}>
          <Typography color="error">{error.message}</Typography>
        </div>
      ))}
    </React.Fragment>
  );
}

export default FileUploadError