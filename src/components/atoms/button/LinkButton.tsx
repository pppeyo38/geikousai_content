import styled from 'styled-components'
import LinkIcon from '@/components/atoms/icons/LinkIcon'

type Props = {
  gameLink: string
}

export const LinkButton = ({ gameLink }: Props) => {
  return (
    <>
      {gameLink ? (
        <_A href={gameLink} target="_blank" rel="noopener noreferrer">
          <LinkIcon />
        </_A>
      ) : (
        <LinkIcon />
      )}
    </>
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
