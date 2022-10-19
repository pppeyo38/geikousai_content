export type WorkContent = {
  title: string
  ja: boolean
  thumnail: string
  color: string
  creator: string
  creator2?: string
  outline: string
  link: string
  onlyPC?: boolean
}

export type WorksDataProps = {
  worksData: WorkContent[]
}
