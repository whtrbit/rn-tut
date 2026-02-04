import { useEffect, useState } from 'react';
import { games } from './games.data';
import { Game } from './game.schema';

export const GamesDatasource = () => {
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
