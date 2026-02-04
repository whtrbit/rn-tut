import { View, Text, Image, StyleSheet, Dimensions, ViewStyle, StyleProp } from 'react-native';
import { Game } from './game.schema';

export const GameCartComponent = (props: {
  game: Game,
  style?: StyleProp<ViewStyle> // TODO should I style component host directly or create wrapper atop of it??
}) => {
  const g: Game = props.game;
  const windowWidth = Dimensions.get('window').width; // TODO avoid using styles const when using orientation dependant styles - inline styles work fine

  return (
    <View style={props.style}>
      <Text style={styles.gameHeader}>{g.name}</Text>
      <Text style={styles.gameQuote} numberOfLines={2}>"{g.quote}"</Text>
      <Text style={styles.gameHeaderRate}>{g.rate}</Text>
      <Image
        source={{
          uri: `https://wsrv.nl/?url=${encodeURIComponent(g.img)}`,
          headers: { 'User-Agent': 'Mozilla/5.0' }
        }}
        style={{
          width: '100%',
          height: windowWidth * 0.66,
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
    display: 'flex',
    fontSize: 24,
  },
  gameHeaderRate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  gameQuote: {
    marginBottom: 4,
    fontStyle: 'italic',
    color: '#666',
    lineHeight: 14,
    fontSize: 14,
    height: 28,
  },
});
