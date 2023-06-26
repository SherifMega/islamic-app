import { Appearance, Dimensions } from 'react-native'

import { isIOS, isTablet } from '$src/core/constants/devices'
import { dark, light } from '$src/core/themes/colors'
import { fonts } from '$src/core/themes/fonts'
import {
  rems,
  SMALL_SCREEN_HEIGHT,
  TABLET_HORIZONTAL_PADDING,
  TABLET_LIMITED_CONTAINER_WIDTH,
} from '$src/core/themes/rems'
import { Theme } from '$src/core/themes/types'

const isDarkMode = Appearance.getColorScheme() === 'dark'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

export const defaultTheme: Theme = {
  dark: isDarkMode,
  color: isDarkMode ? dark : light,
  font: fonts,
  rem: rems,
  dimension: {
    window: {
      width: windowWidth,
      height: windowHeight,
    },
    screen: {
      width: screenWidth,
      height: screenHeight,
    },
    maxWidth: 480,
    horizontalPadding:
      isTablet && windowWidth >= TABLET_LIMITED_CONTAINER_WIDTH
        ? TABLET_HORIZONTAL_PADDING
        : rems.r3,
  },
  helper: {
    isSmall: screenHeight <= SMALL_SCREEN_HEIGHT,
    isPortrait: isIOS ? screenWidth < screenHeight : windowWidth < windowHeight,
    isSplitView: isIOS ? windowWidth !== screenWidth : false,
    isTablet,
  },
}
