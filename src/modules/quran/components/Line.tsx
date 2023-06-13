import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Word } from '$src/modules/quran/models/word.model'
import { Bismillah } from './Bismillah'
import { SurahName } from './SurahName'

type LineProp = {
  line: number
  lineWords: Array<Word>
  pageId: string
  linesCount: number
}

export const Line: React.FC<LineProp> = ({
  line,
  lineWords,
  pageId,
  linesCount,
}) => {
  const firstWordInLine = lineWords[0]
  const lastWordInLine = lineWords[lineWords.length - 1]
  return (
    <>
      {firstWordInLine.word_number_in_verse == 1 ? (
        <View>
          {firstWordInLine.surah_pre ? (
            <SurahName surahId={firstWordInLine.surah_id} />
          ) : null}
          {firstWordInLine.bismillah_pre ? <Bismillah /> : null}
        </View>
      ) : null}
      <View key={line}>
        <View style={styles.line}>
          {lineWords.map((word, index) =>
            // if it's ayah number
            word.char_type_name === 'end' ? (
              <Text
                key={+line + index}
                style={[styles.ayahNumber, styles.word]}
              >
                {word.qpc_uthmani_hafs.split('').reverse().join('')}
              </Text>
            ) : (
              <Text
                key={+line + index}
                style={[
                  styles.word,
                  [1, 2].includes(+pageId)
                    ? styles.shortPageWord
                    : styles.fullPageWord,
                ]}
                adjustsFontSizeToFit
                numberOfLines={1}
              >
                {word.qpc_uthmani_hafs}
              </Text>
            )
          )}
        </View>
      </View>
      {line === linesCount && lastWordInLine.surah_post ? (
        <SurahName surahId={firstWordInLine.surah_id + 1} />
      ) : null}
    </>
  )
}
const styles = StyleSheet.create({
  line: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    width: '100%',
  },
  ayahNumber: {
    fontSize: 27,
    // textAlign: 'center',
  },
  word: {
    fontFamily: 'Uthmanic',
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'center',
  },
  fullPageWord: {
    flexGrow: 1,
    flexShrink: 1,
  },
  shortPageWord: {
    fontSize: 22,
  },
})
