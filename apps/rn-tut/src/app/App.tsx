import React, { StrictMode } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { GamesComponent } from './components/games.component';

export const App = () => {
  return (
    <StrictMode>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.appContainer}>
            <GamesComponent></GamesComponent>
          </View>
        </ScrollView>
      </SafeAreaView>
    </StrictMode>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  appContainer: {
    flex: 1,
    marginVertical: 12,
    marginHorizontal: 12,
  },
});

export default App;
