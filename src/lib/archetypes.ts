import { Archetype, VariableCode } from '@/types';

export const archetypes: Record<VariableCode, Archetype> = {
  'LLLL': {
    code: 'LLLL',
    orientationCode: 'ITSC',
    name: 'The Architect',
    tagline: 'Building with intention, precision, and presence',
    icon: 'compass',
    overview: {
      description: "You are the master builder of sustainable systems. Your natural design combines structured processing with central positioning, targeted focus, and intentional drive. You thrive when you can plan thoroughly, execute methodically, and remain visibly engaged throughout the process.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process information sequentially, preferring consistency and thorough preparation.' },
        environment: { orientation: 'Central', description: 'You thrive in visible positions where you can engage actively with others.' },
        perspective: { orientation: 'Targeted', description: 'You focus deeply on specific goals and measurable outcomes.' },
        motivation: { orientation: 'Intentional', description: 'You are driven by predetermined goals and strategic planning.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Structured 90-minute deep work blocks with clear start and stop times',
        'Thorough preparation and research before beginning any project',
        'One major focus at a time—mastering before moving on',
        'Detailed systems and SOPs for repeated processes'
      ],
      environmentPreferences: [
        'Central positioning in active, energized environments',
        'Collaborative spaces where you can engage with others',
        'Peak hours when collective energy supports your focus',
        'Front-and-center visibility in your business presence'
      ],
      decisionMaking: [
        'Data-driven analysis with clear success metrics',
        'Advice from your carefully chosen inner circle',
        'Logical evaluation against predetermined criteria',
        'Strategic long-term planning with specific milestones'
      ]
    },
    growthPath: {
      challenges: [
        'Over-planning that delays action and momentum',
        'Rigidity when circumstances demand flexibility',
        'Burnout from constant visibility and engagement',
        'Difficulty adapting when plans need to change'
      ],
      recommendations: [
        'Build in buffer time between high-energy engagements',
        'Practice "good enough" launches—iterate after shipping',
        'Schedule intentional withdrawal periods for recovery',
        'Create contingency plans to make pivoting feel structured'
      ]
    }
  },

  'RRRR': {
    code: 'RRRR',
    orientationCode: 'AHFP',
    name: 'The Flow State',
    tagline: 'Riding currents others cannot see',
    icon: 'spiral',
    overview: {
      description: "You are the embodiment of adaptive intelligence. Your natural design combines fluid processing with peripheral positioning, holistic awareness, and receptive motivation. You thrive when you can respond to what emerges, trust your instincts, and maintain space for unexpected opportunities.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process information in waves, trusting what arrives in the moment.' },
        environment: { orientation: 'Peripheral', description: 'You thrive observing from the edges, maintaining your energetic boundaries.' },
        perspective: { orientation: 'Holistic', description: 'You see the whole picture, sensing patterns others miss.' },
        motivation: { orientation: 'Adaptive', description: 'You follow what feels aligned rather than predetermined plans.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Riding waves of productivity—working when inspired, resting when not',
        'Starting immediately and letting the full picture reveal itself',
        'Multiple projects cross-pollinating simultaneously',
        'Flexible schedules that respond to your natural energy'
      ],
      environmentPreferences: [
        'Contained spaces where you control the energy completely',
        'Off-hours work when collective energy is quiet',
        'Strategic observation before active engagement',
        'Privacy and space for your work to speak for itself'
      ],
      decisionMaking: [
        'Deep knowing that transcends logical analysis',
        'Synchronistic encounters that guide direction',
        'Following opportunities that create inexplicable excitement',
        'Trusting the timing of what naturally emerges'
      ]
    },
    growthPath: {
      challenges: [
        'Difficulty with rigid deadlines and external structure',
        'Others may perceive your process as disorganized',
        'Energy depletion in overly scheduled environments',
        'Struggle to articulate your non-linear methodology'
      ],
      recommendations: [
        'Create loose containers that honor your need for emergence',
        'Build relationships with those who value your unique process',
        'Protect your peripheral positioning fiercely',
        'Document your wins to build trust in your natural rhythm'
      ]
    }
  },

  'LLLR': {
    code: 'LLLR',
    orientationCode: 'ITSP',
    name: 'The Strategic Flow',
    tagline: 'Strategic foundation with adaptive ambition',
    icon: 'anchor-star',
    overview: {
      description: "You combine structured processing, central positioning, and targeted focus with an adaptive drive. You build methodically but remain open to where your efforts might lead. Your foundation is solid, but your vision stays fluid.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process information sequentially with consistency.' },
        environment: { orientation: 'Central', description: 'You thrive in visible, engaged positions.' },
        perspective: { orientation: 'Targeted', description: 'You focus deeply on specific outcomes.' },
        motivation: { orientation: 'Adaptive', description: 'Your goals emerge as you move forward.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Structured preparation with room for unexpected evolution',
        'Clear processes that allow for organic outcomes',
        'Deep focus on current priorities while staying curious',
        'Methodical execution with openness to surprise'
      ],
      environmentPreferences: [
        'Central, visible positions in your domain',
        'Active engagement with collaborative energy',
        'Structured spaces that still allow for spontaneity'
      ],
      decisionMaking: [
        'Solid analysis combined with intuitive guidance',
        'Strategic planning that embraces emerging opportunities',
        'Following excitement within structured frameworks'
      ]
    },
    growthPath: {
      challenges: [
        'Tension between your need for structure and adaptive goals',
        'Others may be confused by your dual approach',
        'Balancing methodical work with openness to change'
      ],
      recommendations: [
        'Create structured "exploration time" in your schedule',
        'Trust that your solid foundation supports your fluidity',
        'Communicate your hybrid approach clearly to collaborators'
      ]
    }
  },

  'LLRL': {
    code: 'LLRL',
    orientationCode: 'ITFC',
    name: 'The Strategic Adapter',
    tagline: 'Structured processing meets holistic vision',
    icon: 'network',
    overview: {
      description: "You combine structured processing and central positioning with holistic perspective and intentional drive. You see the big picture while building with precision. Your systems thinking is both expansive and methodical.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process with consistency and preparation.' },
        environment: { orientation: 'Central', description: 'You engage actively from visible positions.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the entire ecosystem.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Methodical building informed by big-picture awareness',
        'Structured processes that account for systemic dynamics',
        'Deep preparation combined with pattern recognition',
        'Sequential execution guided by holistic understanding'
      ],
      environmentPreferences: [
        'Central positions where you can observe the whole system',
        'Collaborative spaces that reveal interconnections',
        'Active engagement that informs your broader view'
      ],
      decisionMaking: [
        'Strategic analysis informed by systemic patterns',
        'Goal-driven choices that account for ripple effects',
        'Data combined with pattern recognition'
      ]
    },
    growthPath: {
      challenges: [
        'Analysis paralysis from seeing too many connections',
        'Difficulty narrowing focus when everything seems connected',
        'Tension between methodical execution and systemic awareness'
      ],
      recommendations: [
        'Use your holistic view to prioritize, not to expand',
        'Trust your structured approach to handle complexity',
        'Create frameworks that bridge detail and big picture'
      ]
    }
  },

  'LRLL': {
    code: 'LRLL',
    orientationCode: 'IHSC',
    name: 'The Systems Visionary',
    tagline: 'Precision from the periphery',
    icon: 'target-eye',
    overview: {
      description: "You combine structured processing with peripheral positioning, targeted focus, and intentional drive. You observe before engaging, plan before acting, and execute with precision from a protected position.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process sequentially with thorough preparation.' },
        environment: { orientation: 'Peripheral', description: 'You thrive observing from the edges, maintaining boundaries.' },
        perspective: { orientation: 'Targeted', description: 'You focus deeply on specific outcomes.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Thorough preparation from a protected workspace',
        'Deep focus with strong energetic boundaries',
        'Sequential mastery without external pressure',
        'Strategic execution timed to your readiness'
      ],
      environmentPreferences: [
        'Peripheral positions with clear observation angles',
        'Contained spaces where you control the energy',
        'Off-peak hours for deep work without interruption',
        'Privacy that allows your work to develop fully'
      ],
      decisionMaking: [
        'Careful analysis before any commitment',
        'Strategic evaluation from a observational position',
        'Measured engagement when timing is right'
      ]
    },
    growthPath: {
      challenges: [
        'May be perceived as distant or unengaged',
        'Missed opportunities from excessive observation',
        'Tension between strategic goals and peripheral preference'
      ],
      recommendations: [
        'Schedule strategic visibility moments that feel controlled',
        'Leverage your observation skills to time engagement perfectly',
        'Build systems that represent you while you stay protected'
      ]
    }
  },

  'RLLL': {
    code: 'RLLL',
    orientationCode: 'ATSC',
    name: 'The Active Practitioner',
    tagline: 'Flowing foundation with strategic intent',
    icon: 'wave-anchor',
    overview: {
      description: "You combine fluid processing with central positioning, targeted focus, and intentional drive. You process information in waves while maintaining visible engagement and driving toward specific goals.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process in waves, trusting what arrives in the moment.' },
        environment: { orientation: 'Central', description: 'You thrive in visible, engaged positions.' },
        perspective: { orientation: 'Targeted', description: 'You focus on specific outcomes.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Variable productivity rhythms within goal-oriented frameworks',
        'Immediate starts with targeted outcomes in mind',
        'Multiple inputs feeding focused objectives',
        'Flexible execution toward specific milestones'
      ],
      environmentPreferences: [
        'Central positions that allow for variable energy',
        'Active spaces with permission to flow',
        'Visibility combined with processing flexibility'
      ],
      decisionMaking: [
        'Intuitive processing directed at strategic goals',
        'Responsive analysis toward predetermined outcomes',
        'Flexible paths to fixed destinations'
      ]
    },
    growthPath: {
      challenges: [
        'Tension between fluid processing and strategic timelines',
        'Others may expect consistency you cannot provide',
        'Energy management in constantly engaged positions'
      ],
      recommendations: [
        'Communicate your variable rhythm to stakeholders',
        'Build buffer into strategic timelines for processing waves',
        'Create recovery rituals within your engaged lifestyle'
      ]
    }
  },

  'LLRR': {
    code: 'LLRR',
    orientationCode: 'ITSF',
    name: 'The Focused Builder',
    tagline: 'Structured body, receptive mind',
    icon: 'crystal-grid',
    overview: {
      description: "You combine structured processing and central positioning with holistic perspective and adaptive motivation. Your foundation is methodical and engaged, while your vision and drive remain fluid and receptive.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process with consistency and preparation.' },
        environment: { orientation: 'Central', description: 'You engage actively from visible positions.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the whole.' },
        motivation: { orientation: 'Adaptive', description: 'Your goals emerge organically.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Methodical processes informed by expansive awareness',
        'Structured execution guided by emerging opportunities',
        'Consistent preparation with room for what wants to unfold',
        'Sequential building toward fluid destinations'
      ],
      environmentPreferences: [
        'Central positioning supporting holistic observation',
        'Active engagement revealing systemic patterns',
        'Structured spaces that allow for emergence'
      ],
      decisionMaking: [
        'Methodical analysis combined with pattern sensing',
        'Strategic foundations supporting organic evolution',
        'Structured approach to unstructured goals'
      ]
    },
    growthPath: {
      challenges: [
        'Split between structured approach and fluid outcomes',
        'Difficulty explaining your hybrid methodology',
        'Balancing preparation with openness'
      ],
      recommendations: [
        'Trust that structure and emergence complement each other',
        'Create "structured spaciousness" in your processes',
        'Let your methodical approach serve your expansive vision'
      ]
    }
  },

  'RRLL': {
    code: 'RRLL',
    orientationCode: 'AHSC',
    name: 'The Grounded Receiver',
    tagline: 'Receptive body, strategic mind',
    icon: 'roots-star',
    overview: {
      description: "You combine fluid processing and peripheral positioning with targeted focus and intentional drive. Your body needs freedom and protection while your mind drives toward specific, strategic outcomes.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process in waves, trusting emergence.' },
        environment: { orientation: 'Peripheral', description: 'You thrive at the edges with strong boundaries.' },
        perspective: { orientation: 'Targeted', description: 'You focus on specific outcomes.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Variable rhythms directed at specific goals',
        'Protected spaces supporting targeted outcomes',
        'Intuitive processing within strategic frameworks',
        'Flowing execution toward fixed destinations'
      ],
      environmentPreferences: [
        'Peripheral positions supporting focused work',
        'Contained spaces for targeted deep work',
        'Observation-based engagement timed strategically'
      ],
      decisionMaking: [
        'Intuitive sensing combined with strategic analysis',
        'Protected processing directed at specific goals',
        'Flexible paths serving fixed objectives'
      ]
    },
    growthPath: {
      challenges: [
        'Tension between need for freedom and goal-driven focus',
        'Strategic timelines conflicting with processing rhythms',
        'Peripheral preference complicating goal pursuit'
      ],
      recommendations: [
        'Create protected containers for strategic work',
        'Trust your intuitive timing to serve your goals',
        'Build systems that pursue goals while you stay protected'
      ]
    }
  },

  'LRLR': {
    code: 'LRLR',
    orientationCode: 'IHSP',
    name: 'The Witnessing Guide',
    tagline: 'Alternating strategic and receptive currents',
    icon: 'yin-yang',
    overview: {
      description: "You alternate between structured and fluid modes across your dimensions. Structured processing with peripheral positioning combines with targeted focus and adaptive motivation. You dance between planning and emergence.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process with preparation and consistency.' },
        environment: { orientation: 'Peripheral', description: 'You thrive observing from protected positions.' },
        perspective: { orientation: 'Targeted', description: 'You focus on specific outcomes.' },
        motivation: { orientation: 'Adaptive', description: 'Your goals emerge as you move forward.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Methodical preparation from protected positions',
        'Targeted focus with openness to where it leads',
        'Consistent processes serving emergent goals',
        'Sequential work supporting organic outcomes'
      ],
      environmentPreferences: [
        'Peripheral observation supporting focused work',
        'Contained spaces allowing strategic depth',
        'Boundaries that enable targeted exploration'
      ],
      decisionMaking: [
        'Careful analysis open to unexpected directions',
        'Strategic evaluation serving adaptive goals',
        'Measured approach to unfolding opportunities'
      ]
    },
    growthPath: {
      challenges: [
        'Navigating between your structured and adaptive sides',
        'Others confused by your dual operating modes',
        'Balancing preparation with openness to emergence'
      ],
      recommendations: [
        'Honor both your methodical and receptive natures',
        'Create rhythm between structured and flow states',
        'Trust your alternating pattern as your strength'
      ]
    }
  },

  'RLRL': {
    code: 'RLRL',
    orientationCode: 'ATFC',
    name: 'The Dynamic Responder',
    tagline: 'Alternating receptive and strategic currents',
    icon: 'infinity',
    overview: {
      description: "You alternate between fluid and structured modes across your dimensions. Fluid processing with central positioning combines with holistic perspective and intentional motivation. You weave between emergence and direction.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process in waves, trusting emergence.' },
        environment: { orientation: 'Central', description: 'You engage actively from visible positions.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the whole.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Variable processing within goal-oriented engagement',
        'Central positioning supporting big-picture strategy',
        'Emergent rhythms directed at specific outcomes',
        'Flowing work with intentional destinations'
      ],
      environmentPreferences: [
        'Active engagement allowing processing flexibility',
        'Visible positions supporting holistic awareness',
        'Collaborative spaces serving strategic goals'
      ],
      decisionMaking: [
        'Intuitive awareness combined with strategic intent',
        'Pattern recognition serving predetermined outcomes',
        'Emergent insights directed at specific goals'
      ]
    },
    growthPath: {
      challenges: [
        'Tension between fluid processing and strategic timelines',
        'Balancing holistic awareness with focused execution',
        'Managing energy in constantly engaged positions'
      ],
      recommendations: [
        'Let your intuitive processing inform your strategy',
        'Use holistic awareness to choose strategic priorities',
        'Build recovery into your engaged lifestyle'
      ]
    }
  },

  'LRRL': {
    code: 'LRRL',
    orientationCode: 'IHFC',
    name: 'The Organic Architect',
    tagline: 'Connecting structure to emergence',
    icon: 'bridge',
    overview: {
      description: "You bridge structured and fluid approaches. Structured processing with peripheral positioning combines with holistic perspective and intentional drive. You build methodically while seeing the whole picture.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process with preparation and consistency.' },
        environment: { orientation: 'Peripheral', description: 'You thrive from protected observation points.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the ecosystem.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Methodical building informed by systemic awareness',
        'Protected preparation seeing the big picture',
        'Sequential execution guided by pattern recognition',
        'Strategic processes accounting for interconnections'
      ],
      environmentPreferences: [
        'Peripheral positions with wide observation angles',
        'Contained spaces supporting holistic analysis',
        'Boundaries allowing systemic thinking'
      ],
      decisionMaking: [
        'Careful analysis combined with pattern sensing',
        'Strategic evaluation informed by systemic awareness',
        'Methodical approach to interconnected goals'
      ]
    },
    growthPath: {
      challenges: [
        'Analysis paralysis from seeing too many connections',
        'Peripheral preference limiting strategic engagement',
        'Balancing systemic awareness with focused execution'
      ],
      recommendations: [
        'Use your systemic view to simplify, not complicate',
        'Time strategic visibility for maximum impact',
        'Trust your methodical approach to handle complexity'
      ]
    }
  },

  'RLLR': {
    code: 'RLLR',
    orientationCode: 'ATSP',
    name: 'The Quiet Catalyst',
    tagline: 'Flowing presence with open horizons',
    icon: 'compass-wave',
    overview: {
      description: "You combine fluid processing with central positioning, targeted focus, and adaptive motivation. You engage actively while trusting emergence, focusing deeply while staying open to where it leads.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process in waves, trusting the moment.' },
        environment: { orientation: 'Central', description: 'You thrive in visible, engaged positions.' },
        perspective: { orientation: 'Targeted', description: 'You focus on specific outcomes.' },
        motivation: { orientation: 'Adaptive', description: 'Your goals emerge organically.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Variable rhythms within engaged environments',
        'Focused attention open to organic evolution',
        'Immediate starts with targeted exploration',
        'Deep dives serving emergent directions'
      ],
      environmentPreferences: [
        'Central positions allowing processing flexibility',
        'Active engagement supporting targeted discovery',
        'Visible presence with room to flow'
      ],
      decisionMaking: [
        'Intuitive processing toward focused outcomes',
        'Responsive engagement serving emerging goals',
        'Targeted exploration open to surprise'
      ]
    },
    growthPath: {
      challenges: [
        'Managing energy in constantly engaged positions',
        'Tension between focus and organic evolution',
        'Others expecting consistency in your variable rhythm'
      ],
      recommendations: [
        'Build recovery rituals within your engaged lifestyle',
        'Trust your focused exploration to reveal direction',
        'Communicate your adaptive style to stakeholders'
      ]
    }
  },

  'LRRR': {
    code: 'LRRR',
    orientationCode: 'AHSP',
    name: 'The Flowing Observer',
    tagline: 'Structured foundation with receptive awareness',
    icon: 'mountain-moon',
    overview: {
      description: "You combine structured processing with peripheral positioning, holistic perspective, and adaptive motivation. Your processing is methodical while everything else flows—you're grounded in how you work but open in where you're going.",
      dimensions: {
        determination: { orientation: 'Structured', description: 'You process with preparation and consistency.' },
        environment: { orientation: 'Peripheral', description: 'You thrive from protected positions.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the whole.' },
        motivation: { orientation: 'Adaptive', description: 'Your goals emerge organically.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Methodical preparation serving emergent directions',
        'Sequential processing informed by big-picture awareness',
        'Consistent routines supporting organic evolution',
        'Structured approach to unstructured destinations'
      ],
      environmentPreferences: [
        'Protected positions with wide observation angles',
        'Contained spaces supporting holistic awareness',
        'Boundaries allowing pattern recognition'
      ],
      decisionMaking: [
        'Careful analysis combined with systemic sensing',
        'Methodical evaluation serving emergent goals',
        'Structured approach to intuitive directions'
      ]
    },
    growthPath: {
      challenges: [
        'Tension between structured processing and fluid goals',
        'Difficulty explaining your hybrid methodology',
        'Balancing preparation with openness to emergence'
      ],
      recommendations: [
        'Let your structure serve your emergence',
        'Trust that methodical processing supports intuitive goals',
        'Create structured containers for exploration'
      ]
    }
  },

  'RLRR': {
    code: 'RLRR',
    orientationCode: 'AHFC',
    name: 'The Adaptive Orchestrator',
    tagline: 'Engaged presence with flowing awareness',
    icon: 'sun-waves',
    overview: {
      description: "You combine fluid processing with central positioning, holistic perspective, and adaptive motivation. You engage actively while trusting emergence, seeing the whole picture while flowing with what unfolds.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process in waves, trusting the moment.' },
        environment: { orientation: 'Central', description: 'You thrive in visible, engaged positions.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the ecosystem.' },
        motivation: { orientation: 'Adaptive', description: 'Your goals emerge organically.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Variable rhythms within engaged, visible positions',
        'Big-picture awareness serving emergent goals',
        'Flowing productivity in collaborative environments',
        'Intuitive work supporting organic evolution'
      ],
      environmentPreferences: [
        'Central positions allowing holistic observation',
        'Active engagement revealing systemic patterns',
        'Visible presence with processing flexibility'
      ],
      decisionMaking: [
        'Intuitive sensing combined with pattern recognition',
        'Emergent insights from engaged observation',
        'Holistic awareness serving adaptive goals'
      ]
    },
    growthPath: {
      challenges: [
        'Energy depletion from constant engagement',
        'Difficulty focusing when everything seems connected',
        'Others confused by your variable, expansive approach'
      ],
      recommendations: [
        'Build strong recovery rituals into your engaged lifestyle',
        'Use your holistic view to prioritize, not expand',
        'Trust your intuitive timing even in visible positions'
      ]
    }
  },

  'RRLR': {
    code: 'RRLR',
    orientationCode: 'ITFP',
    name: 'The Precision Mystic',
    tagline: 'Receptive foundation with targeted vision',
    icon: 'eye-target',
    overview: {
      description: "You combine fluid processing and peripheral positioning with holistic perspective and intentional motivation. You observe from the edges, see the whole picture, and drive toward specific strategic goals.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process in waves, trusting emergence.' },
        environment: { orientation: 'Peripheral', description: 'You thrive from protected observation points.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the whole.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Variable processing from protected positions',
        'Big-picture awareness serving strategic goals',
        'Intuitive rhythms directed at specific outcomes',
        'Peripheral observation informing targeted action'
      ],
      environmentPreferences: [
        'Observation points with wide systemic views',
        'Contained spaces supporting strategic thinking',
        'Boundaries allowing pattern-informed planning'
      ],
      decisionMaking: [
        'Intuitive processing serving strategic intent',
        'Holistic analysis directed at specific goals',
        'Pattern recognition informing targeted action'
      ]
    },
    growthPath: {
      challenges: [
        'Tension between fluid processing and strategic timelines',
        'Peripheral preference complicating goal pursuit',
        'Balancing systemic awareness with focused execution'
      ],
      recommendations: [
        'Trust your intuitive timing to serve strategy',
        'Use your peripheral position for strategic advantage',
        'Let holistic awareness simplify your strategic focus'
      ]
    }
  },

  'RRRL': {
    code: 'RRRL',
    orientationCode: 'IHFP',
    name: 'The Cosmic Networker',
    tagline: 'Flowing presence with intentional purpose',
    icon: 'moon-arrow',
    overview: {
      description: "You combine fluid processing, peripheral positioning, and holistic perspective with intentional motivation. You flow in most dimensions but drive toward specific, strategic outcomes. Purpose grounds your receptivity.",
      dimensions: {
        determination: { orientation: 'Fluid', description: 'You process in waves, trusting emergence.' },
        environment: { orientation: 'Peripheral', description: 'You observe from protected positions.' },
        perspective: { orientation: 'Holistic', description: 'You see patterns across the ecosystem.' },
        motivation: { orientation: 'Intentional', description: 'You drive toward predetermined goals.' }
      }
    },
    lifeAreas: {
      workStyle: [
        'Intuitive processing directed at strategic outcomes',
        'Protected observation serving long-term goals',
        'Big-picture awareness informing specific milestones',
        'Flowing work with intentional destinations'
      ],
      environmentPreferences: [
        'Peripheral positions supporting strategic observation',
        'Contained spaces allowing purposeful reflection',
        'Boundaries enabling goal-directed pattern recognition'
      ],
      decisionMaking: [
        'Intuitive sensing combined with strategic intent',
        'Holistic analysis serving predetermined goals',
        'Emergent insights directed at specific outcomes'
      ]
    },
    growthPath: {
      challenges: [
        'Tension between receptive nature and strategic drive',
        'Others may not understand your indirect path to goals',
        'Balancing observation with purposeful action'
      ],
      recommendations: [
        'Trust that your receptive approach serves your goals',
        'Communicate how your observation informs strategy',
        'Let your intentional drive give direction to your flow'
      ]
    }
  }
};

export function getArchetype(code: VariableCode): Archetype {
  return archetypes[code];
}

export function getArchetypeByCode(code: string): Archetype | null {
  if (code in archetypes) {
    return archetypes[code as VariableCode];
  }
  return null;
}
