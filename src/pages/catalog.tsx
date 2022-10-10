import type { NextPage } from 'next'
import Head from 'next/head'

import { Pagination } from '@/components/molecules/Pagination'
import { Work } from '@/components/organisms/Work'

const Catalog: NextPage = () => {
  return (
    <>
      <Head>
        <title>カタログ｜芸工祭2022</title>
      </Head>

      <Work />
      <Pagination focusId={3} />
    </>
  )
}

export default Catalog
