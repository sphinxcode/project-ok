'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAssessmentStore } from '@/hooks/useAssessment';

export default function EmailCapturePage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { isComplete, result, setEmail: saveEmail } = useAssessmentStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isComplete) {
      router.push('/assessment');
    }
  }, [mounted, isComplete, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !result) return;

    setIsSubmitting(true);
    
    // Save email to store
    saveEmail(email);
    
    // Here you would typically send to your backend
    // For now, we'll just redirect to results
    
    // Simulate a brief delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Redirect to results page with the archetype code
    router.push(`/results/${result.code}`);
  };

  if (!mounted || !isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 glow-top-left pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md text-center relative z-10"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-gold flex items-center justify-center"
        >
          <svg
            className="w-10 h-10 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-serif mb-4"
        >
          Assessment Complete
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-text-muted text-lg mb-8"
        >
          Your orientation has been calculated.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <p className="text-text-light mb-4">
            Enter your email to unlock your full results:
          </p>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="input text-center"
            disabled={isSubmitting}
          />

          <button
            type="submit"
            disabled={!email || isSubmitting}
            className={`w-full btn-gold ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-purple-deep border-t-transparent rounded-full animate-spin" />
                Revealing...
              </span>
            ) : (
              'Reveal My Orientation →'
            )}
          </button>

          <p className="text-text-muted text-sm mt-4">
            Your email is used to save your results. No spam, ever.
          </p>
        </motion.form>
      </motion.div>
    </main>
  );
}
