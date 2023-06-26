import 'styled-components/native'

import {
  ColorMap,
  DimensionMap,
  FontMap,
  HelperMap,
  RemMap,
} from '$src/core/themes/types'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorMap
    dark: boolean
    font: FontMap
    rem: RemMap
    dimension: DimensionMap
    helper: HelperMap
  }
}
