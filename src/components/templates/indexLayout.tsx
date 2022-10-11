import styled from 'styled-components'
import { use100vh } from 'react-div-100vh'

export const IndexLayout = () => {
  const height = use100vh()
  const useHeight = height ? `${height}px` : '100vh'

  return (
    <_Container height={useHeight}>
      <_Section height={useHeight}>1</_Section>
      <_Section height={useHeight}>2</_Section>
      <_Section height={useHeight}>3</_Section>
      <_Section height={useHeight}>4</_Section>
    </_Container>
  )
}

const _Container = styled.article<{ height: string }>`
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: ${(props) => props.height};
`

const _Section = styled.section<{ height: string }>`
  scroll-snap-align: start;
  height: ${(props) => props.height};
`
