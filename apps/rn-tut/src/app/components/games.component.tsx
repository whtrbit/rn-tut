import { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';

import { GamesDatasource } from './games.datasource';
import { GamesDynamicRange } from './games-dynamic-range';
import { GameCartComponent } from './game-cart.component';
import { RateSlider } from './ui/rate-slider/rate-slider.component';

export const GamesComponent = () => {
  const { width } = useWindowDimensions();
  const gameColWidth = width / 2 - 16;
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
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  const filteredGames = data.filter((g) => g.rate >= (minRating ?? min));

  return (
    <>
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

      <FlatList
        data={filteredGames}
        renderItem={({item}) => <GameCartComponent game={item} style={{ width: gameColWidth, padding: 8 }} />}
        keyExtractor={(item, idx) => idx.toString()}
        numColumns={2}
        style={styles.gamesList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gamesList: {
    flex: 1
  },
  slider: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sliderContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }
});
