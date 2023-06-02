import { useCallback, useEffect, useState } from 'react'
import { Dimensions, Text } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { initDatabase } from '$root/database'

import { groupBy } from '$src/core/utils/arr'

import QuranItem from '$src/modules/quran/components/QuranItem'

function QuranScreen() {
  const [wordsGroupedByPageId, setWordsGroupedByPageId] = useState<{
    [key: string]: Array<object>
  }>({})

  const renderItem = useCallback(
    ({ item }: any) => {
      return (
        <QuranItem
          pageId={`${item}`}
          wordsGroupedByLines={groupBy(
            wordsGroupedByPageId[item],
            'line_in_page' as keyof object
          )}
        />
      )
    },
    [wordsGroupedByPageId]
  )

  useEffect(() => {
    initDatabase().then((db) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT v.verse_number, 
               w.qpc_uthmani_hafs, 
               w.char_type_name,
               v.page_id, 
               w.line_in_page, 
               v.verse_number
           FROM words w
           JOIN verses v
           ON w.verse_id = v.id
           ORDER BY v.page_id, v.verse_number, w.id;`,
          [],
          (_, { rows }) => {
            setWordsGroupedByPageId(groupBy(rows._array, 'page_id'))
          },
          (_, error) => {
            console.log('Error selecting tables:', error)
            return true
          }
        )
      })
    })
  }, [])

  return Object.keys(wordsGroupedByPageId).length > 0 ? (
    <FlashList
      data={Array.from({ length: 604 }, (_, i) => i + 1)}
      ListEmptyComponent={<Text>loading...</Text>}
      horizontal
      pagingEnabled
      inverted
      renderItem={renderItem}
      estimatedItemSize={Dimensions.get('window').width}
    />
  ) : null
}

export default QuranScreen
