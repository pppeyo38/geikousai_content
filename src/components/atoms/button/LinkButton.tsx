import styled from 'styled-components'
import { url } from '@/utils/config'

export const LinkButton = () => {
  return (
    <_A href="">
      <_Img src={url('/LinkButton.svg')} />
    </_A>
  )
}

const _A = styled.a`
  display: block;
  width: 180px;
  height: 180px;

  ${({ theme }) => theme.media.phone`
    width: 108px;
    height: 108px;
  `}
`

const _Img = styled.img`
  width: 100%;
  height: 100%;
`
