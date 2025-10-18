import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";
import Results from "./pages/Results";
import Metrics from "./pages/Metrics";
import Methods from "./pages/Methods";
import Curves from "./pages/Curves";
import About from "./pages/About";
import "./styles/index.css";

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/results" element={<Results />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/curves" element={<Curves />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
