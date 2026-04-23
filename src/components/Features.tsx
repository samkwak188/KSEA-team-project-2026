
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Droplets, HeartPulse } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  const features = [
    {
      icon: <Zap size={32} color="var(--primary)" />,
      title: '빠른 흡수와 회복',
      desc: '체질에 맞는 제형으로 다음 날 아침을 상쾌하게 시작하세요.',
      color: 'rgba(249, 115, 22, 0.1)'
    },
    {
      icon: <ShieldCheck size={32} color="var(--secondary)" />,
      title: '검증된 천연 성분',
      desc: '간 보호와 알코올 분해에 탁월한 프리미엄 성분만 엄선하여 담았습니다.',
      color: 'rgba(16, 185, 129, 0.1)'
    },
    {
      icon: <HeartPulse size={32} color="var(--accent)" />,
      title: '증상별 맞춤 케어',
      desc: '두통, 메스꺼움, 오한 등 당신의 숙취 증상에 가장 효과적인 조합을 추천합니다.',
      color: 'rgba(236, 72, 153, 0.1)'
    },
    {
      icon: <Droplets size={32} color="#3b82f6" />,
      title: '놀라운 맛의 경험',
      desc: '납작 복숭아, 샤인머스켓, 그린애플 등 거부감 없는 맛있는 숙취해소제입니다.',
      color: 'rgba(59, 130, 246, 0.1)'
    }
  ];

  return (
    <section id="features" className="section-padding" style={{ background: 'white', minHeight: 'calc(100vh - 90px)', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}
          >
            왜 <span className="text-gradient">야루다</span>인가요?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}
          >
            기존의 획일화된 숙취해소제와 다릅니다. 야루다는 오직 당신의 음주 패턴에 맞춘 솔루션을 제공합니다.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}
        >
          {features.map((feat, idx) => (
            <motion.div key={idx} variants={item} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{
                background: feat.color,
                padding: '1rem',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1.5rem'
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{feat.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
