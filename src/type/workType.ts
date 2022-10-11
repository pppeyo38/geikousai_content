export type workContent = {
  title: string
  ja: boolean
  thumnail: string
  creator: string
  creator2?: string
  outline: string
  link: string
  onlyPC?: boolean
}

export type worksDataProps = {
  worksData: workContent[]
}
