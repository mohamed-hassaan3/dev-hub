import React from "react";
import Button from "../ui/Button";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "@/firebase/firebasestore";
import { FormSchema } from "@/utils/formValidations";

const DeletePost = ({ id, setDeveloperList }: { id: string, setDeveloperList: React.Dispatch<React.SetStateAction<FormSchema[]>> }) => {
  
  const handleDelete = async () => {
    const idRef = doc(db, "devForm", id);
    try {
      await deleteDoc(idRef);
      setDeveloperList((prev) => prev.filter((item: FormSchema) => item.id !== id))
      alert(`Deleted ${id}`);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleDelete}
      size="small"
      color="danger"
      className="danger"
    >
      <span>Delete</span>
    </Button>
  );
};

export default DeletePost;
