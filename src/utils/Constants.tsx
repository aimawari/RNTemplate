import {Platform} from 'react-native';
import {isIphoneX} from '~utils/CommonFunctions';

// ---------- Appbar & SafeArea ----------
export const SAFE_AREA_HEIGHT = Platform.select({
  /*
    44 - on iPhoneX
    20 - on iOS device
    0  - on Android platfrom (not count safe area)
  */
  ios: isIphoneX() ? 44 : 20,
  android: 0,
});

export const BOTTOM_SAFE_AREA_HEIGHT = Platform.select({
  ios: isIphoneX() ? 34 : 0,
  android: 0,
});

// ---------- Spacing ----------
export const APP_SPACING = Platform.select({
  ios: 9,
  android: 16,
});

export const SPACING = {
  appHorizontalSmallSpacing: 8,
  appHorizontalSpacing: 16,
  appHorizontalBigSpacing: 32,
  appHorizontalLargeSpacing: 48,
  appVerticalSmallSpacing: 4,
  appVerticalSpacing: 8,
  appVerticalBigSpacing: 16,
  appVerticalLargeSpacing: 32,
  appVerticalExtraLargeSpacing: 48,
};
