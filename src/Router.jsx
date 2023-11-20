import { Routes, Route } from "react-router-dom";
import App from "./App";
import GenerateReadme from "./pages/generateReadme/GenerateReadme"
import Error from "./pages/error/Error"

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/GenerateReadme" element={<GenerateReadme/>} />
      <Route exact path="/Error" element={<Error/>}/>
    </Routes>
  );
};

export default AppRouter;
