import styled, { css } from 'styled-components'

type Props = {
  focusId: number
}

export const Pagination = ({ focusId }: Props) => {
  return (
    <_Wrap>
      <_Work1 isActive={focusId === 1} />
      <_Work2 isActive={focusId === 2} />
      <_Work3 isActive={focusId === 3} />
      <_Work4 isActive={focusId === 4} />
      <_Work5 isActive={focusId === 5} />
    </_Wrap>
  )
}

const rectStyle = css`
  width: 14px;
  height: 58px;
  border: 1px solid ${({ theme }) => theme.colors.white};
`

const _Wrap = styled.div`
  * + * {
    margin-top: 10px;
  }
`

const _Work1 = styled.div<{ isActive: boolean }>`
  ${rectStyle}
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work2 = styled.div<{ isActive: boolean }>`
  ${rectStyle}
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work3 = styled.div<{ isActive: boolean }>`
  ${rectStyle}
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work4 = styled.div<{ isActive: boolean }>`
  ${rectStyle}
  ${(props) => props.isActive && 'background-color: #FFF;'}
`

const _Work5 = styled.div<{ isActive: boolean }>`
  ${rectStyle}
  ${(props) => props.isActive && 'background-color: #FFF;'}
`
