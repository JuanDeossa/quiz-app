import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TemplateComp } from "./components/TemplateComp/TemplateComp";
import { HomePage } from "./pages/HomePage/HomePage";
import { StudentConfigPage } from "./pages/StudentConfig/StudentConfigPage";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { ProfessorPage } from "./pages/ProfessorPage/ProfessorPage";
import { DataProvider } from "./context/DataContext";

export function App() {
  return (
    <div className="App">
      <DataProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<TemplateComp text="Not found" />} />
            <Route path="/professor" element={<ProfessorPage />} />
            <Route path="/quizsettings" element={<StudentConfigPage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="results" element={<TemplateComp text="Results" />} />
          </Routes>
        </HashRouter>
      </DataProvider>
    </div>
  );
}
