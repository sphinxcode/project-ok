import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Question, QuestionResponse, SliderPosition, AssessmentResult } from '@/types';
import { questions, shuffleQuestions } from '@/lib/questions';
import { calculateResult } from '@/lib/scoring';

interface AssessmentStore {
  // State
  shuffledQuestions: Question[];
  responses: QuestionResponse[];
  currentIndex: number;
  isStarted: boolean;
  isComplete: boolean;
  result: AssessmentResult | null;
  email: string;
  
  // Actions
  startAssessment: () => void;
  answerQuestion: (position: SliderPosition) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  completeAssessment: () => void;
  setEmail: (email: string) => void;
  resetAssessment: () => void;
  
  // Computed
  getCurrentQuestion: () => Question | null;
  getProgress: () => { current: number; total: number; percentage: number };
  getCurrentResponse: () => QuestionResponse | undefined;
  getCompletedVariable: () => string | null;
}

export const useAssessmentStore = create<AssessmentStore>()(
  persist(
    (set, get) => ({
      // Initial state
      shuffledQuestions: [],
      responses: [],
      currentIndex: 0,
      isStarted: false,
      isComplete: false,
      result: null,
      email: '',

      // Actions
      startAssessment: () => {
        const shuffled = shuffleQuestions(questions);
        set({
          shuffledQuestions: shuffled,
          responses: [],
          currentIndex: 0,
          isStarted: true,
          isComplete: false,
          result: null,
          email: '',
        });
      },

      answerQuestion: (position: SliderPosition) => {
        const { shuffledQuestions, currentIndex, responses } = get();
        const question = shuffledQuestions[currentIndex];
        if (!question) return;

        const existingIndex = responses.findIndex(r => r.questionId === question.id);
        const newResponse: QuestionResponse = {
          questionId: question.id,
          position,
        };

        let newResponses: QuestionResponse[];
        if (existingIndex >= 0) {
          newResponses = [...responses];
          newResponses[existingIndex] = newResponse;
        } else {
          newResponses = [...responses, newResponse];
        }

        set({ responses: newResponses });
      },

      goToNext: () => {
        const { currentIndex, shuffledQuestions } = get();
        if (currentIndex < shuffledQuestions.length - 1) {
          set({ currentIndex: currentIndex + 1 });
        }
      },

      goToPrevious: () => {
        const { currentIndex } = get();
        if (currentIndex > 0) {
          set({ currentIndex: currentIndex - 1 });
        }
      },

      completeAssessment: () => {
        const { responses } = get();
        const result = calculateResult(responses);
        set({ isComplete: true, result });
      },

      setEmail: (email: string) => {
        set({ email });
      },

      resetAssessment: () => {
        set({
          shuffledQuestions: [],
          responses: [],
          currentIndex: 0,
          isStarted: false,
          isComplete: false,
          result: null,
          email: '',
        });
      },

      // Computed getters
      getCurrentQuestion: () => {
        const { shuffledQuestions, currentIndex } = get();
        return shuffledQuestions[currentIndex] || null;
      },

      getProgress: () => {
        const { currentIndex, shuffledQuestions } = get();
        const total = shuffledQuestions.length;
        const current = currentIndex + 1;
        const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
        return { current, total, percentage };
      },

      getCurrentResponse: () => {
        const { shuffledQuestions, currentIndex, responses } = get();
        const question = shuffledQuestions[currentIndex];
        if (!question) return undefined;
        return responses.find(r => r.questionId === question.id);
      },

      getCompletedVariable: () => {
        const { responses, currentIndex } = get();
        // Check if we just completed a variable section (every 11 questions for main variables)
        const answeredCount = responses.length;
        
        // Count responses per variable
        const determinationCount = responses.filter(r => r.questionId >= 1 && r.questionId <= 11).length;
        const environmentCount = responses.filter(r => r.questionId >= 12 && r.questionId <= 22).length;
        const perspectiveCount = responses.filter(r => r.questionId >= 23 && r.questionId <= 33).length;
        const motivationCount = responses.filter(r => r.questionId >= 34 && r.questionId <= 44).length;
        
        // Check which variable was just completed (exactly 11 answers)
        if (determinationCount === 11 && answeredCount % 11 === 0) return 'determination';
        if (environmentCount === 11 && answeredCount % 11 === 0) return 'environment';
        if (perspectiveCount === 11 && answeredCount % 11 === 0) return 'perspective';
        if (motivationCount === 11 && answeredCount % 11 === 0) return 'motivation';
        
        return null;
      },
    }),
    {
      name: 'orientation-keys-assessment',
      partialize: (state) => ({
        shuffledQuestions: state.shuffledQuestions,
        responses: state.responses,
        currentIndex: state.currentIndex,
        isStarted: state.isStarted,
        isComplete: state.isComplete,
        result: state.result,
        email: state.email,
      }),
    }
  )
);
