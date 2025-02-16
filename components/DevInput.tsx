"use client";
import React from "react";
import Button from "./ui/Button";
import AvatarImg from "./AvatarImg";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "@/utils/validations";

const DevInput = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { avatar: null },
  });
  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    reset,
  } = form;

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    return reset();
  };
  return (
    <div className="my-4 relative w-[400px] py-2 px-5 text-sm text-white flex flex-col gap-5 rounded-2xl border-2 border-transparent bg-[#212121] before:absolute before:inset-0 before:m-[-2px] before:rounded-[16px] before:bg-gradient-to-tr before:from-transparent before:via-[#e81cff] before:to-[#40c9ff] before:z-[-1]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* AVATAR IMG Component */}
        <AvatarImg />
        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="name"
            className="block mb-1 text-[#717171] font-semibold text-xs"
          >
            Developer Name
          </label>
          <input
            className="w-full p-3 rounded-lg text-white bg-transparent border border-[#414141] placeholder-opacity-50 focus:outline-none focus:border-[#e81cff]"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors && (
            <small className="text-[#e81cff]">{errors.name?.message}</small>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <label
            className="block mb-1 text-[#717171] font-semibold text-xs"
            htmlFor="email"
          >
            Developer Email
          </label>
          <input
            className="w-full p-3 rounded-lg text-white bg-transparent border border-[#414141] placeholder-opacity-50 focus:outline-none focus:border-[#e81cff]"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors && (
            <small className="text-[#e81cff]">{errors.email?.message}</small>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <label
            className="block mb-1 text-[#717171] font-semibold text-xs"
            htmlFor="url"
          >
            URL
          </label>
          <input
            className="w-full p-3 rounded-lg text-white bg-transparent border border-[#414141] placeholder-opacity-50 focus:outline-none focus:border-[#e81cff]"
            type="text"
            id="url"
            {...register("url")}
          />
          {errors && (
            <small className="text-[#e81cff]">{errors.url?.message}</small>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <label
            className=" cursor-pointer block mb-1 text-[#717171] font-semibold text-xs"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="!bg-transparent text-[#717171] border border-[#717171] rounded-md p-4  focus:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-[#e81cff] transition ease-in-out duration-150 [&>*]:bg-foreground cursor-pointer"
            defaultValue=""
            {...register("category")}
          >
            <option value="" disabled>
              select category
            </option>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="HTML CSS">HTML CSS</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </select>
          {errors && (
            <small className="text-[#e81cff]">{errors.category?.message}</small>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <label
            className="block mb-1 text-[#717171] font-semibold text-xs"
            htmlFor="textarea"
          >
            Description
          </label>
          <textarea
            className="w-full p-3 rounded-lg text-white bg-transparent border border-[#414141] min-h-[96px] h-[96px] resize-none focus:outline-none focus:border-[#e81cff]"
            name="textarea"
            id="textarea"
            cols={50}
          ></textarea>
        </div>
        <div className="flex items-center space-x-3">
          <label className="group flex items-center cursor-pointer">
            <input className="hidden peer" type="checkbox" {...register("private")} />
            <span className="relative w-4 h-4 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-100 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-100 peer-checked:animate-pulse"></span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="ml-3 text-[#717171] group-hover:text-blue-500 font-medium transition-colors duration-300">
              private and conditions
            </span>
          </label>
          {errors && (
            <small className="text-[#e81cff]">{errors.private?.message}</small>
          )}
        </div>
        <Button
          className="flex items-start justify-center self-start font-semibold text-[#717171] w-2/5 bg-[#313131] border border-[#414141] p-3 text-sm gap-2 mt-2 cursor-pointer rounded-md hover:bg-white hover:border-white active:scale-95"
          color="transparent"
          size="medium"
          type="submit"
        >
          {isSubmitting ? "loading..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default DevInput;
