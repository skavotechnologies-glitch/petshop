import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import WhatsAppButton from './components/WhatsAppButton';
import Toast from './components/Toast';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import BookingPage from './pages/BookingPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <CustomCursor />
        <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
          {/* Navigation */}
          <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

          {/* Routes */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          {/* Global Components */}
          <Footer />
          <CartDrawer />
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          <WhatsAppButton />
          <Toast />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}
