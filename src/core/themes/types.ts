export type RemMap = {
  r1: number
  r2: number
  r3: number
  r4: number
  r5: number
  r6: number
  r7: number
  r8: number
  r9: number
  r10: number
  r11: number
  r12: number
  r13: number
  r14: number
  r15: number
}
export type FontMap = {
  regular: string
  medium: string
  bold: string
  ultra: string
}
export type DeviceDimensions = {
  width: number
  height: number
}
export type CustomColorMap = {
  main: string
}
export type DimensionMap = {
  window: DeviceDimensions
  screen: DeviceDimensions
  maxWidth: number
  horizontalPadding: number
}
export type ColorMap = CustomColorMap
export type HelperMap = {
  isSmall: boolean
  isPortrait: boolean
  isSplitView: boolean
  isTablet: boolean
}
export type Theme = {
  color: ColorMap
  dark: boolean
  font: FontMap
  rem: RemMap
  dimension: DimensionMap
  helper: HelperMap
}
