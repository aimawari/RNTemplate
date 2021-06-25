import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from '~styles/';

const LoadingScreen = () => {
  return (
    <View style={[styles.flex, styles.center]}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingScreen;
