### Using `theme` for Style

```tsx
import styled from 'styled-components/native'

// with theme
const Box = styled.View(({ theme }) => ({
  backgroundColor: theme.color.background,
  padding: theme.rem.r3,
  width: theme.dimension.maxWidth,
}))

// without theme
const Box2 = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const Title = styled.Text(({ theme }) => ({
  color: theme.color.primary,
  fontFamily: theme.font.regular,
  lineHeight: theme.helper.isSmall ? 0 : 10,
}))


export const MyComponent: React.FC<{}> = () => {
  return (
    <Box>
      <Title />
    </Box>
  )
}
```

### Using hooks for `useTheme`

```tsx
import { useTheme } from '$src/core/themes/ThemeManager'

const theme = useTheme()
```

* [Styled Components](https://styled-components.com/)
* [Styled Components for React Native](https://styled-components.com/docs/basics#react-native)
* [Appearance](https://reactnative.dev/docs/appearance) ("Dark Mode", "Light Mode")