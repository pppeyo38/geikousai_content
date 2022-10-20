import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
`
