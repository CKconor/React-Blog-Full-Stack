import Home from "./pages/Home";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App dark:bg-darkmode bg-lightmode">
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blogs />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
