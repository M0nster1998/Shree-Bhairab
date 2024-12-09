import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Media from './components/Media';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Media />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;