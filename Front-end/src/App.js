import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./Components/ResetPassword";
import Rapports from "./Components/Rapports";
import Footer from "./Components/Footer";
import Salaire from "./Components/ChartComponents/Salaire";
import MatriceCompetence from "./Components/ChartComponents/MatriceCompetence";
import PosteAPPEvolution from "./Components/ChartComponents/PosteAPPEvolution";
import RatioFemininMasculin from "./Components/ChartComponents/RatioFemininMasculin";
import Recrutement from "./Components/ChartComponents/Recrutement";
import Technologie from "./Components/ChartComponents/Technologie";
import Etudes from "./Components/ChartComponents/Etudes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-full ">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/rapports" element={<Rapports />} />
            <Route path="/rapports/salaire/:id" element={<Salaire />} />
            <Route
              path="/rapports/posteApp/:id"
              element={<PosteAPPEvolution />}
            />
            <Route
              path="/rapports/competence/:id"
              element={<MatriceCompetence />}
            />
            <Route path="/rapports/recrutement" element={<Recrutement />} />
            <Route path="/rapports/technologie" element={<Technologie />} />
            <Route path="/rapports/etudes" element={<Etudes />} />
            <Route
              path="/rapports/ratioFemininMasculin"
              element={<RatioFemininMasculin />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer className="mt-auto" />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
