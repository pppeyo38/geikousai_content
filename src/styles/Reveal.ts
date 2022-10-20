import styled, { keyframes } from 'styled-components'

export const RevealFromTop = keyframes`
  100% {
    height: 100%;
  }
`

export const RevealFromLeft = keyframes`
  100% {
    width: 100%;
  }
`

export const HiddenFromBtm = keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
`

export const RevealWrap = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
  }
`
