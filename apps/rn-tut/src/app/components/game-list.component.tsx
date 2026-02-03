import { StyleSheet, View } from 'react-native';
import { games } from '../data/games.data';
import { GameCartComponent } from './game-cart.component';

export const GameListComponent = () => {
  return (
    <View>
      {games.map((g, k) => (
        <GameCartComponent game={g} key={k} style={styles.gameListItem}></GameCartComponent>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gameListItem: {
    marginBottom: 24
  }
})
