import { StyleSheet, View } from 'react-native'

import BismillahIcon from '$src/modules/quran/components/BismillahIcon'

export const Bismillah = () => (
  <View style={styles.bismillah}>
    <BismillahIcon />
  </View>
)

const styles = StyleSheet.create({
  bismillah: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
})
