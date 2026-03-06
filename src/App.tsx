import DisplaySport from "./components/Interface/DispalySprot";
import HomePage from "./components/Interface/HomePage";
import ProfilePages from "./components/Interface/ProfilePage";
import TournamentPage from "./components/Interface/TournamentPage";
import BottomMenu from "./components/layoutes/BottomMenu";
import BraketsPlace from "./components/layoutes/BracketPlace";
import InfoPlace from "./components/layoutes/InfoPlace";
import ParticipantsPlace from "./components/layoutes/ParticipantsPlace";
import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <BottomMenu />
      <Routes>
        <Route path="/" index element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePages/>} />
        <Route path="/tournament" element={<TournamentPage />} />
        <Route path="/dispalyS/:id" element={<DisplaySport/>}>
           <Route path="Participant"   element={<ParticipantsPlace/>} />
           <Route path="Info" element={<InfoPlace />}/>
           <Route path="Bracket" element={<BraketsPlace />}/>
           <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;