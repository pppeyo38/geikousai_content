import type { NextPage } from 'next'
import Head from 'next/head'

import { TitleEn } from '@/components/atoms/TitleEn'
import { TitleJa } from '@/components/atoms/TitleJa'

const Catalog: NextPage = () => {
  return (
    <>
      <Head>
        <title>カタログ｜芸工祭2022</title>
      </Head>

      <TitleEn>Please work! My camera!</TitleEn>
      <TitleJa>北千種さんとの芸工祭</TitleJa>
    </>
  )
}

export default Catalog