import {StyleSheet} from 'react-native';
import {LINE_SPACING} from '~utils/Constants';

export default StyleSheet.create({
  h1: {
    fontSize: 27,
    marginBottom: LINE_SPACING,
  },
  h2: {
    fontSize: 19,
    marginBottom: LINE_SPACING,
  },
  h3: {
    fontSize: 15,
    marginBottom: LINE_SPACING,
  },
  h4: {
    fontSize: 14,
    marginBottom: LINE_SPACING,
  },
  h5: {
    fontSize: 13,
    marginBottom: LINE_SPACING,
  },
  h6: {
    fontSize: 11,
    marginBottom: LINE_SPACING,
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: LINE_SPACING,
  },
  button: {
    fontSize: 13,
  },
  shadow: {
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    textShadowColor: '#0008',
  },
});
