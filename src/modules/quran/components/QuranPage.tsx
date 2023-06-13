import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Word } from '$src/modules/quran/models/word.model'
import { Line } from './Line'

type QuranPageProps = {
  pageId: string
  wordsGroupedByLines: { [key: string]: Array<Word> }
}

const getFirstWord = (wordsGroupedByLines: { [key: string]: Array<Word> }) => {
  for (let line in wordsGroupedByLines) {
    return wordsGroupedByLines[line][0]
  }
  return
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
              lineWords={wordsGroupedByLines[line]}
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
  container: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
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
  chapterTitle: {
    fontSize: 20,
  },
  surahTitle: {
    fontFamily: 'SuraNames',
    fontSize: 24,
  },
  lines: {},
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default QuranPage
