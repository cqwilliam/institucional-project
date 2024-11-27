import { useNavigate } from "react-router-dom";
import Body from "../../components/body";
import Header from "../../components/Header/header";
// import SideBar from "../../components/sideBar";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      {/* <SideBar/> */}
      <Header />
      <Body />
      <button onClick={() => navigate("/sign-in")}>Iniciar Sesión</button>
      <button onClick={() => navigate("/managment")}>Editar Contenido</button>
    </div>
  );
};

export default Home;
