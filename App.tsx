import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

import { Monitoring } from '$src/core/services/monitoring/Monitoring'
import ThemeManager from '$src/core/themes/ThemeManager'

import QuranScreen from '$src/modules/quran/screens/QuranScreen'

export default function App() {
  useEffect(() => {
    Monitoring.log({ message: 'App is Mounted!', category: 'Startup' })
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
