import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/hello" element={<IssueList />}></Route>
        <Route path="/" element={<IssueDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
