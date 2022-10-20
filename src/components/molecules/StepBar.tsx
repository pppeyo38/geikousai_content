import styled, { css } from 'styled-components'
import { RevealFromTop, HiddenFromBtm } from '@/styles/textReveal'

type Props = {
  focusId: number
  inView: boolean
}

export const StepBar = ({ focusId, inView }: Props) => {
  return (
    <_Wrap>
      <_RevealWrap inView={inView}>
        <_Work1 isActive={focusId === 1} />
        <_Work2 isActive={focusId === 2} />
        <_Work3 isActive={focusId === 3} />
        <_Work4 isActive={focusId === 4} />
        <_Work5 isActive={focusId === 5} />
      </_RevealWrap>
    </_Wrap>
  )
}

const Rect = styled.div`
  width: 14px;
  height: 58px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  transition: all 0.7s;
`

const _Wrap = styled.div`
  position: fixed;
  z-index: 1;
  top: 20%;
  right: 4%;
  transform: translateY(-20%);

  * + * {
    margin-top: 10px;
  }

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`

const _RevealWrap = styled.div<{ inView: boolean }>`
  width: 20px;
  height: 350px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
    ${(props) =>
      props.inView
        ? css`
            animation: 0.5s ${RevealFromTop} forwards;
          `
        : css`
            animation: 0.5s ${HiddenFromBtm} forwards;
          `}
  }
`

const _Work1 = styled(Rect)<{ isActive: boolean }>`
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work2 = styled(Rect)<{ isActive: boolean }>`
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work3 = styled(Rect)<{ isActive: boolean }>`
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work4 = styled(Rect)<{ isActive: boolean }>`
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work5 = styled(Rect)<{ isActive: boolean }>`
  ${(props) => props.isActive && 'background-color: #FFF;'}
`
