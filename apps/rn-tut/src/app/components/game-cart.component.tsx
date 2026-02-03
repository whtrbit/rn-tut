import { View, Text, Image, StyleSheet, Dimensions, ViewStyle, StyleProp } from 'react-native';
import { Game } from '../schemas/game.schema';

export const GameCartComponent = (props: {
  game: Game,
  style?: StyleProp<ViewStyle> // TODO should I style component host directly or create wrapper atop of it??
}) => {
  const g: Game = props.game;
  const windowWidth = Dimensions.get('window').width; // TODO avoid using styles const when using orientation dependant styles - inline styles work fine

  return (
    <View style={props.style}>
      <Text style={styles.gameHeader}>{g.name}</Text>
      <Text style={styles.gameQuote}>"{g.quote}"</Text>
      <Image
        source={{
          uri: `https://wsrv.nl/?url=${encodeURIComponent(g.img)}`,
          headers: { 'User-Agent': 'Mozilla/5.0' }
        }}
        style={{
          width: '100%',
          height: windowWidth * 1.5,
          backgroundColor: '#ddd'
        }}
        resizeMode={'cover'}
        onError={(error) => {
          console.error('Image failed to load:', g.name, error.nativeEvent.error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gameHeader: {
    fontSize: 24,
  },
  gameQuote: {
    marginBottom: 8,
    fontStyle: 'italic',
    color: '#666',
  }
});
