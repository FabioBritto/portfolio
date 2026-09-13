import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./components/shared.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Blog />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
