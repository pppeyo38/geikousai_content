import { useInView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'

import { TitleEn } from '@/components/atoms/text/TitleEn'
import { TitleJa } from '@/components/atoms/text/TitleJa'
import { Text } from '@/components/atoms/text/Text'
import { Creator } from '@/components/atoms/text/Creator'
import { LinkButton } from '@/components/atoms/button/LinkButton'
import { workContent } from '@/type/workType'
import { RevealFromTop, RevealFromLeft, RevealWrap } from '@/styles/textReveal'

export const Work = ({
  title,
  ja,
  creator,
  creator2,
  outline,
}: workContent) => {
  const { ref, inView } = useInView()

  return (
    <_WorkWrap ref={ref}>
      <_TitleWrap inView={inView}>
        {ja ? <TitleJa>{title}</TitleJa> : <TitleEn>{title}</TitleEn>}
      </_TitleWrap>
      <_ContentWrap>
        <_ImageWrap />
        <_DetailWrap>
          <Creator inView={inView}>
            {creator}
            {creator2 && ` / ${creator2}`}
          </Creator>
          <_TextWrap inView={inView}>
            <Text>{outline}</Text>
          </_TextWrap>
        </_DetailWrap>
      </_ContentWrap>
      <_BtnWrap>
        <LinkButton />
      </_BtnWrap>
    </_WorkWrap>
  )
}

const _WorkWrap = styled.div`
  display: flex;
  gap: 10px;
`

const _TitleWrap = styled(RevealWrap)<{ inView: boolean }>`
  &:before {
    bottom: 0;
    left: 0;
    ${(props) =>
      props.inView &&
      css`
        animation: 1s ${RevealFromTop} forwards;
      `}
  }
`

const _ContentWrap = styled.div`
  max-width: 686px;
`

const _ImageWrap = styled.figure`
  width: 686px;
  height: 456px;
  background-color: #c4c4c4;
`

const _DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 19px;
  padding-left: 25px;
`

const _TextWrap = styled(RevealWrap)<{ inView: boolean }>`
  &:before {
    bottom: 0;
    right: 0;
    ${(props) =>
      props.inView &&
      css`
        animation: 1.2s ${RevealFromLeft} forwards;
      `}
  }
`

const _BtnWrap = styled.div`
  align-self: flex-end;
  margin-left: 90px;
  transform: translateY(16px);
`
