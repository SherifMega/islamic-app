import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

import { Analytics } from '$src/core/services/analytics/Analytics'
import { Tracking } from '$src/core/services/tracking/Tracking'
import ThemeManager from '$src/core/themes/ThemeManager'

import QuranScreen from '$src/modules/quran/screens/QuranScreen'

export default function App() {
  useEffect(() => {
    Tracking.log('App mounted.')
    Analytics.logScreenView('App Mounted')
  }, [])

  const [loaded] = useFonts({
    Uthmanic: require('./assets/fonts/Uthmanic.ttf'),
    SuraNames: require('./assets/fonts/SuraNames.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView>
      <ThemeManager>
        <QuranScreen />
      </ThemeManager>
    </SafeAreaView>
  )
}
