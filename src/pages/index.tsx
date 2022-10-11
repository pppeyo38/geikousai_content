import type { NextPage } from 'next'
import Head from 'next/head'

import { IndexLayout } from '@/components/templates/indexLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ゲーム｜芸工祭2022</title>
      </Head>

      <IndexLayout />
    </>
  )
}

export default Home
