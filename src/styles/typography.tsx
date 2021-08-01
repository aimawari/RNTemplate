import {StyleSheet} from 'react-native';
import {SPACING} from '~utils/Constants';

export default StyleSheet.create({
  h1: {
    fontSize: 27,
    marginBottom: SPACING.appVerticalSpacing,
  },
  h2: {
    fontSize: 19,
    marginBottom: SPACING.appVerticalSpacing,
  },
  h3: {
    fontSize: 15,
    marginBottom: SPACING.appVerticalSpacing,
  },
  h4: {
    fontSize: 14,
    marginBottom: SPACING.appVerticalSpacing,
  },
  h5: {
    fontSize: 13,
    marginBottom: SPACING.appVerticalSpacing,
  },
  h6: {
    fontSize: 11,
    marginBottom: SPACING.appVerticalSpacing,
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: SPACING.appVerticalSpacing,
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
