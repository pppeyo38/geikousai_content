import styled, { css } from 'styled-components'
import { fadeIn, fadeOut } from '@/styles/fadeAnimation'
import { url } from '@/utils/config'
import data from '@/data/backgroundImg.json'

type Props = {
  focusId: number
  inView: boolean
}

export const BackgroundImg = ({ focusId, inView }: Props) => {
  const imgList: string[] = data.images

  return <_BackgroundImgWrap img={url(imgList[focusId - 1])} inView={inView} />
}

const _BackgroundImgWrap = styled.div<{ img: string; inView: boolean }>`
  position: fixed;
  z-index: -10;
  top: 22%;
  left: 0;
  width: 100%;
  height: 272px;
  background-image: ${(props) => `url(${props.img})`};
  filter: blur(7.5px);
  animation: ${(props) =>
    props.inView ? css`2s ${fadeIn} forwards` : css`2s ${fadeOut} forwards`};

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`
