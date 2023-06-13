import { StyleSheet, Text, View } from 'react-native'

export const Bismillah = () => (
  <View style={styles.bismillah}>
    <Text style={styles.bismillahText}>
      بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
    </Text>
  </View>
)

const styles = StyleSheet.create({
  bismillah: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bismillahText: {
    fontFamily: 'Uthmanic',
    fontSize: 20,
    lineHeight: 40
  },
})
