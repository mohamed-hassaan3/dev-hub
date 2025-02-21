"use client";
import Button from "@/components/ui/Button";
import { db } from "@/firebase/firebasestore";
import { FormSchema } from "@/utils/formValidations";
import { collection, getDocs } from "@firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DeveloperList = () => {
  const router = useRouter();
  const [devloperList, setDeveloperList] = useState<FormSchema[]>();


  useEffect(() => {
    const fetchData = async () => {
      const getData = await getDocs(collection(db, "devForm"));
      setDeveloperList(
        getData.docs.map((doc) => {
          const data = doc.data() as FormSchema;
          return { id: doc.id, ...data };
        })
      );
    };
    fetchData();
  }, []);
  return (
    <div className="p-4">
      <Button color="transparent" size="medium" onClick={() => router.back()}>
        Back to Form
      </Button>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-8 justify-center items-center gap-8">
        {devloperList?.map((developer, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-md overflow-hidden truncate"
          >
            <p className="">Name {developer.name}</p>
            <p className="">URL {developer.url}</p>
            <p className="">Category {developer.category}</p>
            <p className=" w-[400px] !text-wrap">
              Description {developer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperList;
