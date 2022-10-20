import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import useMedia from '@/hooks/useMediaQuery'
import { RevealFromTop, slideBlock } from '@/styles/Reveal'

type Props = {
  children: ReactNode
  lang: string
  inView: boolean
}

export const WorkTitle = ({ children, lang, inView }: Props) => {
  const isMobile = useMedia('(max-width: 414px)')

  return (
    <>
      {isMobile ? (
        <_MobileTitleWrap inView={inView}>
          <_H1 lang={lang}>{children}</_H1>
        </_MobileTitleWrap>
      ) : (
        <_H1 lang={lang}>
          <_Span inView={inView}>{children}</_Span>
        </_H1>
      )}
    </>
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
  line-height: 84px;
  letter-spacing: -0.2em;
  text-orientation: sideways;
  ${({ theme }) => theme.media.phone`
    width: 48px;
    font-size: 37px;
    line-height: 45px;
  `}
`

const _H1 = styled.h1<{ lang: string }>`
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
  white-space: nowrap;
  overflow: hidden;
  height: 0%;
  animation: ${(props) => props.inView && css`1s ${RevealFromTop} forwards`};
`

const _MobileTitleWrap = styled.div<{ inView: boolean }>`
  position: relative;
  width: fit-content;
  height: fit-content;
  &:before {
    content: '';
    position: absolute;
    bottom: -8%;
    left: 0;
    width: 100%;
    height: 108%;
    background: #000;
    ${(props) =>
      props.inView &&
      css`
        animation: 1s ${slideBlock} forwards;
      `}
  }
`
