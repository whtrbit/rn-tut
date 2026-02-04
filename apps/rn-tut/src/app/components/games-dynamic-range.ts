import { useMemo } from 'react';
import { Game } from './game.schema';

export interface RateRange {
  min: number;
  max: number;
  step: number;
}

export const GamesDynamicRange = (games: Game[]): RateRange => {
  return useMemo(() => {
    if (games.length === 0) {
      return { min: 0, max: 10, step: 0.5 };
    }

    const rates = games.map((g) => g.rate);

    return {
      min: Math.min(...rates),
      max: Math.max(...rates),
      step: 0.5,
    };
  }, [games]);
};
