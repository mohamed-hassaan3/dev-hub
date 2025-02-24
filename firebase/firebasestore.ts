import { getFirestore } from "@firebase/firestore";
import { app } from "./firebaseConfig";
import { getStorage } from "firebase/storage";

const db = getFirestore(app)
export const storage = getStorage(app);
export {db}