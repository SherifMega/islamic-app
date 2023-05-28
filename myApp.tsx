import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview'
import { initDatabase } from './database'
import { groupBy } from './src/core/utils/arr'
import { QuranScreen } from './screens/QuranScreen'

const { width, height } = Dimensions.get('window')

function Screens() {
  const [data, setData] = useState([])
  const [groupedByPageId, setGroupedByPageId] = useState({})

  const rowRenderer = useCallback(
    (_, data: string) => {
      const groupedByLine = groupBy(groupedByPageId[data], 'line_in_page')
      return <QuranScreen pageId={data} wordsGroupedByLines={groupedByLine} />
    },
    [groupedByPageId]
  )

  const _layoutProvider = useRef(
    new LayoutProvider(
      (index) => 0,
      (type, dim) => {
        dim.width = width
        dim.height = height
      }
    )
  ).current

  const dataProvider = useMemo(
    () => new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data),
    [data]
  )

  useEffect(() => {
    initDatabase().then((db) => {
      db.transaction((tx) => {
        // const pages = Array.from({ length: 604 }, (_, i) => i + 1)
        tx.executeSql(
          `SELECT v.verse_number, w.qpc_uthmani_hafs, v.page_id, w.line_in_page, v.verse_number 
            from words w 
            JOIN verses v 
            on w.verse_id = v.id 
            order by v.page_id, v.verse_number, w.id;`,
          [],
          (_, { rows }) => {
            const groupedByPageId = groupBy(rows._array, 'page_id')
            setGroupedByPageId(groupedByPageId)
            setData(Object.keys(groupedByPageId).reverse())
          },
          (_, error) => {
            console.log('Error selecting tables:', error)
          }
        )
      })
    })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, width, height }}>
      <RecyclerListView
        style={{ flex: 1 }}
        layoutProvider={_layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
        isHorizontal
        initialOffset={604 * width}
      />
    </SafeAreaView>
  )
}

export default function App() {
  const [loaded] = useFonts({
    Uthmanic: require('./assets/fonts/Uthmanic.ttf'),
    SuraNames: require('./assets/fonts/SuraNames.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Screens />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})
