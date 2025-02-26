import React from "react";
import Button from "../ui/Button";
import { FormSchema } from "@/utils/formValidations";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "@/firebase/firebasestore";

const UpdatePost = ({ developer }: { developer: FormSchema }) => {
  const handleUpdate = async () => {
    if (!developer) return;
    if (developer.id) {
      const postRef = doc(db, "devForm", developer.id);
      try {
        await updateDoc(postRef, {
          name: developer.name,
          url: developer.url,
          email: developer.email,
          category: developer.category,
          description: developer.description,
          avatar: developer.avatar,
        });
        console.log(developer.id);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.error("Developer ID is undefined");
    }
  };
  return (
    <Button
      size="small"
      color="secondary"
      className="rounded-xl w-24 text-md font-semibold"
      onClick={handleUpdate}
    >
      Edit
    </Button>
  );
};

export default UpdatePost;
