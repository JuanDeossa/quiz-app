import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TemplateComp } from "./components/TemplateComp/TemplateComp";
import { HomePage } from "./pages/HomePage/HomePage";

export function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<TemplateComp text="Not found"/>} />
          <Route path="/question" element={<TemplateComp text="Question"/>} />
          <Route path="results" element={<TemplateComp text="Results"/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}
