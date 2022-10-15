import { useState } from 'react'
import styled from 'styled-components'
import { use100vh } from 'react-div-100vh'
import { useInView } from 'react-intersection-observer'

import { StepBar } from '@/components/molecules/StepBar'
import { HeroArea } from '@/components/organisms/HeroArea'
import { Work } from '@/components/organisms/Work'
import { worksDataProps } from '@/type/workType'

export const IndexLayout = ({ worksData }: worksDataProps) => {
  const height = use100vh()
  const { ref, inView } = useInView({
    rootMargin: '-100px',
  })

  const useHeight = height ? `${height}px` : '100vh'
  const [focusId, setFocusId] = useState<number>(1)

  return (
    <_Container height={useHeight}>
      <_Section ref={ref} height={useHeight}>
        <StepBar focusId={focusId} inView={!inView} />
        <HeroArea />
      </_Section>
      {worksData.map((item, index) => (
        <_Section key={index} height={useHeight}>
          <Work {...item} id={index + 1} setFocusId={setFocusId} />
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  height: ${(props) => props.height};
`

const _WorksBlock = styled.div``
