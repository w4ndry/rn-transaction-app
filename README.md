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

#### Stable Version
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