import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const Text = ({ children }: Props) => {
  return <_P>{children}</_P>
}

const _P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.DIN};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 30px;
  letter-spacing: 0.05em;

  ${({ theme }) => theme.media.phone`
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.03em;
  `}
`
