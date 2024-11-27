import { useNavigate } from "react-router-dom";
import Header from "../components/molecules/Header";
import "../components/styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
      <button onClick={() => navigate("/edit")}>Editar Contenido</button>
    </div>
  );
};

export default Home;
