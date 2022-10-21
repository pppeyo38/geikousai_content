import styled from 'styled-components'
import { url } from '@/utils/config'

export const HeroArea = () => {
  return (
    <_Section>
      <_divOne />
      <_divTwo />
      <_divThree />
      <_divFour />
      <_divFive />
      <_divSix />
      <_divSeven />
    </_Section>
  )
}

const _Section = styled.section`
  display: grid;
  grid-template-columns: 209px 126px 209px 356px;
  grid-template-rows: 209px 126px 209px;
  gap: 20px 20px;
  grid-template-areas:
    'One One Five Six'
    'Two Three Five Six'
    'Two Four Four Seven';
  width: 959px;
  height: 586px;
  margin: 0 auto;

  ${({ theme }) => theme.media.phone`
    width: 340px;
    height: 473px;
    grid-template-columns: 121px 73px 122px;
    grid-template-rows: 121px 73px 122px 121px;
    gap: 12px 12px;
    grid-template-areas:
    "One One Five"
    "Two Three Five"
    "Two Four Four"
    "Seven Six Six";
  `}
`

const _divOne = styled.div`
  grid-area: One;
  background-image: url(${url('/images/sticker/alter.png')});
  background-size: cover;
`

const _divTwo = styled.div`
  grid-area: Two;
  background-image: url(${url('/images/sticker/rollcket.png')});
  background-size: cover;
`

const _divThree = styled.div`
  grid-area: Three;
`

const _divFour = styled.div`
  grid-area: Four;
  background-image: url(${url('/images/sticker/toritoori.png')});
  background-size: cover;
`

const _divFive = styled.div`
  grid-area: Five;
  background-image: url(${url('/images/sticker/linebow.png')});
  background-size: cover;
`

const _divSix = styled.div`
  grid-area: Six;
`

const _divSeven = styled.div`
  grid-area: Seven;
  background-image: url(${url('/images/sticker/kitatikusa.png')});
  background-size: cover;
`
