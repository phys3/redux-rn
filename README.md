# redux-rn
Simple react-native app using redux

## Running on Android
1. Run:
```$ yarn```
2. Start an Android virtual device
3. Run:
```$ react-native run-android```

## Running on IOS
1. Run:
```$ yarn```
2. Run:
```$ cd ios && pod install && cd ..```
3. Run:
```$ react-native run-ios```

## App structure
All of the redux related code is in `src/redux` while the ui is in `src/views`.
Redux middlewares are used to have more control of the data flow and ease extensibility.