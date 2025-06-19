"use client"; // if using Next.js 13+ App Router

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Heading1, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import useGlobalStore from "@/store/useGlobalStore";
import axios from "axios";

export default function FileDropBox() {
  const { uplodedFiles, setuplodedFiles } = useGlobalStore();
  const { uploadedImageUrls, setuploadedImageUrls } = useGlobalStore();
  const onDrop = (acceptedFiles) => {
    if (!uplodedFiles) {
      setuplodedFiles([...acceptedFiles]);
    } else {
      setuplodedFiles([...uplodedFiles, ...acceptedFiles]);
    }
  };

  useEffect(() => {
    console.log(uplodedFiles);
    console.log(uploadedImageUrls);
  }, [uplodedFiles, uploadedImageUrls]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <h1 className="font-semibold text-gray-600 ">
        {" "}
        Upload Evidence (Optional)
      </h1>
      <div
        className={`border-dashed border-2 border-gray-400  text-center rounded-md cursor-pointer md:w-5/6 w-full   flex flex-col items-center  ${
          uplodedFiles && "gap-4 "
        }`}
      >
        <div
          className=" text-center flex flex-col items-center w-full h-42 justify-around "
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="flex flex-col justify-center bg-blue-300/20 h-full w-full">
              <p className="text-gray-500 text-xl">Drop the files here ...</p>
            </div>
          ) : (
            <>
              <Upload strokeWidth={1} className="scale-155 mt-4"></Upload>
              <p className="text-gray-500 md:text-base text-sm ">
                Drag and drop files here or click to select files
              </p>
              <Button>Browse File</Button>
              <p className="text-gray-500 md:text-base text-sm">
                Supported formats: JPG, PNG, MP4, MOV
              </p>
            </>
          )}
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-5 ">
          {uplodedFiles &&
            uplodedFiles.map((each, index) => {
              return <img key={index} src={URL.createObjectURL(each)}></img>;
            })}
        </div>
      </div>

      <div
        // onClick={uploadImagesToCloudinary}
        className="w-10 h-10 bg-red-500"
      ></div>
    </div>
  );
}
