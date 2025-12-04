'use client';

import { motion } from 'framer-motion';

interface SectionBreakProps {
  questionNumber: number;
  onContinue: () => void;
}

const tips = [
  {
    title: "STYLE",
    subtitle: "of integration process",
    quote: "How you naturally structure your work and process information",
    description: "Some people thrive with consistent routines and sequential execution, while others need flexible rhythms that honor their natural productivity waves. Neither is better—what matters is designing your work life to match how you actually integrate and execute."
  },
  {
    title: "MODE",
    subtitle: "of activity",
    quote: "How you position yourself energetically in your environment",
    description: "Your energy works differently depending on your positioning. Some people recharge through visible engagement and active collaboration, while others need protected boundaries and peripheral observation to maintain their power. Honor your natural positioning."
  },
  {
    title: "PATTERN",
    subtitle: "of focus",
    quote: "How you naturally perceive and process reality",
    description: "Your mind either concentrates on specific targets with deep precision, or expands to see systemic patterns and interconnections. Both approaches reveal truth—targeted focus catches details others miss, while holistic awareness sees relationships others overlook."
  },
  {
    title: "DIRECTION",
    subtitle: "of impact",
    quote: "What drives your decisions and actions forward",
    description: "Some people are fueled by predetermined goals and strategic planning, while others trust emergent direction and respond to what life reveals. Your motivation style shapes everything—from how you set objectives to how you measure success."
  },
  {
    title: "Your Unique Design",
    subtitle: "there is no better way",
    quote: "Understanding your natural patterns allows you to work WITH your design, not against it",
    description: "These four dimensions combine to create your cognitive orientation—your unique way of processing, positioning, perceiving, and pursuing. When you align your work and life with this design, everything becomes more sustainable."
  }
];

export default function SectionBreak({
  questionNumber,
  onContinue,
}: SectionBreakProps) {
  const tipIndex = Math.floor((questionNumber - 1) / 10) % tips.length;
  const currentTip = tips[tipIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-2xl mx-auto text-center py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
          <span className="text-3xl text-gold">◇</span>
        </div>

        <h2 className="text-3xl font-serif text-gold mb-2">{currentTip.title}</h2>
        <p className="text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--text-tertiary)' }}>
          {currentTip.subtitle}
        </p>
        <p className="text-xl italic mb-6" style={{ color: 'var(--text-primary)' }}>
          "{currentTip.quote}"
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto px-6 py-4 rounded-lg"
          style={{
            backgroundColor: 'var(--gold-bg-subtle)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <p style={{ color: 'var(--text-primary)' }}>
            {currentTip.description}
          </p>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={onContinue}
        className="btn-primary"
      >
        Continue →
      </motion.button>
    </motion.div>
  );
}
