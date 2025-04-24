import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Settings from "./pages/Settings";
import API_Docs from "./pages/API_Docs";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/api-docs" element={<API_Docs />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
