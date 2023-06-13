import { useCallback, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { initDatabase } from '$root/database'

import { groupBy } from '$src/core/utils/arr.utils'

import QuranItem from '$src/modules/quran/components/QuranPage'
import {
  QURAN_PAGES,
  QURAN_PAGES_NUMBER,
} from '$src/modules/quran/constants/quran.constants'
import { Word } from '$src/modules/quran/models/word.model'

function QuranScreen() {
  const [wordsGroupedByPageId, setWordsGroupedByPageId] = useState<{
    [key: string]: Array<Word>
  }>({})

  const renderItem = useCallback(
    ({ item: pageId }: { item: number }) => {
      return (
        <QuranItem
          pageId={`${pageId}`}
          wordsGroupedByLines={groupBy(
            wordsGroupedByPageId[pageId],
            'line_in_page' as keyof Word
          )}
        />
      )
    },
    [wordsGroupedByPageId]
  )

  useEffect(() => {
    initDatabase().then((db) => {
      db.transaction((tx) => {
        console.log('before query')
        tx.executeSql(
          `SELECT v.verse_number, 
               w.qpc_uthmani_hafs,
               w.char_type_name, 
               w.word_number_in_verse,
               w.location,
               v.page_id, 
               w.line_in_page, 
               v.id as verse_id,
               v.verse_number,
               v.chapter_id,
               v.surah_id,
               v.bismillah_pre,
               v.surah_pre,
               v.surah_post
           FROM words w
           JOIN verses v
           ON w.verse_id = v.id
           ORDER BY v.page_id, v.verse_number, w.id;`,
          [],
          (_, { rows }) => {
            console.log('got it')
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
      data={QURAN_PAGES}
      horizontal
      pagingEnabled
      renderItem={renderItem}
      estimatedItemSize={Dimensions.get('window').width}
      initialScrollIndex={QURAN_PAGES_NUMBER - 1}
    />
  ) : null
}

export default QuranScreen
