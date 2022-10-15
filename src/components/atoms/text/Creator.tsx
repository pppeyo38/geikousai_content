import { ReactNode } from 'react'
import styled, { css, keyframes } from 'styled-components'

type Props = {
  inView: boolean
  children: ReactNode
}

export const Creator = ({ inView, children }: Props) => {
  return (
    <_Wrap>
      <_Span inView={inView} />
      <_P>{children}</_P>
    </_Wrap>
  )
}

const Stroke = keyframes`
  100% {
    height: 100%;
  }
`

const _Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 75px;
  padding: 0 10px;

  ${({ theme }) => theme.media.phone`
    height: 50px;
  `}
`

const _Span = styled.span<{ inView: boolean }>`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 0%;
  background: ${({ theme }) => theme.colors.white};

  ${(props) =>
    props.inView &&
    css`
      animation: 1s ${Stroke} forwards;
    `}
`

const _P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.DIN};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 29px;
  transform: translateY(4px);

  ${({ theme }) => theme.media.phone`
    font-size: 16px;
    line-height: 19px;
  `}
`
