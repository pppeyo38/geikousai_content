import styled, { css } from 'styled-components'
import { url } from '@/utils/config'

type Props = {
  gameLink: string | undefined
}

export const LinkButton = ({ gameLink }: Props) => {
  return (
    <>
      {gameLink !== undefined ? (
        <_A href={gameLink} target="_blank" rel="noopener noreferrer">
          <_Img src={url('/LinkButton.svg')} />
        </_A>
      ) : (
        <_Span>
          <_Img src={url('/LinkButton.svg')} />
        </_Span>
      )}
    </>
  )
}

const Wrap = css`
  display: block;
  width: 180px;
  height: 180px;

  ${({ theme }) => theme.media.phone`
    width: 108px;
    height: 108px;
  `}
`

const _A = styled.a`
  ${Wrap}
`

const _Span = styled.span`
  ${Wrap}
`

const _Img = styled.img`
  width: 100%;
  height: 100%;
`
