# RNTemplate : React Native Template

React Native latest stable version(0.64.1) with plugins

- @react-native-async-storage/async-storage
- lodash
- moment
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- redux
- react-redux
- redux-thunk
- react-native-device-info
- react-native-svg
- [@react-navigation/native (v5)](https://reactnavigation.org/)
- @react-navigation/stack
- @react-navigation/bottom-tabs
- @react-navigation/material-top-tabs
- @react-navigation/drawer
- [patch-package](https://callstack.com/blog/say-goodbye-to-old-fashioned-forks-thanks-to-the-patch-package/)

### Installation

requires [Node.js](https://nodejs.org/) and [yarn 1](https://classic.yarnpkg.com/en/docs/install) to install.

```sh
$ cd rntemplate
$ yarn
$ npx pod-install ios
```

### Change App Name

- Update name and displayName in app.json to your new app name
- Run this shell script.
- Note\*: Please run yarn install before use this code

```sh
	$ cd scripts
	$ ./change_app_name.sh
```

### Fix react-native-vector-icons problem

If there has any problem about auto linking react-native-vector-icons, [Fix here](https://github.com/oblador/react-native-vector-icons/issues/1114#issuecomment-574994418)

### Fix Android debug.keystore problem

If there has any problem about debug.keystore on android devices, you need to dowload [debug.keystore](https://github.com/react-native-community/rn-diff-purge/raw/release/0.64.1/RnDiffApp/android/app/debug.keystore) to android/app/

### Development

For android

```sh
$ npx react-native run-android
```

For ios

```sh
$ npx react-native run-ios
```

### Add font to project

Create file react-native.config.js at root

```
module.exports = {
  assets: ['./src/assets/fonts/'], // this is font path
};
```

then

```sh
$ npx react-native link
```

If has any problem with react-native-vector-icons on ios

open RNTemplate.xcworkspace and go to Build Phases

on Copy Bundle Resources, remove everythings that related to react-native-vector-icons