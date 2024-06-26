import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig ={
  appId: 'io.ionic.starter',
  appName: 'GameHubMobile',
  webDir: 'www',
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  "cordova": {
    "preferences": {
      "Orientation": "landscape"
    }
  }
}

export default config;
