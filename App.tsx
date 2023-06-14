import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

import QuranScreen from '$src/modules/quran/screens/QuranScreen'
import ThemeManager from '$src/core/themes/ThemeManager'

export default function App() {
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
