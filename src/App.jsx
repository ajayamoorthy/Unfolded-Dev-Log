import ButtonGradient from "./assets/svg/ButtonGradient";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Design from "./pages/Design";
import DevLog from "./pages/DevLog";
import Beta from "./pages/Beta";
import Art from "./pages/Art";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/Unfolded-Dev-Log/" element={<Home />} />
          <Route path="/Unfolded-Dev-Log/team" element={<Team />} />
          <Route path="/Unfolded-Dev-Log/design" element={<Design />} />
          <Route path="/Unfolded-Dev-Log/devlog" element={<DevLog />} />
          <Route path="/Unfolded-Dev-Log/beta" element={<Beta />} />
          <Route path="/Unfolded-Dev-Log/art" element={<Art />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
