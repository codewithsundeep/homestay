import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Rooms />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
