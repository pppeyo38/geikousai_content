import styled from 'styled-components'
import { use100vh } from 'react-div-100vh'
import { HeroArea } from '@/components/organisms/HeroArea'
import { Work } from '@/components/organisms/Work'
import { worksDataProps } from '@/type/workType'

export const IndexLayout = ({ worksData }: worksDataProps) => {
  const height = use100vh()
  const useHeight = height ? `${height}px` : '100vh'

  return (
    <_Container height={useHeight}>
      <_Section height={useHeight}>
        <HeroArea />
      </_Section>
      {worksData.map((item, index) => (
        <_Section key={index} height={useHeight}>
          <Work
            title={item.title}
            ja={item.ja}
            thumnail={item.thumnail}
            creator={item.creator}
            creator2={item.creator2}
            outline={item.outline}
            link={item.link}
          />
        </_Section>
      ))}
    </_Container>
  )
}

const _Container = styled.article<{ height: string }>`
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: ${(props) => props.height};
`

const _Section = styled.section<{ height: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  height: ${(props) => props.height};
`
