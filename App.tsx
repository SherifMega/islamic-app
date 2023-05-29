// import { useCallback, useEffect, useState } from 'react'
// import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { FlashList } from '@shopify/flash-list'
// import { initDatabase } from './database'
// import { groupBy } from './src/core/utils/arr'
import QuranScreen from './src/modules/quran/QuranScreen'
import * as SplashScreen from 'expo-splash-screen'
import AnimatedSplashScreen from './src/modules/splash/AnimatedSplashScreen'

// const { width, height } = Dimensions.get('window')
// const extractKey = (key) => `${key}`

// function Screens() {
//   const [pages, setPages] = useState({})

//   useEffect(() => {
//     initDatabase().then((db) => {
//       db.transaction((tx) => {
//         const pageNumbers = Array.from({ length: 604 }, (_, i) => i + 1)
//         tx.executeSql(
//           `SELECT v.verse_number, w.qpc_uthmani_hafs, v.page_id, w.line_in_page, v.verse_number
//            FROM words w
//            JOIN verses v
//            ON w.verse_id = v.id
//            WHERE v.page_id in (${pageNumbers.join(',')})
//            ORDER BY v.page_id, v.verse_number, w.id;`,
//           [],
//           (_, { rows }) => {
//             setPages(groupBy(rows._array, 'page_id'))
//           },
//           (_, error) => {
//             console.log('Error selecting tables:', error)
//             return true
//           }
//         )
//       })
//     })
//   }, [])

//   const renderItem = useCallback(
//     ({ item }) => (
//       <QuranScreen
//         pageId={item}
//         wordsGroupedByLines={groupBy(pages[item], 'line_in_page')}
//       />
//     ),
//     [pages]
//   )

//   return (
//     <View style={{ width: 330, height: 800 }}>
//       <FlashList
//         // contentContainerStyle={{ padding: 2 }}
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         inverted
//         horizontal
//         data={Object.keys(pages)}
//         renderItem={renderItem}
//         keyExtractor={extractKey}
//         // maxToRenderPerBatch={7}
//         // initialNumToRender={7}
//         estimatedItemSize={800}
//         removeClippedSubviews
//       />
//     </View>
//   )
// }

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})

export default function App() {
  const [loaded] = useFonts({
    Uthmanic: require('./assets/fonts/Uthmanic.ttf'),
    SuraNames: require('./assets/fonts/SuraNames.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <AnimatedSplashScreen>
      <QuranScreen />
    </AnimatedSplashScreen>
  )
}
