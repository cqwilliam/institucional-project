import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import appFirebase from "../../../shared/infrastucture/configs/firebase-credentials";

const auth = getAuth(appFirebase);

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { isLoggedIn, isLoading };
};
