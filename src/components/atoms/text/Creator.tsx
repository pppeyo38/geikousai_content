import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const Creator = ({ children }: Props) => {
  return <_P>{children}</_P>
}

const _P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.DIN};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 29px;

  ${({ theme }) => theme.media.phone`
    font-size: 16px;
    line-height: 19px;
  `}
`
