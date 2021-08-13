## What Inside The App
##### 1. Transaction List Page
- List item
- List item clicked to navigate to the detail page
- Search feature
- Sort feature
- Pull to refresh
- Load more
- Disable all action while loading
##### 2. Transaction Detail Page
- Copy id transaction to clipboard
- Toggle detail transaction with animation
- Go back to the transaction list page

## Environment / Library Use
- Framework: React Native 0.64.1
- Language: Typescript, Javascript
- Navigation: React Navigation 6.0.2
- React Hooks

## Download APK
- [Google Drive](https://drive.google.com/file/d/1grUkKDBtnqRE0ikE3aE0CBKU1NtpsgBy/view?usp=sharing)
- [Github](https://github.com/w4ndry/rn-transaction-app/releases/download/v1.0.0/app-release.apk)

## How To Install
- git clone `https://github.com/w4ndry/rn-transaction-app.git`
- install depedencies `npm install`
- install to your device `npx react-native run-android`
- running `npx react-native start`
- reset cache `npm start --reset-cache`


## How To Build APK
- store keystore in `android/app/app-release.keystore`
- build apk release `cd android && ./gradlew clean && ./gradlew assembleRelease`
- apk path `android/app/build/outputs/apk/release/app-release.apk`
- install apk to device `npx react-native run-android --variant=release`
- test apk


## Publishing to Google Play Store

- create release branch `git checkout -b release/v1.0.0`
- bump version code and version number in `android/app/build.gradle`
- build bundle release `cd android && ./gradlew clean && ./gradlew bundleRelease`
- bundle path `android/app/build/outputs/bundle/release/app.aab`
- install app to device `npx react-native run-android --variant=release`
- test app
- upload to playstore `https://play.google.com/apps/publish`
- `git add .`
- commit with your version number `git commit -m 'bump version number v1.0.0'`
- create tag `git tag -a v1.0.0 -m 'Release Version 1.0.0'`
- push tag `git tag --push`
- create `pull request` to `master` branch
- edit tag `https://github.com/w4ndry/ikapmi-app-rn/releases/tag/v1.0.0`
- add changelog
- upload `app-release.apk` and `app.aab` and save