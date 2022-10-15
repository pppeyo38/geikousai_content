import styled, { keyframes } from 'styled-components'

export const Reveal = keyframes`
  100% {
    height: 0%;
  }
`

export const RevealContentWrap = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }
`
