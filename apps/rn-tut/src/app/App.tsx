import React, { StrictMode } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { GameListComponent } from './components/game-list.component';

export const App = () => {
  return (
    <StrictMode>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.appContainer}>
            <GameListComponent></GameListComponent>
          </View>
        </ScrollView>
      </SafeAreaView>
    </StrictMode>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    marginVertical: 12,
    marginHorizontal: 12,
  }
});

export default App;
