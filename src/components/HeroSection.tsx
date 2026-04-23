import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/* ──────────────────────────────────────────────
   Product Scene — Packets inside the open box.
   ────────────────────────────────────────────── */

function ProductScene({ scrollYProgress }: { scrollYProgress: any }) {
  // Scroll parallax — packets drift upward and fan out as user scrolls
  const boxY   = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const boxScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const pkt1Y  = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const pkt1X  = useTransform(scrollYProgress, [0, 0.5], [0, -30]); // Drift left

  const pkt2Y  = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const pkt2Scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]); // Slightly grow center

  const pkt3Y  = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const pkt3X  = useTransform(scrollYProgress, [0, 0.5], [0, 40]); // Drift right
  
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.1]);

  return (
    <motion.div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1448 / 1086',
        opacity: sceneOpacity,
        y: boxY,
        scale: boxScale,
        filter: 'drop-shadow(0 30px 60px rgba(255,200,0,0.35))',
      }}
    >
      {/* Continuous gentle floating animation */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      >
        {/* ── Open Box (Base Layer) ── */}
        <motion.img
          src="/product/mbox.png"
          alt="야루다 박스"
          whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 3,
            // Box is interactive too, giving a subtle pop
          }}
        />

        {/* ── Packets Wrapper (Clipped to sit inside box) ── */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 4,
            pointerEvents: 'none', // Let hover pass to the box through empty space
            clipPath: 'polygon(3.7% -40.0%, 109.3% -40.0%, 71.9% 40.9%, 24.0% 32.6%)',
          }}
        >
          {/* First (Left) — behind the others */}
          <motion.img
            src="/product/first.png"
            alt="야루다 젤리 패킷"
            whileHover={{ y: -35, rotate: 12, scale: 1.08, transition: { type: 'spring', stiffness: 350, damping: 15 } }}
            style={{
              position: 'absolute',
              width: '67%',
              bottom: '37.5%',
              left: '26.9%',
              rotate: 19,
              y: pkt1Y,
              x: pkt1X,
              cursor: 'pointer',
              zIndex: 1,
              pointerEvents: 'auto',
              filter: 'drop-shadow(0 15px 25px rgba(255,200,0,0.3))',
            }}
          />

          {/* Middle — center, tallest */}
          <motion.img
            src="/product/middle.png"
            alt="야루다 젤리 패킷"
            whileHover={{ y: -30, scale: 1.1, rotate: -2, transition: { type: 'spring', stiffness: 350, damping: 15 } }}
            style={{
              position: 'absolute',
              width: '67%',
              bottom: '41.0%',
              left: '20.0%',
              y: pkt2Y,
              scale: pkt2Scale,
              cursor: 'pointer',
              zIndex: 2,
              pointerEvents: 'auto',
              filter: 'drop-shadow(0 15px 25px rgba(255,200,0,0.3))',
            }}
          />

          {/* Third (Right + Jelly) — in front */}
          <motion.img
            src="/product/third.png"
            alt="야루다 젤리 패킷 + 젤리"
            whileHover={{ y: -45, rotate: -8, scale: 1.1, transition: { type: 'spring', stiffness: 350, damping: 15 } }}
            style={{
              position: 'absolute',
              width: '80%',
              bottom: '34.3%',
              right: '17.0%',
              rotate: -17,
              y: pkt3Y,
              x: pkt3X,
              cursor: 'pointer',
              zIndex: 3,
              pointerEvents: 'auto',
              filter: 'drop-shadow(-10px 20px 30px rgba(255,200,0,0.35))',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────────── */

export default function HeroSection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Mouse → 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 30, stiffness: 100 });
  const sy = useSpring(my, { damping: 30, stiffness: 100 });
  const rotX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  const onMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        background:
          'radial-gradient(circle at 70% 35%, rgba(135,206,250,0.12), transparent 50%), radial-gradient(circle at 20% 80%, rgba(249,115,22,0.04), transparent 40%)',
      }}
    >
      {/* ── 3D Product Scene (right half) ── */}
      <div
        style={{
          position: 'absolute',
          right: '8%',
          top: '58%',
          transform: 'translateY(-50%)',
          width: '55%',
          maxWidth: '780px',
          zIndex: 0,
          perspective: '1200px',
        }}
      >
        <motion.div style={{ width: '100%', height: '100%', rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}>
          <ProductScene scrollYProgress={scrollYProgress} />
        </motion.div>
      </div>

      {/* ── Text (left half) ── */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '650px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h1
              style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              불타는 금요일,
              <br />
              <span className="text-gradient">야루다</span>와 함께 완벽한
              <br />
              토요일 아침을.
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '500px' }}>
              개인의 음주 습관, 주량, 선호하는 맛에 맞춰 배송되는 프리미엄 숙취해소제 구독 서비스. 지금 바로 내 몸에 맞는 조합을 찾아보세요.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/subscribe')} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                맞춤 구독 시작하기
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('subscription-info');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="btn btn-outline"
                style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
              >
                제품 자세히 보기
              </button>
            </div>

            {/* Social proof */}
            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--border)',
                      border: '2px solid white',
                      marginLeft: i !== 1 ? '-12px' : '0',
                      backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                      backgroundSize: 'cover',
                    }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', color: '#fbbf24', gap: '2px' }}>
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                  5,000명 이상의 유학생이 선택한 야루다
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
