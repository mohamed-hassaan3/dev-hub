import { z } from "zod";

const IMG_SIZE = 3 * 1024 * 1024;
const IMG_TYPE = ["image/jpeg", "image/png"];

export const formSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, { message: "name must be more than 2 charchters" }),
  url: z.string({ message: "URL is required" }).url(),
  email: z.string({ message: "Email is required" }).email(),
  category: z.string({ message: "category is required" }),
  private: z.boolean(),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters long" })
    .max(255, { message: "max 255 words" })
    .optional()
    .or(z.literal("")),
  avatar: z
    .instanceof(File)
    .refine((file) => file.size >= IMG_SIZE, {
      message: `file must be less than ${IMG_SIZE}MB`,
    })
    .refine((file) => IMG_TYPE.includes(file.type), {
      message: `type of image Must to be ${IMG_TYPE.join(", ")}`,
    })
    .optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
