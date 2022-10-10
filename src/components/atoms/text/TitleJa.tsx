import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const TitleJa = ({ children }: Props) => {
  return <_H1>{children}</_H1>
}

const _H1 = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.senobi};
  font-size: 66px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 96px;
  letter-spacing: -0.2em;
  transform: rotate(90deg);
  transform-origin: left bottom;

  ${({ theme }) => theme.media.phone`
    font-size: 37px;
    line-height: 54px;
  `}
`
