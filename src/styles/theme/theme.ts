import 'styled-components'
import {
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components'

export const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
  },
  fontFamily: {
    DIN: 'din-condensed, sans-serif',
    senobi: 'senobi-gothic,sans-serif',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  media: {
    phone: (
      desktop: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (max-width: 600px) {
        ${css(desktop, ...interpolations)}
      }
    `,
  },
} as const

type AppTheme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
