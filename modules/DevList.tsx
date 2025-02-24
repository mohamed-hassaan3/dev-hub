"use client";
import { db } from "@/firebase/firebasestore";
import { FormSchema } from "@/utils/formValidations";
import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const DevList = () => {
  const [devloperList, setDeveloperList] = useState<FormSchema[]>([]);
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
    <>
      {devloperList?.map((developer) => (
        <Card key={developer.id} developer={developer} setDeveloperList={setDeveloperList} />
      ))}
    </>
  );
};

export default DevList;
