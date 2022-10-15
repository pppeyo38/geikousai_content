import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const TitleEn = ({ children }: Props) => {
  return <_H1>{children}</_H1>
}

const _H1 = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.DIN};
  font-size: 70px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 84px;
  writing-mode: vertical-rl;
  white-space: pre;

  ${({ theme }) => theme.media.phone`
    width: 48px;
    font-size: 40px;
    line-height: 48px;
  `}
`
