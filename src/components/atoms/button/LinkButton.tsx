import styled from 'styled-components'
import { url } from '@/utils/config'

export const LinkButton = () => {
  return (
    <_A href="">
      <img src={url('/LinkButton.svg')} />
    </_A>
  )
}

const _A = styled.a``
