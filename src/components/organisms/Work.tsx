import styled from 'styled-components'

import { TitleEn } from '@/components/atoms/text/TitleEn'
import { TitleJa } from '@/components/atoms/text/TitleJa'
import { Text } from '@/components/atoms/text/Text'
import { Creator } from '@/components/atoms/text/Creator'
import { LinkButton } from '@/components/atoms/button/LinkButton'

import { workType } from '@/type/workType'

export const Work = ({ title, ja, creator, creator2, outline }: workType) => {
  return (
    <_WorkWrap>
      {ja ? <TitleJa>{title}</TitleJa> : <TitleEn>{title}</TitleEn>}
      <_ContentWrap>
        <_ImageWrap />
        <_DetailWrap>
          <Creator>
            {creator}
            {creator2 && ` / ${creator2}`}
          </Creator>
          <Text>{outline}</Text>
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

const _BtnWrap = styled.div`
  align-self: flex-end;
  margin-left: 90px;
  transform: translateY(16px);
`
