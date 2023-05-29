import Constants from 'expo-constants'
import * as SplashScreen from 'expo-splash-screen'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import SplashVideo from './components/SplashVideo'

function AnimatedSplashScreen({ children }: { children: ReactNode }) {
  const animation = useMemo(() => new Animated.Value(1), [])
  const [isAppReady, setAppReady] = useState(false)
  const [isSplashVideoComplete, setSplashVideoComplete] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    if (isAppReady && isSplashVideoComplete) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true))
    }
  }, [isAppReady, isSplashVideoComplete])

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync()
      // Load stuff
      await Promise.all([])
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true)
    }
  }, [])

  const videoElement = useMemo(() => {
    return (
      <SplashVideo
        onLoaded={onImageLoaded}
        onFinish={() => {
          setSplashVideoComplete(true)
        }}
      />
    )
  }, [onImageLoaded, setSplashVideoComplete])
  return (
    <View style={styles.container}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents='none'
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.manifest?.splash?.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          {videoElement}
        </Animated.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AnimatedSplashScreen
