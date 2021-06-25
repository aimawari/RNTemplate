import {StyleSheet} from 'react-native';
import {APP_SPACING, SPACING} from '~utils/Constants';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    paddingVertical: SPACING.appVerticalSpacing,
    paddingHorizontal: APP_SPACING,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    borderBottomColor: 'rgba(0,0,0,0.05)',
    borderBottomWidth: 1.25,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
