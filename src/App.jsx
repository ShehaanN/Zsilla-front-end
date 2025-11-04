import { Routes, Route, Link } from "react-router";
import HomePage from "./pages/home.page";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
