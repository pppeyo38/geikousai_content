import styled from 'styled-components'

type Props = {
  focusId: number
  isHidden: boolean
}

export const StepBar = ({ focusId, isHidden }: Props) => {
  return (
    <_Wrap isHidden={isHidden}>
      <_Work1 isActive={focusId === 1} />
      <_Work2 isActive={focusId === 2} />
      <_Work3 isActive={focusId === 3} />
      <_Work4 isActive={focusId === 4} />
      <_Work5 isActive={focusId === 5} />
    </_Wrap>
  )
}

const Rect = styled.div`
  width: 14px;
  height: 58px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  transition: all 0.7s;
`

const _Wrap = styled.div<{ isHidden: boolean }>`
  position: fixed;
  z-index: 1;
  top: 20%;
  right: 4%;
  transform: translateY(-20%);
  opacity: 0;
  overflow: hidden;
  opacity: ${(props) => (props.isHidden ? '0' : '1')};
  transition: all 0.3s;

  * + * {
    margin-top: 10px;
  }

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
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
