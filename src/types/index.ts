export type Orientation = 'L' | 'R';

export type VariableCode = `${Orientation}${Orientation}${Orientation}${Orientation}`;

export type AlignmentStatus = 'Sustainable' | 'Transitioning';

export type SliderPosition = 1 | 2 | 3 | 4;

export interface Question {
  id: number;
  variable: 'determination' | 'environment' | 'perspective' | 'motivation' | 'alignment';
  statementA: string;
  statementB: string;
}

export interface QuestionResponse {
  questionId: number;
  position: SliderPosition;
}

export interface AssessmentState {
  responses: QuestionResponse[];
  currentQuestionIndex: number;
  questions: Question[];
  isComplete: boolean;
}

export interface Archetype {
  code: VariableCode; // Internal code (LLLL format)
  orientationCode: string; // Orientation Keys code (ITSC format)
  name: string;
  tagline: string;
  icon: string;
  overview: {
    description: string;
    dimensions: {
      determination: { orientation: string; description: string };
      environment: { orientation: string; description: string };
      perspective: { orientation: string; description: string };
      motivation: { orientation: string; description: string };
    };
  };
  lifeAreas: {
    workStyle: string[];
    environmentPreferences: string[];
    decisionMaking: string[];
  };
  growthPath: {
    challenges: string[];
    recommendations: string[];
  };
}

export interface AssessmentResult {
  code: VariableCode;
  alignment: AlignmentStatus;
  archetype: Archetype;
  dimensionScores: {
    determination: { left: number; right: number };
    environment: { left: number; right: number };
    perspective: { left: number; right: number };
    motivation: { left: number; right: number };
  };
}
