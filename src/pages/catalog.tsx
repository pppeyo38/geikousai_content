import type { NextPage } from 'next'
import Head from 'next/head'

import { TitleEn } from '@/components/atoms/text/TitleEn'
import { TitleJa } from '@/components/atoms/text/TitleJa'
import { Text } from '@/components/atoms/text/Text'
import { Creator } from '@/components/atoms/text/Creator'
import { LinkButton } from '@/components/atoms/button/LinkButton'

const Catalog: NextPage = () => {
  return (
    <>
      <Head>
        <title>カタログ｜芸工祭2022</title>
      </Head>

      <TitleEn>Please work! My camera!</TitleEn>
      <TitleJa>北千種さんとの芸工祭</TitleJa>
      <Text>
        あいうえおあいうえおあいうえお あいうえおあいうえおあいうえお
        あいうえおあいうえおあいうえお あいうえお
      </Text>
      <Creator>3M hiremori / 3M morikoro</Creator>
      <LinkButton />
    </>
  )
}

export default Catalog
