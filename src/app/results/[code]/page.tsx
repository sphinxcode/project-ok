'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAssessmentStore } from '@/hooks/useAssessment';
import { getArchetypeByCode } from '@/lib/archetypes';
import { getVariableLabel, getVariableDescription } from '@/lib/scoring';
import { Archetype, VariableCode, Orientation } from '@/types';

type TabId = 'overview' | 'life-areas' | 'growth-path';

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'life-areas', label: 'Life Areas' },
  { id: 'growth-path', label: 'Growth Path' },
];

export default function ResultsPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [mounted, setMounted] = useState(false);
  
  const { result, isComplete } = useAssessmentStore();
  
  const code = params.code as string;
  const archetype = getArchetypeByCode(code.toUpperCase());

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

  if (!archetype) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Archetype Not Found</h1>
          <p className="text-text-muted mb-8">The orientation code "{code}" is not valid.</p>
          <button onClick={() => router.push('/')} className="btn-primary">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const alignment = result?.alignment || 'Sustainable';

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">Your Orientation</p>
          
          {/* Icon placeholder */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
            <span className="text-4xl text-gold">◇</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-2">{archetype.name}</h1>
          <p className="text-2xl font-serif text-gold mb-4">{archetype.orientationCode}</p>
          <p className="text-lg italic max-w-xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            "{archetype.tagline}"
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-8 border-b border-gold/20"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && (
              <OverviewTab archetype={archetype} alignment={alignment} />
            )}
            {activeTab === 'life-areas' && (
              <LifeAreasTab archetype={archetype} />
            )}
            {activeTab === 'growth-path' && (
              <GrowthPathTab archetype={archetype} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gold/20 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="btn-primary">
            Download PDF Summary
          </button>
          <button className="btn-gold">
            Share Results →
          </button>
          <button
            onClick={() => router.push(`/results/${code}/scoring`)}
            className="px-6 py-3 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-200 text-sm uppercase tracking-wide"
          >
            Show How This Was Calculated
          </button>
        </motion.div>

        {/* Retake */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              useAssessmentStore.getState().resetAssessment();
              router.push('/');
            }}
            className="text-sm transition-colors"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            Take the assessment again
          </button>
        </div>
      </div>
    </main>
  );
}

function OverviewTab({ archetype, alignment }: { archetype: Archetype; alignment: string }) {
  const dimensions: { key: 'determination' | 'environment' | 'perspective' | 'motivation'; label: string; subtitle: string }[] = [
    { key: 'determination', label: 'STYLE', subtitle: 'of integration process' },
    { key: 'environment', label: 'MODE', subtitle: 'of activity' },
    { key: 'perspective', label: 'PATTERN', subtitle: 'of focus' },
    { key: 'motivation', label: 'DIRECTION', subtitle: 'of impact' },
  ];

  return (
    <div className="space-y-8">
      {/* Description */}
      <div className="card">
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
          {archetype.overview.description}
        </p>
      </div>

      {/* Four Dimensions */}
      <div>
        <h3 className="text-xl font-serif text-gold mb-4">Your Cognitive Orientation</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {dimensions.map((dim) => {
            const orientation = archetype.overview.dimensions[dim.key];
            return (
              <div key={dim.key} className="card">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-sm uppercase tracking-wide font-semibold block" style={{ color: 'var(--text-secondary)' }}>
                      {dim.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {dim.subtitle}
                    </span>
                  </div>
                  <span className="text-gold font-medium">
                    {orientation.orientation}
                  </span>
                </div>
                <p className="text-sm mt-2" style={{ color: 'var(--text-primary)' }}>
                  {orientation.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alignment Status */}
      <div className="card text-center">
        <h3 className="text-xl font-serif mb-2">Alignment Status</h3>
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded ${
          alignment === 'Sustainable' 
            ? 'bg-green-500/10 text-green-400' 
            : 'bg-amber-500/10 text-amber-400'
        }`}>
          {alignment === 'Sustainable' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )}
          <span className="font-medium">{alignment}</span>
        </div>
        <p className="text-sm mt-3" style={{ color: 'var(--text-tertiary)' }}>
          {alignment === 'Sustainable'
            ? 'Your current work style appears aligned with your natural patterns.'
            : 'You may be operating against your natural patterns. This assessment can help you realign.'}
        </p>
      </div>
    </div>
  );
}

function LifeAreasTab({ archetype }: { archetype: Archetype }) {
  return (
    <div className="space-y-8">
      {/* Work Style */}
      <div className="card">
        <h3 className="text-xl font-serif text-gold mb-4">Your Optimal Work Pattern</h3>
        <ul className="space-y-3">
          {archetype.lifeAreas.workStyle.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gold mt-1">•</span>
              <span style={{ color: 'var(--text-primary)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Environment Preferences */}
      <div className="card">
        <h3 className="text-xl font-serif text-gold mb-4">Where You Thrive</h3>
        <ul className="space-y-3">
          {archetype.lifeAreas.environmentPreferences.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gold mt-1">•</span>
              <span style={{ color: 'var(--text-primary)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decision Making */}
      <div className="card">
        <h3 className="text-xl font-serif text-gold mb-4">How You Operate Best</h3>
        <ul className="space-y-3">
          {archetype.lifeAreas.decisionMaking.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gold mt-1">•</span>
              <span style={{ color: 'var(--text-primary)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GrowthPathTab({ archetype }: { archetype: Archetype }) {
  return (
    <div className="space-y-8">
      {/* Challenges */}
      <div className="card border-amber-500/20">
        <h3 className="text-xl font-serif text-amber-400 mb-4">Watch Out For</h3>
        <ul className="space-y-3">
          {archetype.growthPath.challenges.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">!</span>
              <span style={{ color: 'var(--text-primary)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendations */}
      <div className="card border-green-500/20">
        <h3 className="text-xl font-serif text-green-400 mb-4">Your Next Steps</h3>
        <ul className="space-y-3">
          {archetype.growthPath.recommendations.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-green-400 mt-1">→</span>
              <span style={{ color: 'var(--text-primary)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
