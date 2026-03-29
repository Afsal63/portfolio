
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

export default function Home()  {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
 
        * { cursor: none !important; }
 
        :root {
          --bg: #080808;
          --text: #f5f5f5;
        }
 
        html {
          scroll-behavior: smooth;
        }
 
        body {
          background-color: #080808;
          color: #f5f5f5;
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
 
        .font-display {
          font-family: 'Syne', sans-serif;
        }
      `}</style>
 
      <div style={{ background: "#080808", color: "#f5f5f5", minHeight: "100vh" }}>
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}