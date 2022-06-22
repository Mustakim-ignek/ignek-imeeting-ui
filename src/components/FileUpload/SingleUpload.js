import ClayProgressBar from "@clayui/progress-bar";
import React, { useEffect, useState } from "react";
import { spritemap } from '../SvgIcons/SvgIcon'
import { FileHeader } from "./FileHeader";

export const SingleFileUploadWithProgressProps = {
  file: File,
  onDelete: () => {},
  onUpload: () => {},
};

export function SingleFileUploadWithProgress({
  file,
  onDelete,
  onUpload,
} = SingleFileUploadWithProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function upload() {
      const url = uploadFile(file, setProgress);
      onUpload(file, url);
    }

    upload();
  }, []);

  return (
    <div className="file-item-wrapper mb-4">
      <FileHeader file={file} onDelete={onDelete}>
        <ClayProgressBar
          feedback
          spritemap={spritemap}
          value={progress}
        ></ClayProgressBar>
      </FileHeader>
    </div>
  );
}

export function uploadFile(file, onProgress) {
  // const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  // const key = "docs_upload_example_us_preset";

  // return new Promise((res, rej) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("POST", url);

  //   xhr.onload = () => {
  //     const resp = JSON.parse(xhr.responseText);
  //     res(resp.secure_url);
  //   };
  //   xhr.onerror = (evt) => rej(evt);
  //   xhr.upload.onprogress = (event) => {
  //     if (event.lengthComputable) {
  //       const percentage = (event.loaded / event.total) * 100;
  //       onProgress(Math.round(percentage));
  //     }
  //   };

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", key);

  //   xhr.send(formData);
  // });
  return null;
}
