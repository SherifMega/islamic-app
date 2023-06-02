import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

import QuranScreen from '$src/modules/quran/QuranScreen'

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
      <QuranScreen />
    </SafeAreaView>
  )
}
