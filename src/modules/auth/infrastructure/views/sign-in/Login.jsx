import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../credentials";

const auth = getAuth(appFirebase);

const Login = () => {
  const [registering, setRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Importa useNavigate

  const handleAuth = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validación del correo y contraseña
    if (!email.includes("@") || password.length < 6) {
      setErrorMessage("Por favor, ingresa un correo válido y una contraseña de al menos 6 caracteres.");
      return;
    }

    try {
      if (registering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Usuario registrado exitosamente");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Sesión iniciada correctamente");
      }
      navigate("/edit"); // Redirige al componente Edit después de iniciar sesión o registrarse
    } catch (error) {
      setErrorMessage("Error de autenticación: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>{registering ? "REGISTRARSE" : "INICIAR SESIÓN"}</h1>
      <form onSubmit={handleAuth}>
        <input className="text-black text-center" type="email" placeholder="Correo" id="email" required />
        <input className="text-black text-center" type="password" placeholder="Contraseña" id="password" required />
        <button type="submit">
          {registering ? "Registrarse" : "Iniciar Sesión"}
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button onClick={() => setRegistering(!registering)}>
        {registering ? "¿Ya tienes cuenta? Iniciar Sesión" : "¿No tienes una cuenta? Registrarse"}
      </button>
    </div>
  );
};

export default Login;
