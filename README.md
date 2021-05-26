# redux-rn
Simple react-native app using redux

## Running on Android
You need android Studio installed and path variables configured (these can be different on your machine):
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-12.0.1.jdk/Contents/Home
```

1. Run:
```$ yarn```
2. Start an Android virtual device
3. Run:
```$ react-native run-android```

## Running on IOS
You need a mac with xcode installed
1. Run:
```$ yarn```
2. Run:
```$ cd ios && pod install && cd ..```
3. Run:
```$ react-native run-ios```

## App structure
All of the redux related code is in `src/redux` while the ui is in `src/views`.
Redux middlewares are used to have more control of the data flow and ease extensibility.
