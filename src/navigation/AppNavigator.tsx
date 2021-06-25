import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '~screens/HomeScreen';
import LoadingScreen from '~screens/LoadingScreen';

import {useAppDispatch} from '~/hooks/useAppDispatch';
import {initLanguage} from '~/redux/actions/LanguageActions';
import {initTheme} from '~/redux/actions/ThemeActions';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [initialized, setInitialized] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    initApp();
  }, []);

  const initApp = () => {
    Promise.all([dispatch(initLanguage()), dispatch(initTheme())]).then(() =>
      setInitialized(true),
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!initialized ? (
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
