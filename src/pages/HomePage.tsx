import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import SubscriptionInfo from '../components/SubscriptionInfo';
import Reviews from '../components/Reviews';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <SubscriptionInfo />
        <Reviews />
      </main>
      <footer style={{ background: '#ffffff', color: 'var(--text-main)', padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <img src="/logo.png" alt="야루다" style={{ height: '90px', objectFit: 'contain' }} />
          </div>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>숙취 해소의 새로운 기준</p>
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Yaruda USA. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
