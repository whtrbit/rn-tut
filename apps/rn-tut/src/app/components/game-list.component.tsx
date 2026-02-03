import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { fetchGamesData } from '../hooks/fetch-games-data.hook';
import { GameCartComponent } from './game-cart.component';

export const GameListComponent = () => {
  const { data, loading } = fetchGamesData();

  if (loading) return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {data.map((g, k) => (
        <GameCartComponent game={g} key={k} style={styles.gameListItem} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameListItem: {
    marginBottom: 24,
  },
});
