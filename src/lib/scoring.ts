import { QuestionResponse, Orientation, VariableCode, AlignmentStatus, AssessmentResult } from '@/types';
import { getArchetype } from './archetypes';

interface DimensionScore {
  left: number;
  right: number;
}

export function calculateDimensionScores(responses: QuestionResponse[]): {
  determination: DimensionScore;
  environment: DimensionScore;
  perspective: DimensionScore;
  motivation: DimensionScore;
} {
  const determination = responses.filter(r => r.questionId >= 1 && r.questionId <= 11);
  const environment = responses.filter(r => r.questionId >= 12 && r.questionId <= 22);
  const perspective = responses.filter(r => r.questionId >= 23 && r.questionId <= 33);
  const motivation = responses.filter(r => r.questionId >= 34 && r.questionId <= 44);

  const calcScore = (qs: QuestionResponse[]): DimensionScore => {
    const left = qs.filter(q => q.position <= 2).length;
    const right = qs.filter(q => q.position >= 3).length;
    return { left, right };
  };

  return {
    determination: calcScore(determination),
    environment: calcScore(environment),
    perspective: calcScore(perspective),
    motivation: calcScore(motivation),
  };
}

export function calculateVariableCode(responses: QuestionResponse[]): VariableCode {
  const scores = calculateDimensionScores(responses);

  const getOrientation = (score: DimensionScore): Orientation => {
    return score.left >= 6 ? 'L' : 'R';
  };

  // Order: DIRECTION-PATTERN-STYLE-MODE = Motivation-Perspective-Determination-Environment
  const code = `${getOrientation(scores.motivation)}${getOrientation(scores.perspective)}${getOrientation(scores.determination)}${getOrientation(scores.environment)}` as VariableCode;

  return code;
}

export function calculateAlignment(responses: QuestionResponse[]): AlignmentStatus {
  const alignmentResponses = responses.filter(r => r.questionId >= 45 && r.questionId <= 50);
  const sustainableCount = alignmentResponses.filter(q => q.position <= 2).length;
  return sustainableCount >= 4 ? 'Sustainable' : 'Transitioning';
}

export function calculateResult(responses: QuestionResponse[]): AssessmentResult {
  const code = calculateVariableCode(responses);
  const alignment = calculateAlignment(responses);
  const archetype = getArchetype(code);
  const dimensionScores = calculateDimensionScores(responses);

  return {
    code,
    alignment,
    archetype,
    dimensionScores,
  };
}

export function getVariableLabel(variable: 'determination' | 'environment' | 'perspective' | 'motivation', orientation: Orientation): string {
  const labels: Record<string, Record<Orientation, string>> = {
    determination: { L: 'Structured', R: 'Fluid' },
    environment: { L: 'Central', R: 'Peripheral' },
    perspective: { L: 'Targeted', R: 'Holistic' },
    motivation: { L: 'Intentional', R: 'Adaptive' },
  };
  return labels[variable][orientation];
}

export function getVariableDescription(variable: 'determination' | 'environment' | 'perspective' | 'motivation', orientation: Orientation): string {
  const descriptions: Record<string, Record<Orientation, string>> = {
    determination: {
      L: 'Sequential processing with consistency and thorough preparation',
      R: 'Wave-based processing, trusting what arrives in the moment'
    },
    environment: {
      L: 'Thriving in visible positions with active engagement',
      R: 'Observing from the edges with strong energetic boundaries'
    },
    perspective: {
      L: 'Deep focus on specific goals and measurable outcomes',
      R: 'Seeing the whole picture, sensing patterns across systems'
    },
    motivation: {
      L: 'Driven by predetermined goals and strategic planning',
      R: 'Following what feels aligned and emerges naturally'
    },
  };
  return descriptions[variable][orientation];
}
