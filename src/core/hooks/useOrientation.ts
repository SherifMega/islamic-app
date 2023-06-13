import { useEffect, useState } from 'react'
import { AppState, Dimensions } from 'react-native'

import { isIOS } from '$src/core/constants/devices'
import { DeviceDimensions } from '$src/core/themes/types'

type useOrientationResult = {
  isPortrait: boolean
  window: DeviceDimensions
  screen: DeviceDimensions
  isSplitView: boolean
}

// type 'screen' is used for platform IOS due multitask splitView, so it is important to base on type 'screen',
// on android we use 'window' because type 'screen' doesn`t change with changes orientation

const orientationCallback = () => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

  return {
    window: {
      width: windowWidth,
      height: windowHeight,
    },
    screen: {
      width: screenWidth,
      height: screenHeight,
    },
    isPortrait: isIOS ? screenWidth < screenHeight : windowWidth < windowHeight,
    isSplitView: isIOS ? windowWidth !== screenWidth : false,
  }
}

const useOrientation = (): useOrientationResult => {
  const [orientationState, setOrientationState] =
    useState<useOrientationResult>(orientationCallback())
  useEffect(() => {
    const setOrientationProps = () => {
      setOrientationState(orientationCallback)
    }

    const listener = Dimensions.addEventListener('change', setOrientationProps)

    return () => listener.remove()
  }, [])

  useEffect(() => {
    setOrientationState(orientationCallback())
  }, [AppState.currentState])

  return orientationState
}

export default useOrientation
