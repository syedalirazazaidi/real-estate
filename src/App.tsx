import Home from "./pages/home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
interface IRoute {
  path?: string;
}
const App: React.FC<IRoute> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
