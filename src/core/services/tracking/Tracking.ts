import crashlytics from '@react-native-firebase/crashlytics'

class TrackingService {
  log(event: string) {
    crashlytics().log(event)
  }

  mockCrash() {
    crashlytics().crash()
  }
}

export const Tracking = new TrackingService()
