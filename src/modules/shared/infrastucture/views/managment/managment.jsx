import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import appFirebase from "../../configs/firebase-credentials";     

const auth = getAuth(appFirebase);

const Managment = () => {

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Modo Edición </h1>
      <p>Puedes editar el contenido aquí. </p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Managment;
