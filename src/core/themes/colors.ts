import { ColorMap, CustomColorMap } from '$src/core/themes/types'

// custom colors for light mode
export const lightThemeColors: CustomColorMap = {
  main: '#fff',
}

// custom colors for dark mode
export const darkThemeColors: CustomColorMap = {
  main: '#000',
}

// color palette for light theme
export const light: ColorMap = {
  ...lightThemeColors,
}

// color palette for dark theme
export const dark: ColorMap = {
  ...darkThemeColors,
}
