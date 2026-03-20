export interface Exercise {
  id: string;
  name: string;
  emoji: string;
  muscles: string[];
  desc: string;
  instructions?: string[];
  muscleId?: string;
  custom?: boolean;
  gifUrl?: string;
}

export interface Series {
  reps: string;
  weight: string;
  unit?: 'kg' | 'min' | 'seg';
}

export interface RoutineExercise {
  id: string;
  exerciseId: string;
  name: string;
  emoji: string;
  muscles: string[];
  series: Series[];
  note: string;
  instructions?: string[];
}

export interface Routine {
  id: string;
  name: string;
  days: {
    [key: string]: {
      exercises: RoutineExercise[];
    };
  };
}

export interface Profile {
  name: string;
  age: number;
  weight: number;
  height: number;
  sex: 'M' | 'F' | '';
  createdAt: string;
}

export interface HistoryEntry {
  date: string;
  series: Series[];
  maxWeight: number;
  totalReps: number;
}

export interface ExerciseHistory {
  exerciseName: string;
  entries: HistoryEntry[];
}

export interface AppHistory {
  [key: string]: ExerciseHistory;
}
