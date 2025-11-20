import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Calculator } from './pages/Calculator';
import { FAQ } from './pages/FAQ';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/calculadora" element={<Calculator />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;