import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import appFirebase from "../credentials";     

const auth = getAuth(appFirebase);

const Edit = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Modo Edición </h1>
      <p>Puedes editar el contenido aquí. </p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Edit;
