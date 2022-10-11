import type { NextPage } from 'next'
import Head from 'next/head'

import { IndexLayout } from '@/components/templates/indexLayout'
import { workContent } from '@/type/workType'
import data from '@/data/workData.json'

const Home: NextPage = () => {
  const worksData: workContent[] = data.works

  return (
    <>
      <Head>
        <title>ゲーム｜芸工祭2022</title>
      </Head>

      <IndexLayout worksData={worksData} />
    </>
  )
}

export default Home
