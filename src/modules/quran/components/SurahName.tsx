import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export const SurahName = ({ surahId }: { surahId: number }) => (
  <View style={styles.theSurah}>
    <ImageBackground
      source={require('../../../../assets/surrah_rec3.png')}
      resizeMode='stretch'
      style={styles.surahBackground}
    >
      <Text style={styles.theSurahText}>
        {`${surahId}`.padStart(3, '0')} surah
      </Text>
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  surahBackground: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    width: '100%',
  },
  theSurah: {
    height: 40,
  },
  theSurahText: {
    fontFamily: 'SuraNames',
    fontSize: 28,
    lineHeight: 40,
  },
})
