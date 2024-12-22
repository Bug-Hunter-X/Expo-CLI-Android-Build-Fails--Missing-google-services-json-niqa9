# Expo CLI Android Build Failure: Missing google-services.json

This repository demonstrates a bug where the Expo CLI Android build process fails with a "missing google-services.json" error, even though the file is present in the correct location (`android/app`).

## Bug Description
The Expo CLI build process for Android fails, reporting that `google-services.json` is missing. However, the file is correctly placed in the `android/app` directory. This leads to build failures and prevents the generation of an APK.

## Reproduction Steps
1. Clone this repository.
2. Run `expo prebuild`. 
3. Run `expo build:android`.

## Expected Behavior
The build process should succeed and generate an Android APK.

## Actual Behavior
The build process fails with the error indicating that `google-services.json` is missing.

## Solution
The solution involves cleaning the Android build folder and rebuilding the project.