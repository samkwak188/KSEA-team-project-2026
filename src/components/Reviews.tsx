
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "김수진",
    role: "유학생, NY",
    rating: 5,
    text: "매번 술 마시고 다음 날 너무 힘들었는데, 야루다 납작 복숭아 맛 젤리 먹고 나서는 아침 수업도 거뜬해요! 맛도 좋고 포장도 예뻐서 친구들한테 추천하고 있어요.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "박준호",
    role: "대학원생, CA",
    rating: 5,
    text: "구독 서비스라 너무 편합니다. 환 형태를 선호하는데 효과도 확실하고, 무엇보다 제 술자리에 맞춰서 배송 주기를 설정할 수 있는게 최고네요.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 3,
    name: "이지연",
    role: "직장인, TX",
    rating: 5,
    text: "숙취해소제가 이렇게 예쁠 수 있나요? 패키지도 마음에 들고 샤인머스켓 맛은 그냥 간식 같아서 먹기 좋아요. 다음 달 구독도 연장했습니다 ㅎㅎ",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 90px)', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: 'var(--accent)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>야루다와 함께한 생생한 후기</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              먼저 경험해본 고객님들의 솔직한 리뷰를 확인해보세요.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.8)'
              }}
            >
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'rgba(249,115,22,0.1)' }}>
                <Quote size={40} />
              </div>
              
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#fbbf24' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, flex: 1, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                "{review.text}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary-light)' }}
                />
                <div>
                  <h4 style={{ fontWeight: '700', fontSize: '1.1rem' }}>{review.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
