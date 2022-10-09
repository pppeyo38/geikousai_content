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
    desktop: (
      desktop: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media screen and (min-width: 960px) {
        ${css(desktop, ...interpolations)}
      }
    `,
    tablet: (
      desktop: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 520px) {
        ${css(desktop, ...interpolations)}
      }
    `,
  },
} as const
