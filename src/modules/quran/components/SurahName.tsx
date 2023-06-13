import { StyleSheet, Text, View } from 'react-native'

export const SurahName = ({ surahId }: { surahId: number }) => (
  <View style={styles.theSurah}>
    <Text style={styles.theSurahText}>
      {`${surahId}`.padStart(3, '0')} surah
    </Text>
  </View>
)

const styles = StyleSheet.create({
  theSurah: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  theSurahText: {
    fontFamily: 'SuraNames',
    fontSize: 28,
    lineHeight: 40
  },
})
