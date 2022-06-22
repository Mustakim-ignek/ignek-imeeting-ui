
import React, {  useEffect, useState } from "react";
import { CloseIcon, DownloadIcon } from '../SvgIcons/SvgIcon'

export const FileHeaderProps = {
  file: File,
  onDelete: () => {},
};

const getFileProperSize = (size) => {
  var fSExt = new Array("Bytes", "KB", "MB", "GB"),
    i = 0;
  while (size > 900) {
    size /= 1024;
    i++;
  }
  var exactSize = Math.round(size * 100) / 100 + " " + fSExt[i];
  console.log("FILE SIZE = ", exactSize);

  return exactSize;
};

export function FileHeader({ file, onDelete, children }) {
  const [sizeValue, srtSizeValue] = useState("");
  useEffect(() => {
    srtSizeValue(getFileProperSize(file.size));
  }, []);
  return (
    <div className="file-name-wrap d-flex align-items-center">
      <div className="preview d-flex align-items-center">
        <h5 className="mb-0 mr-3 file-name">{file.name}</h5>
        <span>{sizeValue}</span>
      </div>
      <div className="file-action d-flex align-items-center ml-auto">
        <div className="down-icon">
          <DownloadIcon />
        </div>
        <div className="dlt-icon ml-4" onClick={() => onDelete(file)}>
          <CloseIcon />
        </div>
      </div>
      {children}
    </div>
  );
}
