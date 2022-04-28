import "./App.css";
import Home from "./components/Home/Home.components";
import Labs from "./pages/Labs/labs.pages";
import Theories from "./pages/Theories/theories.pages";
import Professor from "./pages/Professors/professors.pages";
import CreateLab from "./pages/Labs/CreateLab.pages";
import CreateProf from "./pages/Professors/CreateProf.pages";
import CreateTheory from "./pages/Theories/CreateTheory.pages";
import EditLab from "./pages/Labs/EditLab.pages";
import EditProf from "./pages/Professors/EditProf.pages";
import EditTheory from "./pages/Theories/EditTheory.pages";
import TaAllotment from "./pages/Teaching_Assistants/TaAllotment.pages";
import { Routes, Route } from "react-router-dom";
import TeachingAssistants from "./pages/Teaching_Assistants/teaching_assistants.pages";
import CreateTA from "./pages/Teaching_Assistants/CreateTA.pages";
import EditTa from "./pages/Teaching_Assistants/EditTA.pages";
import ProfAllotment from "./pages/Professors/ProfAllotment.pages";
import Complex from "./pages/Complex/Complex.pages";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/labs" element={<Labs />}></Route>
        <Route path="/theories" element={<Theories />}></Route>
        <Route path="/professors" element={<Professor />}></Route>
        <Route path="/Tas" element={<TeachingAssistants />}></Route>
        <Route path="/createLab" element={<CreateLab />}></Route>
        <Route path="/editLab/:CourseName" element={<EditLab />}></Route>
        <Route path="/editProf/:professorId" element={<EditProf />}></Route>
        <Route path="/createProfessor" element={<CreateProf />}></Route>
        <Route path="/getProfAllotment/:professorId" element={<ProfAllotment />}></Route>
        <Route path="/getTaAllotment/:TaId" element={<TaAllotment />}></Route>
        <Route path="/createTA" element={<CreateTA />}></Route>
        <Route path="/editTa/:TaId" element={<EditTa />}></Route>
        <Route path="/createTheory" element={<CreateTheory />}></Route>
        <Route path="/editTheory/:CourseName" element={<EditTheory />}></Route>
        <Route path="/complex" element={<Complex />}></Route>

      </Routes>
    </div>
  );
}

export default App;
