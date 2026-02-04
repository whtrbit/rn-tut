import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { GamesDatasource } from './games.datasource';
import { GamesDynamicRange } from './games-dynamic-range';
import { GameCartComponent } from './game-cart.component';
import { RateSlider } from './ui/rate-slider/rate-slider.component';

export const GamesComponent = () => {
  const { data, loading } = GamesDatasource();
  const { min, max, step } = GamesDynamicRange(data);
  const [minRating, setMinRating] = useState<number | null>(null);

  useEffect(() => {
    if (!loading && minRating === null) {
      setMinRating(min);
    }
  }, [loading, min, minRating]);

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      </View>
    );
  }

  const filteredGames = data.filter((g) => g.rate >= (minRating ?? min));

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <RateSlider
          min={min}
          max={max}
          step={step}
          value={minRating ?? min}
          onValueChange={setMinRating}
          style={styles.slider}
        />
      </View>

      {filteredGames.map((g, k) => (
        <GameCartComponent game={g} key={k} style={styles.gameListItem} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameListItem: {
    width: '50%', // Instead of maxWidth
    padding: 8,   // Add padding instead of box-sizing
    marginBottom: 24,
  },
  slider: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sliderContainer: {
    marginTop: 40,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
