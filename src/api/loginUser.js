import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
