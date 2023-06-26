import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

interface Props {
  children?: ReactElement
  scrollable?: boolean
}

const ScreenContainer = ({
  scrollable,
  children,
}: React.PropsWithChildren<Props>) => {
  const Content: React.ElementType = scrollable
    ? ContainerScrollView
    : ContainerView

  return (
    <SafeAreaView>
      <Content>{children}</Content>
    </SafeAreaView>
  )
}

const ContainerView = styled.View(({ theme }) => ({
  background: theme.color.main,
  width: '100%',
}))

const ContainerScrollView = styled.ScrollView(({ theme }) => ({
  background: theme.color.main,
  width: '100%',
}))

export default ScreenContainer
