// Maps between L/R format and Orientation Keys letter format
// L/R position: [Direction, Pattern, Style, Mode]
// Letter format: [I/A, T/H, S/F, C/P]

export function convertLRToLetters(lrCode: string): string {
  // LLLL -> ITSC, LRLL -> IHSC, etc.
  const mapping: Record<string, string> = {
    'L': ['I', 'T', 'S', 'C'],
    'R': ['A', 'H', 'F', 'P']
  };

  return lrCode.split('').map((char, index) => {
    return mapping[char][index];
  }).join('');
}

export function convertLettersToLR(letterCode: string): string {
  // ITSC -> LLLL, IHSC -> LRLL, etc.
  const reverseMapping: Record<string, string> = {
    'I': 'L', 'A': 'R',
    'T': 'L', 'H': 'R',
    'S': 'L', 'F': 'R',
    'C': 'L', 'P': 'R'
  };

  return letterCode.split('').map(char => reverseMapping[char]).join('');
}

// Full mapping of all 16 types
export const orientationKeysMapping: Record<string, { code: string; name: string; hdType: string }> = {
  // Pure Types
  'LLLL': { code: 'ITSC', name: 'The Architect', hdType: 'Type 1: "Shark" - Focused Mind, Always Active' },
  'RRRR': { code: 'AHFP', name: 'The Flow State', hdType: 'Type 16: "Alf" - No-Mindedness, Flow' },

  // Left-Dominant (3L-1R)
  'LLLR': { code: 'ITSP', name: 'The Strategic Flow', hdType: 'Type 4: "Panda" - Focused Mind, Flow' },
  'LLRL': { code: 'ITFC', name: 'The Strategic Adapter', hdType: 'Type 2: "Lion" - Focused Mind, Laid-back' },
  'LRLL': { code: 'IHSC', name: 'The Systems Visionary', hdType: 'Type 5: "Dog" - Universal Mind, Always Active' },
  'RLLL': { code: 'ATSC', name: 'The Active Practitioner', hdType: 'Type 3: "Dolphin" - Focused Mind, Meditative Activity' },

  // Balanced Types (2L-2R)
  'LLRR': { code: 'ITSF', name: 'The Focused Builder', hdType: 'Type 4 variant' },
  'RRLL': { code: 'AHSC', name: 'The Grounded Receiver', hdType: 'Type 13: "Bear" - No-Mindedness, Always Active' },
  'LRLR': { code: 'IHSP', name: 'The Witnessing Guide', hdType: 'Type 7: "Horse" - Universal Mind, Meditative' },
  'RLRL': { code: 'ATFC', name: 'The Dynamic Responder', hdType: 'Type 10: "Owl" - Relationship-Minded, Laid-back' },
  'LRRL': { code: 'IHFC', name: 'The Organic Architect', hdType: 'Type 6: "Cat" - Universal Mind, Laid-back' },
  'RLLR': { code: 'ATSP', name: 'The Quiet Catalyst', hdType: 'Type 9: "Bee" - Relationship-Minded, Always Active' },

  // Right-Dominant (1L-3R)
  'LRRR': { code: 'AHSP', name: 'The Flowing Observer', hdType: 'Type 8: "Rabbit" - Universal Mind, Flow' },
  'RLRR': { code: 'AHFC', name: 'The Adaptive Orchestrator', hdType: 'Type 14: "Octopus" - No-Mindedness, Laid-back' },
  'RRLR': { code: 'ITFP', name: 'The Precision Mystic', hdType: 'Type 15: "Cow" - No-Mindedness, Meditative' },
  'RRRL': { code: 'IHFP', name: 'The Cosmic Networker', hdType: 'Type 12: "Sheep" - Relationship-Minded, Flow' }
};
