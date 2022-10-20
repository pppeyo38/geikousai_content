import type { AppProps } from 'next/app'
import CSR from '@/components/templates/CSR'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { theme } from '@/styles/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CSR>
          <Component {...pageProps} />
        </CSR>
      </ThemeProvider>
    </>
  )
}

export default MyApp

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #000000;
  }
`
