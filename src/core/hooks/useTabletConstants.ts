import { useEffect, useMemo, useState } from 'react'

import { isTablet } from '$src/core/constants/devices'
import useOrientation from '$src/core/hooks/useOrientation'
import {
  rems,
  TABLET_HORIZONTAL_PADDING,
  TABLET_LIMITED_CONTAINER_WIDTH,
} from '$src/core/themes/rems'

// Slide Over and Split View documentation
// https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/AdoptingMultitaskingOniPad/QuickStartForSlideOverAndSplitView.html
const useTabletConstants = () => {
  const {
    window: { width },
  } = useOrientation()

  // isTabletRegular - shows if the device is a tablet and has full (>= 480) tablet window width
  // (horizontal size class is "regular", not "compact" (Split View))
  const [isTabletRegular, setIsTabletRegular] = useState(
    isTablet && width >= TABLET_LIMITED_CONTAINER_WIDTH
  )

  useEffect(() => {
    setIsTabletRegular(isTablet && width >= TABLET_LIMITED_CONTAINER_WIDTH)
  }, [width])

  const horizontalPadding = useMemo(
    () => (isTabletRegular ? TABLET_HORIZONTAL_PADDING : rems.r3),
    [isTabletRegular]
  )

  return {
    horizontalPadding,
  }
}

export default useTabletConstants
