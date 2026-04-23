import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0.5rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo — large and prominent */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="야루다" style={{ height: '140px', margin: '-30px 0', objectFit: 'contain' }} />
        </div>

        {/* Desktop Menu — bigger text and buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-menu">
          <button onClick={() => scrollToSection('features')} style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>효능 및 성분</button>
          <button onClick={() => scrollToSection('subscription-info')} style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>맞춤 구독</button>
          <button onClick={() => scrollToSection('reviews')} style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>리뷰</button>
          
          <button className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.85rem 1.8rem', fontSize: '1.05rem' }} onClick={() => navigate('/subscribe')}>
            <ShoppingBag size={20} />
            구독 시작하기
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
