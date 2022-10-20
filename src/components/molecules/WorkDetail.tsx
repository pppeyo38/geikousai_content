import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '@/components/atoms/text/Text'
import { RevealFromLeft } from '@/styles/Reveal'

type Props = {
  isHorizonReveal: boolean
  children: ReactNode
}

export const WorkDetail = ({ isHorizonReveal, children }: Props) => {
  return (
    <_TextWrap inView={isHorizonReveal}>
      <Text>
        <_TextInner>{children}</_TextInner>
      </Text>
    </_TextWrap>
  )
}

const _TextWrap = styled.div<{ inView: boolean }>`
  width: 0%;
  height: 90px;
  animation: ${(props) => props.inView && css`1.2s ${RevealFromLeft} forwards`};
  overflow: hidden;
`

const _TextInner = styled.span`
  display: block;
  width: 661px;
`
