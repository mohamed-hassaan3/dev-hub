"use client";
import { formSchema } from "@/utils/formValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const AvatarImg = () => {
  const {
    setValue,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const [preview, setPreview] = useState<string | null>(null);
  const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setValue("avatar", file);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const removeImg = () => {
    setPreview(null);
    hiddenFileInputRef.current!.value = "";
    setValue("avatar", null);
  };

  const triggerFieldInuput = () => {
    hiddenFileInputRef.current?.click();
  };

  return (
    <div className="relative mx-auto h-[100px] w-[200px] rounded-[10px] shadow-[4px_4px_30px_rgba(0,0,0,0.2)] flex flex-col items-center justify-between p-2.5 bg-[rgba(0,110,255,0.041)]">
      {!preview && (
        <button
        {...register("avatar")}
          type="button"
          onClick={triggerFieldInuput}
          className="cursor-pointer flex-1 w-full border-2 border-dashed border-[#40c9ff] hover:border-[#e81cff] rounded-[10px] flex items-center justify-center flex-col"
        >
          <svg
            className="h-[50px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <p className="text-center text-black">upload Avatar!</p>
        </button>
      )}
      {preview && (
        <>
          <Image
            src={preview}
            className="rounded-full w-20 h-20 object-cover"
            alt="profilePicture"
            height={50}
            width={50}
            {...register("avatar")}
          />
          <label
            htmlFor="file"
            className="w-full h-[40px] p-2 cursor-pointer flex items-center justify-around gap-16 absolute bottom-0"
          >
            <svg
              onClick={triggerFieldInuput}
              fill="#000000"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[130%] fill-[royalblue] bg-[rgba(70,66,66,0.103)] rounded-full p-[2px] cursor-pointer shadow-[0_2px_30px_rgba(0,0,0,0.205)]"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path>
                <path d="M18.153 6h-.009v5.342H23.5v-.002z"></path>
              </g>
            </svg>
            <svg
              onClick={removeImg}
              className="h-[130%] fill-[royalblue] bg-[rgba(70,66,66,0.103)] rounded-full p-[2px] cursor-pointer shadow-[0_2px_30px_rgba(0,0,0,0.205)]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
                  stroke="#000000"
                  strokeWidth="2"
                ></path>
                <path
                  d="M19.5 5H4.5"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z"
                  stroke="#000000"
                  strokeWidth="2"
                ></path>
              </g>
            </svg>
          </label>
        </>
      )}
      <input
        {...register("avatar")}
        ref={hiddenFileInputRef}
        hidden
        type="file"
        onChange={handleImgChange}
      />
      {errors && (
        <small className="text-[#e81cff]">{errors.avatar?.message}</small>
      )}
    </div>
  );
};

export default AvatarImg;
