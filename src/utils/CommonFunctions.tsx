import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const window = Dimensions.get('window');

export const objectMatch = (
  obj1: {[x: string]: any},
  obj2: {[x: string]: any},
) => {
  return Object.keys(obj1).length > 0 && Object.keys(obj2).length > 0
    ? Object.keys(obj1).every(
        key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key],
      )
    : Object.keys(obj1).length === Object.keys(obj2).length;
};

export const getFileExtension = (filename: string) => {
  var ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? '' : ext[1];
};

export const trimUrl = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, '');
};

export const isTablet = () => {
  if (Platform.OS === 'ios') {
    return DeviceInfo.isTablet();
  } else {
    return (
      (window.height >= 640 && window.width >= 480) ||
      (window.width >= 640 && window.height >= 480)
    );
  }
};

export const isSmallAndroidTablet = () => {
  return (
    Platform.OS === 'android' &&
    ((window.height >= 640 && window.width >= 480) ||
      (window.width >= 640 && window.height >= 480)) &&
    ((window.height < 960 && window.width < 720) ||
      (window.width < 960 && window.height < 720))
  );
};

export const isIphoneX = () => {
  return Platform.OS === 'ios' && DeviceInfo.hasNotch;
};

export const isIphoneSE = () => {
  return Platform.OS === 'ios' && (window.height == 568 || window.width == 568);
};
