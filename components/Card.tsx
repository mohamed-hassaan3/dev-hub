"use client";
import DeletePost from "@/components/developer-list-page/DeletePost";
import { FormSchema } from "@/utils/formValidations";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import EditPost from "./developer-list-page/UpdatePost";

const Card = ({
  developer,
  setDeveloperList,
}: {
  developer: FormSchema;
  setDeveloperList: React.Dispatch<React.SetStateAction<FormSchema[]>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(developer.avatar);
  return (
    <div
      key={developer.id}
      className="relative grid overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-black min-h-56"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-white sm:text-xl">
            {developer.name}
          </h3>

          <Link
            href={developer.url}
            target="_blank"
            className="mt-1 text-xs font-medium text-white"
          >
            {developer.url}
          </Link>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          {developer.avatar && (
            <Image
              alt="avatar"
              src={typeof developer.avatar}
              width={50}
              height={50}
              className="size-16 rounded-lg object-cover shadow-xs"
            />
          )}
        </div>
      </div>
      {developer.description && (
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className={`mt-4 ${
            isOpen ? "max-h-auto" : "max-h-6"
          } overflow-hidden`}
        >
          <p className="realtive text-sm text-pretty text-white">
            {developer.description}
          </p>
          {developer.description.length > 100 && (
            <small className="font-bold text-[#717171] hover:text-white absolute right-4 top-[52%] cursor-pointer">
              {!isOpen && "...more"}
            </small>
          )}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <p>{developer.category}</p>
        <div className="flex items-center gap-12">
          <DeletePost
            id={developer.id as string}
            setDeveloperList={setDeveloperList}
          />
          <EditPost developer={developer} />
        </div>
      </div>
    </div>
  );
};

export default Card;
