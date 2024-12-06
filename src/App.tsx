import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home';
import { Portofolio } from './pages/Portfolio';
// import { Services } from './pages/Services';
// import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import ScrollTop from './components/ScrollTop';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;