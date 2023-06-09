import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GenerateReadme from "./pages/GenerateReadme"
const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/GenerateReadme" element={<GenerateReadme/>} />
    </Routes>
  );
};

export default AppRouter;
