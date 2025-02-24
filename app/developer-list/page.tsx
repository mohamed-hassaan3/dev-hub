"use client"
import DevList from "@/modules/DevList";
import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const DeveloperList = () => {
  const router = useRouter();

  return (
    <div className="p-4">
      <Button color="transparent" size="medium" onClick={() => router.back()}>
        Back to Form
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-8 justify-center items-start gap-8">
      <DevList />
      </div>
    </div>
  );
};

export default DeveloperList;
