import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Dashboard from "./Components/Pages/Dashboard";
import Fun from "./Components/Pages/Fun";
import LeaderBoard from "./Components/Pages/LeaderBoard";
import Yogasana from "./Components/Pages/Yogasana";
import PageNotFound from "./Components/Pages/PageNotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/yogasans" element={<Yogasana />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
