import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Package, RefreshCw } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const SYMPTOMS = ['두통', '메스꺼움', '오한', '몸살', '배고픔', '기타'];
const FLAVORS = ['납작 복숭아', '샤인머스켓', '망고', '그린애플', '자두'];
const ALCOHOL = ['맥주', '소주', '양주', '막걸리', '고량주', '전통주', '와인', '소맥'];
const FREQUENCY = ['한 달에 1번', '한 달에 2번', '한 달에 4번', '한 달 5회 이상', '10회 이상', '20회 이상', '거의 매일'];

export default function SubscriptionBuilder() {
  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState(SYMPTOMS[0]);
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [alcohol, setAlcohol] = useState(ALCOHOL[0]);
  const [freq, setFreq] = useState(FREQUENCY[0]);
  const [amount, setAmount] = useState('1병');

  const progress = ((step - 1) / 2) * 100;

  const nextStep = () => { if (step < 3) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>가장 자주 겪는 숙취 증상과 선호하는 맛, 주로 마시는 주종은 무엇인가요?</h3>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>주요 증상 (택 1)</label>
              <div className="options-grid">
                {SYMPTOMS.map(s => (
                  <div key={s} className={cn("option-card", symptom === s && "selected")} onClick={() => setSymptom(s)}>
                    {symptom === s ? <Check size={20} color="var(--primary)" /> : <div style={{width: 20, height: 20}}/>}
                    <span style={{ fontWeight: symptom === s ? '700' : '500' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>선호하는 맛 (Best: 납작 복숭아)</label>
              <div className="options-grid">
                {FLAVORS.map(f => (
                  <div key={f} className={cn("option-card", flavor === f && "selected")} onClick={() => setFlavor(f)}>
                    {flavor === f ? <Check size={20} color="var(--primary)" /> : <div style={{width: 20, height: 20}}/>}
                    <span style={{ fontWeight: flavor === f ? '700' : '500' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>주로 마시는 주종</label>
              <div className="options-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
                {ALCOHOL.map(a => (
                  <div key={a} className={cn("option-card", alcohol === a && "selected")} onClick={() => setAlcohol(a)}>
                    <span style={{ fontWeight: alcohol === a ? '700' : '500' }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>음주 빈도와 주량을 알려주시면 배송 주기를 맞춰드려요.</h3>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>한 달 음주 횟수 (구독 주기 결정)</label>
              <div className="options-grid">
                {FREQUENCY.map(f => (
                  <div key={f} className={cn("option-card", freq === f && "selected")} onClick={() => setFreq(f)}>
                    <span style={{ fontWeight: freq === f ? '700' : '500' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>1회 평균 주량</label>
              <input 
                type="text" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  border: '2px solid var(--border)',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s ease'
                }} 
                placeholder="예: 소주 2병, 맥주 3잔..."
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                <Check size={40} />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800' }}>드디어 찾았어요!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>당신을 위한 완벽한 야루다 조합</p>
            </div>
            
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), rgba(236,72,153,0.05))', border: '2px solid var(--primary-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>야루다 커스텀 박스 구성</span>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: '600' }}>매월 자동 배송</span>
              </div>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>케어 포커스:</span>
                  <span style={{ fontWeight: '600' }}>{symptom} 완화 & {alcohol} 분해 집중</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>타입 및 맛:</span>
                  <span style={{ fontWeight: '600' }}>젤리 (Jelly) - {flavor} 맛</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>배송 주기:</span>
                  <span style={{ fontWeight: '600' }}>월 {freq.includes('번') ? freq.replace(/\D/g, '') + '회' : '정기'} 배송 ({amount} 기준 세트)</span>
                </li>
              </ul>
              
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>월 구독 예상가</span>
                <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>$24.99 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>/ mo</span></span>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section id="builder" className="section-padding" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>나만의 숙취 케어 조합 만들기</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>몇 가지 질문에 답하고, 내 몸에 딱 맞는 패키지를 받아보세요.</p>
        </div>

        <div className="builder-grid">
          {/* Left: Form Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Step Indicator */}
            <div className="step-indicator">
              <div className="progress" style={{ width: `${progress}%` }} />
              {[1, 2, 3].map((s) => (
                <div key={s} className={cn("step-dot", step === s && "active", step > s && "completed")}>
                  {step > s ? <Check size={16} strokeWidth={3} /> : s}
                </div>
              ))}
            </div>

            {/* Dynamic Content */}
            <div style={{ flex: 1, minHeight: '350px' }}>
              <AnimatePresence mode="wait">
                <div key={step}>
                  {renderStepContent()}
                </div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              {step > 1 ? (
                <button className="btn btn-outline" onClick={prevStep}>이전</button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <button className="btn btn-primary" onClick={nextStep} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  다음 단계 <ChevronRight size={18} />
                </button>
              ) : (
                <button className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'var(--secondary)' }}>
                  <Package size={18} /> 지금 구독하기
                </button>
              )}
            </div>
          </div>

          {/* Right: Summary Sidebar (Visible only on desktop or large screens) */}
          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), rgba(236,72,153,0.05))', border: '1px solid var(--primary-light)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RefreshCw size={24} color="var(--primary)" /> 현재 조합 상태
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>증상 및 제형</p>
                <div style={{ fontSize: '1.125rem', fontWeight: '600' }}>{symptom} / 젤리 (Jelly)</div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.05)' }} />
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>맛 과 주종</p>
                <div style={{ fontSize: '1.125rem', fontWeight: '600' }}>{flavor} / {alcohol}</div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.05)' }} />
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>배송 주기</p>
                <div style={{ fontSize: '1.125rem', fontWeight: '600' }}>{freq} ({amount})</div>
              </div>
            </div>
            
            <div style={{ marginTop: 'auto', background: 'rgba(249,115,22,0.1)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.5rem' }}>첫 달 무료체험 이벤트 중!</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>미국 전역 무료 배송 🚚</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
