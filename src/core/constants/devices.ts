import { Platform } from 'react-native'
import * as Device from 'expo-device'

export let isTablet = false
;(async () => {
  isTablet = (await Device.getDeviceTypeAsync()) === Device.DeviceType.TABLET
})()
export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
