'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 py-16">
        {/* Background gradients */}
        <div className="absolute inset-0 glow-top-left pointer-events-none" />
        <div className="absolute inset-0 glow-bottom-right pointer-events-none" />
        
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="badge mb-8"
          >
            Cognitive Orientation Assessment
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6"
          >
            Discover Your Natural<br />
            <span className="text-gold italic">Work Orientation</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: 'var(--text-tertiary)' }}
          >
            A 50-question assessment that reveals your sustainable work patterns—so you can build a business aligned with how you actually think.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/assessment" className="btn-primary inline-block">
              Take the Assessment →
            </Link>
            <p className="text-sm mt-4" style={{ color: 'var(--text-tertiary)' }}>~12 minutes • No account required</p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-4" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="section-label">Why This Matters</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              You're Not Broken—<br />
              <span className="text-gold italic">You Might Just Be Misaligned</span>
            </h2>
            <p className="text-lg mb-12" style={{ color: 'var(--text-tertiary)' }}>
              Many entrepreneurs struggle not because they lack skills, but because they're forcing themselves into work patterns that contradict their natural cognitive processing style.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: 'Determination', desc: 'How you process information and fuel your work' },
              { title: 'Environment', desc: 'How you position yourself energetically in space' },
              { title: 'Perspective', desc: 'How you perceive patterns and process reality' },
              { title: 'Motivation', desc: 'What drives your decisions and mental processing' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card"
              >
                <h4 className="font-serif text-xl text-gold mb-2">{item.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="section-label">The Process</p>
            <h2 className="text-3xl md:text-5xl font-serif">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Answer 50 Questions',
                desc: 'Compare two statements using a simple slider—trust your first instinct.',
              },
              {
                step: '02',
                title: 'Get Your 4-Letter Code',
                desc: 'Discover which of 16 orientation types matches your natural patterns.',
              },
              {
                step: '03',
                title: 'Unlock Your Blueprint',
                desc: 'Receive personalized insights on work style, challenges, and growth path.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-serif text-gold/30 mb-4">{item.step}</div>
                <h4 className="font-serif text-2xl mb-3">{item.title}</h4>
                <p style={{ color: 'var(--text-tertiary)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              There Is No "Better" Orientation
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-tertiary)' }}>
              Left and Right are simply different cognitive strategies, each with unique strengths. The key is understanding your natural design and creating a business structure that honors it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 glow-top-left pointer-events-none" />
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8">
              Ready to Discover Your Orientation?
            </h2>
            <Link href="/assessment" className="btn-gold inline-block">
              Start the Assessment →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gold/10">
        <div className="container-main text-center">
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            © 2024 Orientation Keys — Designed for the modern entrepreneur
          </p>
        </div>
      </footer>
    </main>
  );
}
