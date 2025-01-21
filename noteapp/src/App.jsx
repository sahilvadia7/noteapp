import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNotePage from "./components/AddNotePage";
import Profile from "./pages/Profile";
import DetailView from "./components/DetailView";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addNote" element={<AddNotePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail-view" element={<DetailView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
