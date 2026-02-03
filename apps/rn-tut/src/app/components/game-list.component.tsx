import { View } from 'react-native';
import { games } from '../data/games.data';
import { GameCartComponent } from './game-cart.component';

export const GameListComponent = () => {
  return (
    <View>
      {games.map((g, k) => (
        <GameCartComponent game={g} key={k}></GameCartComponent>
      ))}
    </View>
  );
}

