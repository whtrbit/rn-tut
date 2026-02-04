import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

interface RateSliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onValueChange: (value: number) => void;
  style?: StyleProp<ViewStyle> // TODO another yet the same
}

export const RateSlider = ({
  min,
  max,
  step,
  value,
  onValueChange,
  style,
}: RateSliderProps) => {
  return (
    <View style={style}>
      <MultiSlider
        values={[value]}
        min={min}
        max={max}
        step={step}
        sliderLength={280}
        onValuesChange={(values) => onValueChange(values[0])}
        selectedStyle={styles.selectedTrack}
        unselectedStyle={styles.unselectedTrack}
        markerStyle={styles.marker}
        enableLabel={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedTrack: {
    backgroundColor: '#1ca64c',
  },
  unselectedTrack: {
    backgroundColor: '#d1d5db',
  },
  marker: {
    backgroundColor: '#1ca64c',
    height: 24,
    width: 24,
  },
});
