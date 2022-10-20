import styled from 'styled-components'
import { ReactNode } from 'react'

type Props = {
  pcOnly: boolean
  children: ReactNode
  gameLink: string
}

export const LinkButton = ({ pcOnly, children, gameLink }: Props) => {
  return (
    <>
      {pcOnly ? (
        <_A href={gameLink} target="_blank" rel="noopener noreferrer">
          {children}
        </_A>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}

const _A = styled.a`
  display: block;
`
