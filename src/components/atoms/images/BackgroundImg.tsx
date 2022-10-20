import styled from 'styled-components'
import { fadeIn } from '@/styles/fadeAnimation'
import { url } from '@/utils/config'
import data from '@/data/backgroundImg.json'

type Props = {
  focusId: number
}

export const BackgroundImg = ({ focusId }: Props) => {
  const imgList: string[] = data.images

  return <_BackgroundImgWrap img={url(imgList[focusId - 1])} />
}

const _BackgroundImgWrap = styled.div<{ img: string }>`
  position: fixed;
  z-index: -10;
  top: 22%;
  left: 0;
  width: 100%;
  height: 272px;
  background-image: ${(props) => `url(${props.img})`};
  filter: blur(7.5px);
  animation: 1s ${fadeIn} forwards;

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`
