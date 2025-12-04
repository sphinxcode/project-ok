'use client';

import { useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, SliderPosition } from '@/types';
import Slider from '@/components/ui/Slider';

interface QuestionCardProps {
  question: Question;
  value: SliderPosition | null;
  onChange: (value: SliderPosition) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoBack: boolean;
  isLast: boolean;
}

export default function QuestionCard({
  question,
  value,
  onChange,
  onNext,
  onPrevious,
  canGoBack,
  isLast,
}: QuestionCardProps) {
  // Randomize A/B position based on question ID (consistent per question)
  const isFlipped = useMemo(() => {
    // Use question ID as seed for consistent randomization
    return question.id % 2 === 0;
  }, [question.id]);

  // Get the displayed statements (potentially flipped)
  const displayStatementA = isFlipped ? question.statementB : question.statementA;
  const displayStatementB = isFlipped ? question.statementA : question.statementB;

  // Convert stored value to display value (invert if flipped)
  const displayValue = useMemo(() => {
    if (value === null) return null;
    if (!isFlipped) return value;
    // Invert: 1->4, 2->3, 3->2, 4->1
    return (5 - value) as SliderPosition;
  }, [value, isFlipped]);

  // Handle change - convert display value back to stored value
  const handleChange = (displayVal: SliderPosition) => {
    if (!isFlipped) {
      onChange(displayVal);
    } else {
      // Invert back: 1->4, 2->3, 3->2, 4->1
      onChange((5 - displayVal) as SliderPosition);
    }
  };

  // Auto-advance to next question after selection
  const autoAdvanceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (autoAdvanceTimeout.current) {
      clearTimeout(autoAdvanceTimeout.current);
    }

    // If a value is selected, auto-advance after a delay
    if (value !== null) {
      autoAdvanceTimeout.current = setTimeout(() => {
        onNext();
      }, 600); // 600ms delay to show selection
    }

    // Cleanup timeout on unmount or value change
    return () => {
      if (autoAdvanceTimeout.current) {
        clearTimeout(autoAdvanceTimeout.current);
      }
    };
  }, [value, onNext]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl mx-auto"
      >
        {/* Statement A */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-6 md:p-8 rounded-lg border transition-all duration-300 mb-6 ${
            displayValue !== null && displayValue <= 2
              ? 'border-gold'
              : 'border-gold/20'
          }`}
          style={{
            backgroundColor: displayValue !== null && displayValue <= 2
              ? 'var(--gold-bg-hover)'
              : 'var(--gold-bg-subtle)'
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-gold font-serif text-2xl font-medium">A</span>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {displayStatementA}
            </p>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 md:px-8 mb-6"
        >
          <Slider
            value={displayValue}
            onChange={handleChange}
            labelA="Strongly A"
            labelB="Strongly B"
          />
        </motion.div>

        {/* Statement B */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`p-6 md:p-8 rounded-lg border transition-all duration-300 mb-8 ${
            displayValue !== null && displayValue >= 3
              ? 'border-gold'
              : 'border-gold/20'
          }`}
          style={{
            backgroundColor: displayValue !== null && displayValue >= 3
              ? 'var(--gold-bg-hover)'
              : 'var(--gold-bg-subtle)'
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-gold font-serif text-2xl font-medium">B</span>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {displayStatementB}
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center"
        >
          <button
            onClick={onPrevious}
            disabled={!canGoBack}
            className="px-6 py-3 text-sm uppercase tracking-wide transition-all duration-200"
            style={{
              color: canGoBack ? 'var(--text-tertiary)' : 'var(--text-tertiary)',
              opacity: canGoBack ? 1 : 0.5,
              cursor: canGoBack ? 'pointer' : 'not-allowed'
            }}
          >
            ← Previous
          </button>

          <button
            onClick={onNext}
            disabled={displayValue === null}
            className="px-8 py-3 text-sm uppercase tracking-wide transition-all duration-200 border"
            style={{
              borderColor: displayValue !== null ? 'var(--gold)' : 'var(--border-subtle)',
              color: displayValue !== null ? 'var(--gold)' : 'var(--text-tertiary)',
              backgroundColor: displayValue !== null ? 'transparent' : 'transparent',
              cursor: displayValue !== null ? 'pointer' : 'not-allowed',
              opacity: displayValue !== null ? 1 : 0.5
            }}
          >
            {isLast ? 'Complete →' : 'Next Question →'}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
