import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  Header,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {BOTTOM_SAFE_AREA_HEIGHT, SPACING} from '~utils/Constants';

import styles from '~styles/';

import Theme from '~enum/ThemeEnum';
import Language from '~enum/LanguageEnum';

import useTranslation from '~hooks/useTranslation';
import {useAppSelector} from '~/hooks/useAppSelector';
import {useAppDispatch} from '~/hooks/useAppDispatch';
import {changeTheme} from '~/redux/actions/ThemeActions';
import {AppDispatch} from '~/redux/stores';
import {changeLanguage} from '~/redux/actions/LanguageActions';

const HomeScreen = () => {
  // Redux
  const dispatch: AppDispatch = useAppDispatch();
  const reduxState = useAppSelector(state => ({
    theme: state.themeData,
    language: state.language,
  }));

  const {theme, colors} = reduxState.theme;
  const language = reduxState.language;

  const t = useTranslation();

  return (
    <SafeAreaView style={[styles.flex, {backgroundColor: colors.primary}]}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: BOTTOM_SAFE_AREA_HEIGHT,
        }}>
        <Header />

        <View
          style={[
            styles.flex,
            styles.container,
            {backgroundColor: colors.primary},
          ]}>
          <Text style={[styles.typography.h2, {color: colors.text}]}>
            Step One
          </Text>
          <Text style={[styles.typography.paragraph, {color: colors.text}]}>
            Edit <Text style={{fontWeight: 'bold'}}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>

          <Text style={[styles.typography.h2, {color: colors.text}]}>
            See Your Changes
          </Text>
          <Text style={[styles.typography.paragraph, {color: colors.text}]}>
            <ReloadInstructions />
          </Text>
          <Text style={[styles.typography.h2, {color: colors.text}]}>
            Debug
          </Text>
          <Text style={[styles.typography.paragraph, {color: colors.text}]}>
            <DebugInstructions />
          </Text>

          <Text style={[styles.typography.h2, {color: colors.text}]}>
            Checkout Theme
          </Text>
          <View
            style={[
              styles.container,
              styles.rowBetween,
              {
                borderWidth: 1,
                borderColor: colors.secondary,
                marginBottom: SPACING.appVerticalSpacing,
              },
            ]}>
            <TouchableOpacity
              onPress={() => dispatch(changeTheme(Theme.LIGHT))}>
              <Text
                style={[
                  styles.typography.h3,
                  {
                    color: theme === Theme.LIGHT ? colors.active : colors.text,
                  },
                ]}>
                Light
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(changeTheme(Theme.DARK))}>
              <Text
                style={[
                  styles.typography.h3,
                  {
                    color: theme === Theme.DARK ? colors.active : colors.text,
                  },
                ]}>
                Dark
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.typography.h2, {color: colors.text}]}>
            Checkout Translation
          </Text>
          <Text style={[styles.typography.h3, {color: colors.text}]}>
            Text: {t('test')}
          </Text>
          <View
            style={[
              styles.container,
              styles.rowBetween,
              {
                borderWidth: 1,
                borderColor: colors.secondary,
              },
            ]}>
            <TouchableOpacity
              onPress={() => dispatch(changeLanguage(Language.EN))}>
              <Text
                style={[
                  styles.typography.h3,
                  {
                    color:
                      language === Language.EN ? colors.active : colors.text,
                  },
                ]}>
                EN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => dispatch(changeLanguage(Language.TH))}>
              <Text
                style={[
                  styles.typography.h3,
                  {
                    color:
                      language === Language.TH ? colors.active : colors.text,
                  },
                ]}>
                TH
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
