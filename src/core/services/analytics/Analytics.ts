import analytics from '@react-native-firebase/analytics'

class AnalyticsService {
  async logEvent(eventName: string, eventDetails?: { [key: string]: any }) {
    await analytics().logEvent(eventName, eventDetails)
  }

  async logScreenView(screenName: string) {
    await analytics().logEvent('screen_view', {
      screen_name: screenName,
    })
  }
}

export const Analytics = new AnalyticsService()
