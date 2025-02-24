"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "@/utils/formValidations";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebasestore";
import { useRouter } from "next/navigation";
import AvatarImg from "./AvatarImg";
import CheckboxBtn from "../ui/CheckboxBtn";
import Button from "../ui/Button";

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
  const router = useRouter();

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      await addDoc(collection(db, "devForm"), data);
      router.push(`/developer-list`);
      return reset();
    } catch (error: unknown) {
      console.error((error as Error)?.message);
    }
  };
  return (
    <div className="my-4 relative md:w-[600px] p-4 text-sm text-white flex flex-col gap-5 rounded-2xl border-2 border-transparent bg-[#212121] before:absolute before:inset-0 before:m-[-2px] before:rounded-[16px] before:bg-gradient-to-tr before:from-transparent before:via-[#e81cff] before:to-[#40c9ff] before:z-[-1]">
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
            {...register("name")}
          />
          {errors && (
            <small className="text-[#e81cff]">{errors.name?.message}</small>
          )}
        </div>
        <div className="md:flex-row flex flex-col items-center justify-center gap-4 w-full">
          <div className="md:w-1/2 w-full">
          <label
            className="block mb-1 text-[#717171] font-semibold text-xs"
            htmlFor="email"
            >
            Developer Email
          </label>
          <input
            className="w-full p-3 rounded-lg text-white bg-transparent border border-[#414141] placeholder-opacity-50 focus:outline-none focus:border-[#e81cff]"
            type="text"
            {...register("email")}
            />
          {errors && (
            <small className="text-[#e81cff]">{errors.email?.message}</small>
          )}
          </div>
          <div className="md:w-1/2 w-full">
          <label
            className="block mb-1 text-[#717171] font-semibold text-xs"
            htmlFor="url"
          >
            URL
          </label>
          <input
            className="w-full p-3 rounded-lg text-white bg-transparent border border-[#414141] placeholder-opacity-50 focus:outline-none focus:border-[#e81cff]"
            type="text"
            {...register("url")}
          />
          {errors && (
            <small className="text-[#e81cff]">{errors.url?.message}</small>
          )}
        </div>
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
            cols={50}
            {...register("description")}
          ></textarea>
        </div>
        <div className="flex items-center space-x-3">
          <label className="group flex items-center cursor-pointer">
            <input
              className="hidden peer"
              type="checkbox"
              {...register("private")}
            />
            <CheckboxBtn />
          </label>
          {errors && (
            <small className="text-[#e81cff]">{errors.private?.message}</small>
          )}
        </div>
        <Button
          className={`flex items-start justify-center self-start font-semibold w-2/5 border border-[#414141] p-3 text-sm gap-2 mt-2 ${
            !isSubmitting
              ? "cursor-pointer rounded-md hover:bg-[#e81cff] hover:border-white active:scale-95"
              : "cursor-not-allowed"
          }`}
          color=""
          size="medium"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submiting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default DevInput;
