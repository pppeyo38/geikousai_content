import styled from 'styled-components'

import { TitleEn } from '@/components/atoms/text/TitleEn'
import { TitleJa } from '@/components/atoms/text/TitleJa'
import { Text } from '@/components/atoms/text/Text'
import { Creator } from '@/components/atoms/text/Creator'
import { LinkButton } from '@/components/atoms/button/LinkButton'

export const Work = () => {
  return (
    <>
      {/* <TitleEn>Please work! My camera!</TitleEn> */}
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
      <LinkButton />
    </>
  )
}

const _ContentWrap = styled.div``

const _ImageWrap = styled.figure`
  width: 686px;
  height: 456px;
  background-color: #c4c4c4;
`

const _DetailWrap = styled.div``
