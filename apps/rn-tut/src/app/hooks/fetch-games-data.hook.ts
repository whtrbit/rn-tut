import { useState, useEffect } from 'react';
import { Game } from '../schemas/game.schema';
import { games } from '../data/games.data';

export const fetchGamesData = () => {
  const [data, setData] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGamesData = (): Promise<Game[]> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(games), 3000);
      });
    };

    fetchGamesData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
