import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Store from "./Pages/Store/Store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Store />} />
    </Routes>
  );
}

export default App;
