import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useField } from "formik";
import { SingleFileUploadWithProgress } from "./SingleUpload";
import  FileUploadError  from "./FileUploadError";

import Button from "../Button/Button";
import './FileUpload.css'
import {
  ArchiveIcon,
  FileIcon,
  ImagesIcon,
  MicIcon,
  VideoIcon,
} from '../SvgIcons/SvgIcon'

let currentId = 0;

function getNewId() {
  // we could use a fancier solution instead of a sequential ID :)
  return ++currentId;
}

export const UploadableFile = [
  {
    id: "",
    file: File,
    url: "",
    errors: [],
  },
];

const baseStyle = {
  flex: 1,
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "transperent",
  outline: "none",
  transition: "border .24s ease-in-out",
  borderRadius: "8px",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const  MultipleFileUploadField = ({ name }) => {
  const [files, setFiles] = useState([]);
  const [_, __, helpers] = useField(name);

  const onDrop = useCallback((accFiles, fileRejections) => {
    console.log("ondrop run");
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }));
    const mappedRej = fileRejections.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  useEffect(() => {
    helpers.setValue(files);
    // helpers.setTouched(true);
  }, [files]);

  function onUpload(file, url) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }
  const {
    acceptedFiles,
    fileRejections,
    open,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    maxSize: 300 * 1024, // 300KB
    noClick: true,
    noKeyboard: true,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <section className="w-100 file-attached" style={style}>
      {files.map((fileWrapper) => (
        <div key={fileWrapper.id}>
          {fileWrapper.errors.length ? (
            <FileUploadError
              file={fileWrapper.file}
              errors={fileWrapper.errors}
              onDelete={onDelete}
            />
          ) : (
            <SingleFileUploadWithProgress
              onDelete={onDelete}
              onUpload={onUpload}
              file={fileWrapper.file}
            />
          )}
        </div>
      ))}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="action-wrap d-flex align-items-center">
          <Button
            onClick={open}
            backgroundColor="#F3F6F9"
            color="#144B8D"
          >
            Attach file
          </Button>
          <div className="d-flex ml-auto">
            <span className="d-none d-sm-block">or drag it here</span>
            <ul className="d-flex ml-4 mb-0 p-0" style={{ listStyle: "none" }}>
              <li>
                <FileIcon />
              </li>
              <li className="ml-4">
                <ImagesIcon />
              </li>
              <li className="ml-4">
                <MicIcon />
              </li>
              <li className="ml-4 d-none d-sm-block">
                <VideoIcon />
              </li>
              <li className="ml-4 d-none d-sm-block">
                <ArchiveIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MultipleFileUploadField