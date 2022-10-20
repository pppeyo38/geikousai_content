import { SetStateAction, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

import { WorkTitle } from '@/components/atoms/text/WorkTitle'
import { LinkButton } from '@/components/atoms/button/LinkButton'
import { BackgroundImg } from '@/components/atoms/images/BackgroundImg'
import { Creator } from '@/components/molecules/Creator'
import { WorkContent } from '@/type/workType'
import { url } from '@/utils/config'
import { WorkDetail } from '../molecules/WorkDetail'

type Props = {
  id: number
  setFocusId: React.Dispatch<SetStateAction<number>>
}

export const Work = ({
  title,
  ja,
  thumnail,
  color,
  creator,
  creator2,
  outline,
  link,
  pcOnly,
  id,
  setFocusId,
}: WorkContent & Props) => {
  const { ref, inView } = useInView()
  const [isHorizonReveal, setIsHorizonReveal] = useState<boolean>(false)

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsHorizonReveal(true)
      }, 750)
      setFocusId(id)
    } else {
      setIsHorizonReveal(false)
    }
  }, [inView])

  return (
    <_WorkWrap ref={ref}>
      <WorkTitle lang={ja ? 'ja' : 'en'} inView={inView}>
        {title}
      </WorkTitle>
      <_ContentWrap>
        <_ImageWrap>
          <_Image src={url(thumnail)} alt={title} />
          <BackgroundImg focusId={id} inView={inView} />
        </_ImageWrap>
        <_DetailWrap>
          <Creator
            color={color}
            inView={inView}
            isHorizonReveal={isHorizonReveal}
          >
            {creator}
            {creator2 && ` / ${creator2}`}
          </Creator>
          <WorkDetail isHorizonReveal={isHorizonReveal}>{outline}</WorkDetail>
        </_DetailWrap>
      </_ContentWrap>
      <_BtnWrap>
        <LinkButton gameLink={link} />
      </_BtnWrap>
    </_WorkWrap>
  )
}

const _WorkWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.phone`
    justify-content: center;
    gap: 20px;
  `}
`

const _ContentWrap = styled.div`
  max-width: 686px;

  ${({ theme }) => theme.media.phone`
    max-width: 257px;
  `}
`

const _ImageWrap = styled.figure`
  position: relative;
  width: 686px;
  height: 456px;
  background-color: #c4c4c4;

  ${({ theme }) => theme.media.phone`
    width: 239px;
    height: 159px;
  `}
`

const _Image = styled.img`
  width: 100%;
`

const _DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 19px;
  padding-left: 25px;

  ${({ theme }) => theme.media.phone`
    gap: 12px;
    margin-top: 16px;
    padding-left: 10px;
  `}
`

const _BtnWrap = styled.div`
  align-self: flex-end;
  margin-left: 90px;
  transform: translateY(16px);

  ${({ theme }) => theme.media.phone`
    display: grid;
    place-content: center;
    width: 100%;
    padding: 9px 0;
    margin: 0;
    transform: translateY(0px);
  `}
`
