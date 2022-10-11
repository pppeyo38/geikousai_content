import type { NextPage } from 'next'
import Head from 'next/head'

import { Pagination } from '@/components/molecules/Pagination'
import { Work } from '@/components/organisms/Work'

import data from '@/data/workData.json'

const Catalog: NextPage = () => {
  const workData = data.works

  return (
    <>
      <Head>
        <title>カタログ｜芸工祭2022</title>
      </Head>

      {workData.map((item, index) => (
        <Work
          key={index}
          title={item.title}
          ja={item.ja}
          thumnail={item.thumnail}
          creator={item.creator}
          creator2={item.creator2}
          outline={item.outline}
          link={item.link}
        />
      ))}
      <Pagination focusId={3} />
    </>
  )
}

export default Catalog
