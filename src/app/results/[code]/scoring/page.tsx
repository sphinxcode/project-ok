'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAssessmentStore } from '@/hooks/useAssessment';
import { calculateDimensionScores } from '@/lib/scoring';
import { orientationKeysMapping } from '@/lib/codeMapping';

type DimensionKey = 'determination' | 'environment' | 'perspective' | 'motivation';

const dimensionInfo: Record<DimensionKey, { name: string; subtitle: string; range: [number, number]; leftLabel: string; rightLabel: string }> = {
  determination: {
    name: 'STYLE',
    subtitle: 'of integration process',
    range: [1, 11],
    leftLabel: 'Structured',
    rightLabel: 'Fluid'
  },
  environment: {
    name: 'MODE',
    subtitle: 'of activity',
    range: [12, 22],
    leftLabel: 'Central',
    rightLabel: 'Peripheral'
  },
  perspective: {
    name: 'PATTERN',
    subtitle: 'of focus',
    range: [23, 33],
    leftLabel: 'Targeted',
    rightLabel: 'Holistic'
  },
  motivation: {
    name: 'DIRECTION',
    subtitle: 'of impact',
    range: [34, 44],
    leftLabel: 'Intentional',
    rightLabel: 'Adaptive'
  }
};

export default function ScoringPage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { responses, shuffledQuestions } = useAssessmentStore();

  const code = params.code as string;
  const typeInfo = orientationKeysMapping[code.toUpperCase()];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!responses || responses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">No Assessment Data</h1>
          <p className="text-text-muted mb-8">Please complete the assessment first.</p>
          <button onClick={() => router.push('/')} className="btn-primary">
            Take Assessment
          </button>
        </div>
      </div>
    );
  }

  const dimensionScores = calculateDimensionScores(responses);

  // Get responses for each dimension
  const getDimensionResponses = (key: DimensionKey) => {
    const [start, end] = dimensionInfo[key].range;
    return responses.filter(r => r.questionId >= start && r.questionId <= end);
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <button
            onClick={() => router.push(`/results/${code}`)}
            className="text-gold hover:text-gold/80 mb-4 inline-flex items-center gap-2"
          >
            ← Back to Results
          </button>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Scoring Breakdown</h1>
          <p className="text-xl text-gold mb-2">{typeInfo?.name}</p>
          <p className="text-lg" style={{ color: 'var(--text-tertiary)' }}>
            Your result: <span className="text-gold font-semibold">{typeInfo?.code}</span>
          </p>
        </motion.div>

        {/* How Scoring Works */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-serif text-gold mb-4">How Scoring Works</h2>
          <div className="space-y-3" style={{ color: 'var(--text-primary)' }}>
            <p>Your orientation code is determined by your responses across 44 questions, divided into 4 dimensions of 11 questions each.</p>
            <p className="font-semibold">Scoring Logic:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>Questions are scored on a 4-point scale (Strongly A, Slightly A, Slightly B, Strongly B)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span><strong>Positions 1-2</strong> count as <strong>Left</strong> (Structured/Central/Targeted/Intentional)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span><strong>Positions 3-4</strong> count as <strong>Right</strong> (Fluid/Peripheral/Holistic/Adaptive)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>For each dimension: If you have <strong>6 or more Left responses</strong>, you're scored as Left for that dimension</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>If you have <strong>5 or fewer Left responses</strong>, you're scored as Right for that dimension</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Dimension Breakdown */}
        <div className="space-y-6">
          {(Object.keys(dimensionInfo) as DimensionKey[]).map((key, index) => {
            const info = dimensionInfo[key];
            const score = dimensionScores[key];
            const dimensionResponses = getDimensionResponses(key);
            const finalOrientation = score.left >= 6 ? 'L' : 'R';
            const finalLabel = finalOrientation === 'L' ? info.leftLabel : info.rightLabel;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-serif text-gold">{info.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{info.subtitle}</p>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      Questions {info.range[0]}-{info.range[1]}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-serif text-gold mb-1">{finalLabel}</div>
                    <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      ({finalOrientation})
                    </div>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className={`p-4 rounded-lg border ${finalOrientation === 'L' ? 'border-gold bg-gold/10' : 'border-gold/20'}`}>
                    <div className="text-sm uppercase tracking-wide mb-1" style={{ color: 'var(--text-tertiary)' }}>
                      Left ({info.leftLabel})
                    </div>
                    <div className="text-3xl font-serif text-gold">{score.left}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                      out of 11 questions
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg border ${finalOrientation === 'R' ? 'border-gold bg-gold/10' : 'border-gold/20'}`}>
                    <div className="text-sm uppercase tracking-wide mb-1" style={{ color: 'var(--text-tertiary)' }}>
                      Right ({info.rightLabel})
                    </div>
                    <div className="text-3xl font-serif text-gold">{score.right}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                      out of 11 questions
                    </div>
                  </div>
                </div>

                {/* Visual representation of responses */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Your Responses:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dimensionResponses.map((response) => (
                      <div
                        key={response.questionId}
                        className={`px-3 py-1 rounded text-xs font-medium ${
                          response.position <= 2
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        Q{response.questionId}: {response.position <= 2 ? 'Left' : 'Right'} ({response.position})
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Code Explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="card mt-8 border-gold/30"
        >
          <h2 className="text-2xl font-serif text-gold mb-4">Your Final Code</h2>
          <div className="space-y-4" style={{ color: 'var(--text-primary)' }}>
            <p>Your responses across all four dimensions combine to create your unique orientation code:</p>

            <div className="grid md:grid-cols-4 gap-4">
              {/* DIRECTION (Motivation) - Position 1: I/A */}
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--gold-bg-subtle)', border: '1px solid var(--border-subtle)' }}>
                <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionInfo.motivation.name}
                </div>
                <div className="text-3xl font-serif text-gold mb-1">
                  {dimensionScores.motivation.left >= 6 ? 'I' : 'A'}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionScores.motivation.left >= 6 ? dimensionInfo.motivation.leftLabel : dimensionInfo.motivation.rightLabel}
                </div>
              </div>

              {/* PATTERN (Perspective) - Position 2: T/H */}
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--gold-bg-subtle)', border: '1px solid var(--border-subtle)' }}>
                <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionInfo.perspective.name}
                </div>
                <div className="text-3xl font-serif text-gold mb-1">
                  {dimensionScores.perspective.left >= 6 ? 'T' : 'H'}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionScores.perspective.left >= 6 ? dimensionInfo.perspective.leftLabel : dimensionInfo.perspective.rightLabel}
                </div>
              </div>

              {/* STYLE (Determination) - Position 3: S/F */}
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--gold-bg-subtle)', border: '1px solid var(--border-subtle)' }}>
                <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionInfo.determination.name}
                </div>
                <div className="text-3xl font-serif text-gold mb-1">
                  {dimensionScores.determination.left >= 6 ? 'S' : 'F'}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionScores.determination.left >= 6 ? dimensionInfo.determination.leftLabel : dimensionInfo.determination.rightLabel}
                </div>
              </div>

              {/* MODE (Environment) - Position 4: C/P */}
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--gold-bg-subtle)', border: '1px solid var(--border-subtle)' }}>
                <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionInfo.environment.name}
                </div>
                <div className="text-3xl font-serif text-gold mb-1">
                  {dimensionScores.environment.left >= 6 ? 'C' : 'P'}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {dimensionScores.environment.left >= 6 ? dimensionInfo.environment.leftLabel : dimensionInfo.environment.rightLabel}
                </div>
              </div>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-gold" style={{ backgroundColor: 'var(--gold-bg-hover)' }}>
              <p className="text-sm uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>
                Your Orientation Code
              </p>
              <p className="text-5xl font-serif text-gold mb-2">
                {typeInfo?.code}
              </p>
              <p className="text-xl" style={{ color: 'var(--text-primary)' }}>
                {typeInfo?.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push(`/results/${code}`)}
            className="btn-primary"
          >
            ← Back to Full Results
          </button>
        </div>
      </div>
    </main>
  );
}
