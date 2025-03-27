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
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/design" element={<Design />} />
          <Route path="/devlog" element={<DevLog />} />
          <Route path="/beta" element={<Beta />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
