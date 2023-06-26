import { createContext, useContext, useEffect, useState } from 'react'
import * as React from 'react'
import { Appearance } from 'react-native'
import * as SystemUI from 'expo-system-ui'
import throttle from 'lodash/throttle'
import { ThemeProvider } from 'styled-components/native'

import { isTablet } from '$src/core/constants/devices'
import { useOrientation, useTabletConstants } from '$src/core/hooks/'
import { dark, light } from '$src/core/themes/colors'
import { defaultTheme } from '$src/core/themes/defaultTheme'
import { Theme } from '$src/core/themes/types'

const defaultMode = Appearance.getColorScheme()

const ThemeContext = createContext(defaultTheme)

export const useTheme = () => useContext(ThemeContext)

const ThemeManager = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null
}) => {
  const [themeMode, setThemeMode] = useState(defaultMode)
  const isThemeDark = themeMode === 'dark'
  const { window, screen, isPortrait, isSplitView } = useOrientation()
  const { horizontalPadding } = useTabletConstants()

  useEffect(() => {
    // Sets background color of the app's rootView
    // to prevent color mismatch bug when reorienting the app on tablets
    SystemUI.setBackgroundColorAsync(isThemeDark ? '#000' : '#fff')
  }, [themeMode])

  useEffect(() => {
    // Theme Appearance Bug
    // https://github.com/facebook/react-native/issues/28525
    const handler = async (preferences: Appearance.AppearancePreferences) => {
      setThemeMode(preferences.colorScheme)
    }

    // avoid blinking
    const changeListener = Appearance.addChangeListener(
      throttle(handler, 1000, {
        leading: false,
        trailing: true,
      })
    )

    return () => changeListener.remove()
  }, [])

  const theme: Theme = {
    ...defaultTheme,
    dark: isThemeDark,
    color: isThemeDark ? dark : light,
    dimension: {
      maxWidth: 480,
      window,
      screen,
      horizontalPadding,
    },
    helper: {
      ...defaultTheme.helper,
      isPortrait,
      isSplitView,
      isTablet,
    },
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeManager
