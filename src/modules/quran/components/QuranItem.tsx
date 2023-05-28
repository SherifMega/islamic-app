import { Dimensions, StyleSheet, Text, View } from 'react-native'

function QuranItem({ item }: any) {
  return (
    <View style={styles.container}>
      <Text>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
})

export default QuranItem
