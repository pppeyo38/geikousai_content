import styled from 'styled-components'

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
`

const _divOne = styled.div`
  grid-area: One;
  background: #d9d9d9;
`

const _divTwo = styled.div`
  grid-area: Two;
  background: #d9d9d9;
`

const _divThree = styled.div`
  grid-area: Three;
  background: #d9d9d9;
`

const _divFour = styled.div`
  grid-area: Four;
  background: #d9d9d9;
`

const _divFive = styled.div`
  grid-area: Five;
  background: #d9d9d9;
`

const _divSix = styled.div`
  grid-area: Six;
  background: #d9d9d9;
`

const _divSeven = styled.div`
  grid-area: Seven;
  background: #d9d9d9;
`
