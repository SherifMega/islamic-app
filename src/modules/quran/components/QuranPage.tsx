import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { Line } from '$src/modules/quran/components/Line'
import { Word } from '$src/modules/quran/models/word.model'

type QuranPageProps = {
  pageId: string
  wordsGroupedByLines: { [key: string]: Array<Word> }
}

type WordsGroupedByLine = { [key: string]: Array<Word> }

const getFirstWord = (wordsGroupedByLines: WordsGroupedByLine) => {
  const firstLine = Object.keys(wordsGroupedByLines)[0]
  return wordsGroupedByLines[firstLine as keyof WordsGroupedByLine]?.[0]
}

function QuranPage({ pageId, wordsGroupedByLines }: QuranPageProps) {
  const firstWord = getFirstWord(wordsGroupedByLines)
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        {/* Page Header Info */}
        {firstWord ? (
          <View style={styles.pageHeader}>
            <Text style={styles.chapterTitle}>
              الجزء {firstWord.chapter_id}
            </Text>
            {firstWord ? (
              <Text style={styles.surahTitle}>
                {`${firstWord.surah_id}`.padStart(3, '0')}
                surah
              </Text>
            ) : null}
          </View>
        ) : null}
        {/* Lines */}
        <View style={styles.lines}>
          {Object.keys(wordsGroupedByLines).map((line) => (
            <Line
              key={line}
              line={+line}
              lineWords={wordsGroupedByLines[line] || []}
              pageId={pageId}
              linesCount={Object.keys(wordsGroupedByLines).length}
            />
          ))}
        </View>
        {/* Page Footer Info */}
        <View style={styles.footer}>
          <Text> {pageId} </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chapterTitle: {
    fontSize: 20,
  },
  container: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lines: {},
  page: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  pageHeader: {
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  surahTitle: {
    fontFamily: 'SuraNames',
    fontSize: 24,
  },
})

export default QuranPage
