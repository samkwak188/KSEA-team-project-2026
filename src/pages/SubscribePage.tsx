import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import SubscriptionBuilder from '../components/SubscriptionBuilder';

export default function SubscribePage() {
  const navigate = useNavigate();

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', display: 'flex', flexDirection: 'column' }}>
      {/* Mini Checkout Navbar */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        background: 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)' 
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: '70px' }}>
          <button 
            onClick={() => navigate(-1)} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--text-muted)' }}
          >
            <ChevronLeft size={20} />
            돌아가기
          </button>
          
          {/* Logo center */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="야루다" style={{ height: '50px', objectFit: 'contain' }} />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, paddingBottom: '4rem' }}>
        <SubscriptionBuilder />
      </main>
      
      {/* Light minimalist footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border)', background: 'white' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Yaruda USA. Secure Checkout.
        </p>
      </footer>
    </div>
  );
}
