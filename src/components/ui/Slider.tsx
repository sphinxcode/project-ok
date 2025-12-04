'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SliderPosition } from '@/types';

interface SliderProps {
  value: SliderPosition | null;
  onChange: (value: SliderPosition) => void;
  labelA?: string;
  labelB?: string;
}

export default function Slider({ value, onChange, labelA = 'Strongly A', labelB = 'Strongly B' }: SliderProps) {
  const positions: { value: SliderPosition; label: string }[] = [
    { value: 1, label: 'Strongly A' },
    { value: 2, label: 'Slightly A' },
    { value: 3, label: 'Slightly B' },
    { value: 4, label: 'Strongly B' },
  ];

  return (
    <div className="w-full py-4">
      {/* Slider track */}
      <div className="relative">
        {/* Track line */}
        <div
          className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-medium)'
          }}
        />

        {/* Active track line - fills from center */}
        {value && (
          <motion.div
            className="absolute top-1/2 h-1 bg-gold -translate-y-1/2 rounded-full"
            initial={{ width: 0 }}
            animate={{
              left: value <= 2 ? `${((value - 1) / 3) * 100}%` : '50%',
              width: value <= 2
                ? `${(2.5 - value) / 3 * 100}%`
                : `${(value - 2.5) / 3 * 100}%`
            }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Points */}
        <div className="relative flex justify-between">
          {positions.map((pos) => (
            <button
              key={pos.value}
              onClick={() => onChange(pos.value)}
              className="relative group"
            >
              <motion.div
                className="w-5 h-5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: value === pos.value ? 'var(--gold)' : 'var(--bg-primary)',
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                  borderColor: value === pos.value ? 'var(--gold)' : 'var(--border-medium)',
                  transform: value === pos.value ? 'scale(1.25)' : 'scale(1)',
                  boxShadow: value === pos.value
                    ? '0 2px 8px rgba(201, 169, 98, 0.4)'
                    : '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                whileHover={{ scale: value === pos.value ? 1.25 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              />

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{pos.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-10 text-sm" style={{ color: 'var(--text-tertiary)' }}>
        <span>{labelA}</span>
        <span>{labelB}</span>
      </div>
    </div>
  );
}
