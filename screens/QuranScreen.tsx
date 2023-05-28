import React, { useEffect, FC } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window')

export const QuranScreen: FC<any> = React.memo(
  ({ pageId, wordsGroupedByLines }) => {
    useEffect(() => {
      console.log(`page ${pageId} loading`)
      // console.log(words)
    }, [])

    return (
      <View
        style={{
          flex: 1,
          width,
          height,
          backgroundColor: '#FAF4E8',
        }}
      >
        <View
          style={{
            width,
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            borderLeftColor: '#CFC3B2',
            borderLeftWidth: 1,
          }}
        >
          {/* Page Header Info */}
          <View
            style={{
              direction: 'rtl',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingTop: 8,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              الجزء الأول
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'SuraNames',
              }}
            >
              {/* {page.verses[0].surah.number}  */}
              surah
            </Text>
          </View>
          {/* Lines */}
          <View
            style={{
              paddingHorizontal: 5,
            }}
          >
            {Object.keys(wordsGroupedByLines).map((line) => (
              <View
                key={line}
                style={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                }}
              >
                {wordsGroupedByLines[line].map((word, index) => (
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text> {pageId} </Text>
          </View>
        </View>
      </View>
    )
  },
  (prev, next) => {
    console.log('compare', prev.pageId, next.pageId)
    return prev.pageId != next.pageId
  }
)

const styles = StyleSheet.create({
  word: {
    fontFamily: 'Uthmanic',
    fontSize: 21,
    lineHeight: 40,
    color: '#525148',
    textAlign: 'center',
  },
  shortPageWord: {
    fontSize: 22,
  },
  fullPageWord: {
    flexGrow: 1,
    flexShrink: 1,
  },
})
