import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const Creator = ({ children }: Props) => {
  return (
    <_Wrap>
      <_P>{children}</_P>
    </_Wrap>
  )
}

const _Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  height: 75px;
  padding: 0 10px;
  border-left: 3px solid ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.phone`
    height: 50px;
    border-left: 1px solid #FFF;
  `}
`

const _P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.DIN};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 29px;
  transform: translateY(4px);

  ${({ theme }) => theme.media.phone`
    font-size: 16px;
    line-height: 19px;
  `}
`
