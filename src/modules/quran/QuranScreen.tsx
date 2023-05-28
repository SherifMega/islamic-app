import { FlashList } from '@shopify/flash-list'
import { Dimensions, Text } from 'react-native'
import QuranItem from './components/QuranItem'

function QuranScreen() {
  return (
    <FlashList
      data={Array.from({ length: 604 }, (_, i) => i + 1)}
      ListEmptyComponent={<Text>loading...</Text>}
      horizontal
      pagingEnabled
      inverted
      renderItem={({ item }) => <QuranItem item={item} />}
      estimatedItemSize={Dimensions.get('window').width}
    />
  )
}

export default QuranScreen
