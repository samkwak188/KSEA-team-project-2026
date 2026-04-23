import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Package, Truck, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STEPS = [
  {
    id: 'quiz',
    icon: <Sparkles size={24} />,
    title: "1. 1분 문진 완료",
    desc: "나의 주량, 선호하는 맛, 음주 습관을 알려주세요."
  },
  {
    id: 'box',
    icon: <Package size={24} />,
    title: "2. 커스텀 박스 조합",
    desc: "내 몸에 딱 맞는 성분과 맛으로 맞춤형 숙취해소제가 조합됩니다."
  },
  {
    id: 'delivery',
    icon: <Truck size={24} />,
    title: "3. 원하는 주기에 배송",
    desc: "술자리에 맞춰 떨어지지 않게 정기 배송해 드려요."
  }
];

export default function SubscriptionInfo() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="subscription-info" style={{ padding: '3rem 0', scrollMarginTop: '90px', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 90px)', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(249,115,22,0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: '700', marginBottom: '1rem' }}>
            <Star size={16} fill="currentColor" /> 맞춤형 정기 구독
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            나만을 위한 완벽한 <br />
            <span className="text-gradient">숙취 케어 루틴</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            더 이상 편의점을 헤맬 필요 없어요. 내 몸과 취향에 완벽하게 맞춘 야루다 박스가 집 앞으로 찾아갑니다.
          </p>
        </div>

        <div className="builder-grid" style={{ alignItems: 'center' }}>
          
          {/* Left Side: Interactive Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.id}
                onMouseEnter={() => setActiveStep(index)}
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  border: activeStep === index ? '2px solid var(--primary)' : '1px solid var(--border)',
                  background: activeStep === index ? 'var(--surface)' : 'rgba(255,255,255,0.4)',
                  boxShadow: activeStep === index ? 'var(--shadow-lg)' : 'none',
                  transform: activeStep === index ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    background: activeStep === index ? 'var(--primary)' : 'var(--surface-hover)', 
                    color: activeStep === index ? 'white' : 'var(--text-muted)',
                    width: '60px', height: '60px', borderRadius: 'var(--radius-lg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div style={{ marginTop: '2rem' }}>
              <button onClick={() => navigate('/subscribe')} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', width: '100%' }}>
                구독 시작해보기 <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '1rem', fontWeight: '500' }}>
                🎉 첫 달 무료 체험 + 미국 전역 무료 배송
              </p>
            </div>
          </div>

          {/* Right Side: Visual Demo UI */}
          <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Visual background blob */}
            <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(236,72,153,0.2))', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }} />
            
            {/* Interactive Box mockup overlay */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '400px' }}>
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div key="img1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem 1rem' }}>
                    {/* Bot question 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      style={{ alignSelf: 'flex-start', maxWidth: '80%', background: 'var(--surface)', border: '1px solid var(--border)', padding: '0.875rem 1.25rem', borderRadius: '1.25rem 1.25rem 1.25rem 0.25rem', fontSize: '0.95rem', color: 'var(--text-main)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      주로 어떤 숙취 증상이 힘드세요? 🤔
                    </motion.div>
                    {/* User answer 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      style={{ alignSelf: 'flex-end', maxWidth: '70%', background: 'var(--primary)', color: 'white', padding: '0.875rem 1.25rem', borderRadius: '1.25rem 1.25rem 0.25rem 1.25rem', fontSize: '0.95rem', fontWeight: '600' }}
                    >
                      두통이 제일 심해요 😵
                    </motion.div>
                    {/* Bot question 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      style={{ alignSelf: 'flex-start', maxWidth: '80%', background: 'var(--surface)', border: '1px solid var(--border)', padding: '0.875rem 1.25rem', borderRadius: '1.25rem 1.25rem 1.25rem 0.25rem', fontSize: '0.95rem', color: 'var(--text-main)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      선호하는 맛이 있으신가요? 🍑
                    </motion.div>
                    {/* User answer 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.2 }}
                      style={{ alignSelf: 'flex-end', maxWidth: '70%', background: 'var(--primary)', color: 'white', padding: '0.875rem 1.25rem', borderRadius: '1.25rem 1.25rem 0.25rem 1.25rem', fontSize: '0.95rem', fontWeight: '600' }}
                    >
                      납작 복숭아요!
                    </motion.div>
                    {/* Bot question 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.9 }}
                      style={{ alignSelf: 'flex-start', maxWidth: '80%', background: 'var(--surface)', border: '1px solid var(--border)', padding: '0.875rem 1.25rem', borderRadius: '1.25rem 1.25rem 1.25rem 0.25rem', fontSize: '0.95rem', color: 'var(--text-main)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      한 달에 몇 번 정도 드시나요? 🍻
                    </motion.div>
                    {/* User answer 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3.5 }}
                      style={{ alignSelf: 'flex-end', maxWidth: '70%', background: 'var(--primary)', color: 'white', padding: '0.875rem 1.25rem', borderRadius: '1.25rem 1.25rem 0.25rem 1.25rem', fontSize: '0.95rem', fontWeight: '600' }}
                    >
                      주 2회 정도요 🙌
                    </motion.div>
                  </motion.div>
                )}
                {activeStep === 1 && (
                  <motion.div key="img2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="card" style={{ padding: '2rem', border: '2px solid var(--primary)' }}>
                    <h4 style={{ fontWeight: '800', fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>나만의 맞춤 박스</h4>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ flex: 1, background: 'rgba(249,115,22,0.1)', padding: '1rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', fontWeight: '700' }}>젤리 타입</div>
                      <div style={{ flex: 1, background: 'rgba(236,72,153,0.1)', padding: '1rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', fontWeight: '700' }}>납작 복숭아 맛</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--text-main)', color: 'white', borderRadius: 'var(--radius-lg)' }}>
                      <div>
                        <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>월 구독</div>
                        <div style={{ fontWeight: '800', fontSize: '1.125rem' }}>총 30개 세트</div>
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>$24.99</div>
                    </div>
                  </motion.div>
                )}
                {activeStep === 2 && (
                  <motion.div key="img3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <div style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 1.5rem auto' }}>
                      <Truck size={48} />
                    </div>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>내일 도착 예정!</h4>
                    <p style={{ color: 'var(--text-muted)' }}>가장 바쁜 주말 전에 박스가 도착합니다. 안심하세요!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
