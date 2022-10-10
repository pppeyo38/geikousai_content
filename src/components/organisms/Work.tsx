import styled from 'styled-components'

import { TitleEn } from '@/components/atoms/text/TitleEn'
import { Text } from '@/components/atoms/text/Text'
import { Creator } from '@/components/atoms/text/Creator'

export const Work = () => {
  return (
    <_WorkWrap>
      <TitleEn>Please work! My camera!</TitleEn>
      <_ContentWrap>
        <_ImageWrap />
        <_DetailWrap>
          <Creator>3M hiremori / 3M morikoro</Creator>
          <Text>
            あいうえおあいうえおあいうえお あいうえおあいうえおあいうえお
            あいうえおあいうえおあいうえお あいうえお
          </Text>
        </_DetailWrap>
      </_ContentWrap>
    </_WorkWrap>
  )
}

const _WorkWrap = styled.div`
  display: flex;
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
