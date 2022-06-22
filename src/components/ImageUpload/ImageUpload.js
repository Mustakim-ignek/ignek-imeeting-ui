import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { useField } from "formik";
import "./ImageUpload.css";

const UploadImage = (props) => {
  const [_, __, helpers] = useField(props.name);

  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    const uploadedImageData =  imageList[0].data_url
    //  props.getUploadImgeData(uploadedImageData);
  };

  useEffect(()=> {
      helpers.setValue(images)
  },[images])

  return (
    <>
      <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
        }) => (
          <>
            <div
              className="file_upload"
              style={
                isDragging
                  ? { background: "#161616", color: "#fff", opacity: 0.5 }
                  : undefined
              }
            >
              {imageList.length > 0 ? (
                <div></div>
              ) : (
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
              )}
              {imageList.map((image, index) => (
                <>
                  <img key={index} src={image["data_url"]} alt="" width="100" />
                  <button
                    key={index+1}
                    className="update"
                    onClick={() => onImageUpdate(index)}
                  ></button>
                </>
              ))}
            </div>
          </>
        )}
      </ImageUploading>
    </>
  );
};

export default UploadImage;
