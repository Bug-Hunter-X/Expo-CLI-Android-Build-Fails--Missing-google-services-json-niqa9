This bug occurs when using Expo CLI to build an Android APK. The build process fails with the following error: 

`Execution failed for task ':app:processDebugGoogleServices'.
> File google-services.json is missing.  The Google Services Plugin requires a google-services.json file to be placed in the 'app' module. This file should have been included in your Android app project when you downloaded the google-services.json from the Firebase console. Please refer to the Google Services Plugin documentation for more details.

The project structure is correct and the `google-services.json` file is present in the correct location (`android/app`). 