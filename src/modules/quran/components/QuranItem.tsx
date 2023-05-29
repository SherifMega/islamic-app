/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-color-literals */
import { Dimensions, StyleSheet, Text, View } from 'react-native'

function QuranItem({
  pageId,
  wordsGroupedByLines,
}: {
  pageId: string
  wordsGroupedByLines: { [key: string]: Array<object> }
}) {
  console.log(`page ${pageId} loading`)
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        {/* Page Header Info */}
        <View style={styles.pageHeader}>
          <Text>الجزء الأول</Text>
          <Text>
            {/* {page.verses[0].surah.number}  */}
            surah
          </Text>
        </View>
        {/* Lines */}
        <View style={styles.lines}>
          {Object.keys(wordsGroupedByLines).map((line) => (
            <View key={line} style={styles.line}>
              {wordsGroupedByLines[line].map((word: any, index: number) => (
                <Text
                  key={+line + index}
                  style={[
                    styles.word,
                    [1, 2].includes(+pageId)
                      ? styles.shortPageWord
                      : styles.fullPageWord,
                  ]}
                >
                  {word.char_type_name === 'end'
                    ? word.qpc_uthmani_hafs.split('').reverse().join('')
                    : word.qpc_uthmani_hafs}
                </Text>
              ))}
            </View>
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
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fullPageWord: {
    flexGrow: 1,
    flexShrink: 1,
  },
  line: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  lines: {
    // paddingHorizontal: 3,
  },
  page: {
    width: '100%',
    paddingHorizontal: 5,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 8,
    // },
    // shadowOpacity: 0.21,
    // shadowRadius: 8.19,
    // elevation: 1,
    // borderRadius: 6,
    // // borderWidth: 1,
    // borderColor: 'red',
    // borderLeftColor: '#CFC3B2',
    // borderLeftWidth: 1,
  },
  pageHeader: {
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  shortPageWord: {
    fontSize: 22,
  },
  word: {
    // color: '#525148',
    fontFamily: 'Uthmanic',
    fontSize: 19,
    lineHeight: 40,
    textAlign: 'center',
  },
})

export default QuranItem
