import React from 'react';
import './styles/global.scss';
import Home from './pages/home'; 
import NavBar from './components/navbar'; 
import About from './pages/about';
import Parallax from './components/Parallax'; 
import Feature from './pages/feature'; // Importation de Feature.js
import Contact from './pages/contact'; // Importation de Contact.js
import Footer from './components/footer';

function App() {
  return (
    <>
      {/* Navbar visible tout le temps */}
      <NavBar />
      <main>
        {/* Home section */}
        <section id="home">
          <Home />
        </section>

        {/* About section */}
        <section id="about">
          <About />
        </section>

        {/* Parallax section */}
        <section id="parallax" className="parallax-wrapper">
          <Parallax />
        </section>

        {/* Contact section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer/>

    </>
  );
}

export default App;