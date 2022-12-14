import { HashRouter, Route, Routes } from "react-router-dom";
import { TemplateComp } from "./components/TemplateComp/TemplateComp";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfessorPage } from "./pages/ProfessorPage/ProfessorPage";
import { StudentConfigPage } from "./pages/StudentConfig/StudentConfigPage";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { DataProvider } from "./context/DataContext";
import { ModalProvider } from "./context/ModalContext";

export function App() {
  return (
    <div className="App">
      <DataProvider>
        <HashRouter>
          <ModalProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<TemplateComp text="Not found" />} />
              <Route path="/professor" element={<ProfessorPage />} />
              <Route path="/quizsettings" element={<StudentConfigPage />} />
              <Route path="/question" element={<QuestionPage />} />
              <Route path="results" element={<TemplateComp text="Results" />} />
            </Routes>
          </ModalProvider>
        </HashRouter>
      </DataProvider>
    </div>
  );
}
