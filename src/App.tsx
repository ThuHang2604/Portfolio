import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CVPrint from "./pages/CVPrint";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();
  const isCvPage = location.pathname === "/cv";

  return (
    <div className="app bg-slate-950 text-white min-h-screen flex flex-col">
      {!isCvPage && <Navbar />}

      <main className="main-content flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CVPrint />} />
        </Routes>
      </main>

      {!isCvPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;