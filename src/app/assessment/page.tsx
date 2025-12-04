'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAssessmentStore } from '@/hooks/useAssessment';
import ProgressBar from '@/components/ui/ProgressBar';
import QuestionCard from '@/components/assessment/QuestionCard';
import SectionBreak from '@/components/assessment/SectionBreak';
import { SliderPosition } from '@/types';

export default function AssessmentPage() {
  const router = useRouter();
  const [showSectionBreak, setShowSectionBreak] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const {
    isStarted,
    shuffledQuestions,
    currentIndex,
    responses,
    startAssessment,
    answerQuestion,
    goToNext,
    goToPrevious,
    completeAssessment,
    getCurrentQuestion,
    getProgress,
    getCurrentResponse,
  } = useAssessmentStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isStarted) {
      startAssessment();
    }
  }, [mounted, isStarted, startAssessment]);

  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();
  const currentResponse = getCurrentResponse();

  // Check if we should show a tip break (every 10 questions)
  const checkTipBreak = () => {
    const currentTotal = responses.length;
    // Show break every 10 questions, but not on the last question
    if (currentTotal % 10 === 0 && currentTotal < shuffledQuestions.length) {
      return true;
    }
    return false;
  };

  const handleAnswer = (position: SliderPosition) => {
    answerQuestion(position);
  };

  const handleNext = () => {
    if (!currentResponse) return;

    // Check if we should show a tip break
    if (checkTipBreak() && !showSectionBreak) {
      setShowSectionBreak(true);
      return;
    }

    // Check if this is the last question
    if (currentIndex === shuffledQuestions.length - 1) {
      completeAssessment();
      router.push('/results/capture');
      return;
    }

    goToNext();
  };

  const handleContinueFromBreak = () => {
    setShowSectionBreak(false);

    if (currentIndex === shuffledQuestions.length - 1) {
      completeAssessment();
      router.push('/results/capture');
      return;
    }

    goToNext();
  };

  if (!mounted || !currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-muted">Preparing your assessment...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <ProgressBar
            current={progress.current}
            total={progress.total}
            percentage={progress.percentage}
          />
        </motion.div>

        {/* Content */}
        <div className="min-h-[60vh] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showSectionBreak ? (
              <SectionBreak
                key="section-break"
                questionNumber={responses.length}
                onContinue={handleContinueFromBreak}
              />
            ) : (
              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                value={currentResponse?.position || null}
                onChange={handleAnswer}
                onNext={handleNext}
                onPrevious={goToPrevious}
                canGoBack={currentIndex > 0}
                isLast={currentIndex === shuffledQuestions.length - 1}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
