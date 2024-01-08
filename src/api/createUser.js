import {
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
  } from "firebase/auth";
  import { v4 as uuidv4 } from 'uuid';
  import { setDoc, doc, serverTimestamp } from "firebase/firestore";
  import { auth, db } from "../config/firebase";
  
  export const createUser = async (email, password, fname, lname, contactNo, navigate) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      const { user } = userCredential;
  
      await updateProfile(user, {
        displayName: `${fname}`,
      });

      const verificationId = uuidv4();

      const verificationUrl = `https://pasyentech.com/${verificationId}`;


      await sendEmailVerification(user, { url: verificationUrl });
  
      // const params = useParams();
      // const link = params.id;
      // console.log(link);

      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, {
        fname: fname,
        lname: lname,
        email: email,
        role: "pending",
        contactNo: contactNo,
        verificationId: verificationId,
      });
      
      // Create request document
      const requestDocRef = doc(db, "requests", user.uid);
      await setDoc(requestDocRef, {
        firstName: fname,
        lastName: lname,
        email: email,
        createdAt: serverTimestamp(),
        status: "pending",
      });
  
      const message =
        "You have been registered. Your account is awaiting approval from the superadmin. A verification email has been sent to your email address.";
      alert(message);
      
    navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "The email address is already registered. Please use a different email."
        );
      } else {
        console.error("Error during signup:", error);
      }
    }
  };
  