import RepositoryScreen from "./Pages/RepositoryScreen";
import LoginScreen from "./Pages/LoginScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<LoginScreen />} />{" "}
          <Route path="/repositories" element={<RepositoryScreen />} />{" "}
        </Routes>{" "}
      </Router>
    </>
  );
}

export default App;
