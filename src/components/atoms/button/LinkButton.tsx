import styled from 'styled-components'
import LinkIcon from '@/components/atoms/icons/LinkIcon'
import useMedia from '@/hooks/useMediaQuery'

type Props = {
  notPlay: boolean
  gameLink: string
}

export const LinkButton = ({ notPlay, gameLink }: Props) => {
  const isPc = useMedia('(min-width: 835px)')
  const iconSize = isPc ? 180 : 108

  return (
    <>
      {notPlay ? (
        <LinkIcon width={iconSize} height={iconSize} />
      ) : (
        <_A href={gameLink} target="_blank" rel="noopener noreferrer">
          <LinkIcon width={iconSize} height={iconSize} />
        </_A>
      )}
    </>
  )
}

const _A = styled.a`
  display: block;
`
