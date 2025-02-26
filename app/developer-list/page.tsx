"use client"
import DevList from "@/modules/DevList";
import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

const DeveloperList = () => {
  const router = useRouter();

  return (
    <div className="p-5 w-[100%] lg:w-[60%] md:w-[80%] m-auto">
      <ToastContainer autoClose={800} />
      <Button color="transparent" size="medium" onClick={() => router.back()}>
        Back to Form
      </Button>
      <div className="">
      <DevList />
      </div>
    </div>
  );
};

export default DeveloperList;
