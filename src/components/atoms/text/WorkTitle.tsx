import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { RevealFromTop } from '@/styles/Reveal'

type Props = {
  children: ReactNode
  lang: string
  inView: boolean
}

export const WorkTitle = ({ children, lang, inView }: Props) => {
  return (
    <_H1 lang={lang}>
      <_Span inView={inView}>{children}</_Span>
    </_H1>
  )
}

const EnStyle = css`
  font-family: ${({ theme }) => theme.fontFamily.DIN};
  font-size: 70px;
  line-height: 84px;
  ${({ theme }) => theme.media.phone`
    width: 48px;
    font-size: 40px;
    line-height: 48px;
  `}
`

const JaStyle = css`
  font-family: ${({ theme }) => theme.fontFamily.senobi};
  font-size: 66px;
  line-height: 96px;
  letter-spacing: -0.2em;
  text-orientation: sideways;
  ${({ theme }) => theme.media.phone`
    width: 48px;
    font-size: 37px;
    line-height: 54px;
  `}
`

const _H1 = styled.h1<{ lang: string }>`
  display: inline-block;
  height: fit-content;
  ${(props) =>
    props.lang === 'ja'
      ? css`
          ${JaStyle}
        `
      : css`
          ${EnStyle}
        `}
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  writing-mode: vertical-rl;
  white-space: pre;
`

const _Span = styled.span<{ inView: boolean }>`
  display: block;
  overflow: hidden;
  height: 0%;
  animation: ${(props) => props.inView && css`1s ${RevealFromTop} forwards`};
`
