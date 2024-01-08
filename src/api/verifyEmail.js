// Import necessary libraries
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { getDoc, updateDoc } from "firebase/firestore";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { verificationId } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get user with the provided verificationId
        const querySnapshot = await getDoc(doc(db, "users", verificationId));
        const userData = querySnapshot.data();

        // Check if user exists and has not been verified yet
        if (userData && !auth.currentUser.emailVerified) {
          // Update the user's email verification status
          await updateDoc(doc(db, "users", verificationId), {
            emailVerified: true,
          });

          // Navigate to the login page or any other page as needed
          navigate("/login");
        } else {
          // Handle invalid or already verified links
          // You may want to display an error message or redirect to an error page
          navigate("/error");
        }
      } catch (error) {
        // Handle errors
        // You may want to display an error message or redirect to an error page
        navigate("/error");
      }
    };

    verifyEmail();
  }, [verificationId, navigate]);

  return (
    <div>
      {/* You can add loading or error messages here if needed */}
      Verifying email...
    </div>
  );
};

export default VerifyEmail;
