import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="./favicon.ico" />
          <meta property="og:title" content="芸工祭2022 ゲームサイト" />
          <meta
            property="og:url"
            content="https://geikousai-ncu.com/2022/game"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="名古屋市立大学芸術工学部の大学祭、芸工祭2022『GOOOON』で制作したゲームサイトです。ぜひプレイしてみてください！"
          />
          <meta property="og:site_name" content="芸工祭2022 ゲームサイト" />
          <meta
            property="og:image"
            content="https://geikousai-ncu.com/2022/game/images/ogp.png"
          />
          <meta
            name="keywords"
            content="芸工祭,芸工祭2022,名古屋市,芸術工学,名古屋市立大学,GOOOON,ぐーん,グーン,ゴーオン,ゲーム"
          />
          <meta
            name="description"
            content="名古屋市立大学芸術工学部の大学祭、芸工祭2022『GOOOON』で制作したゲームサイトです。ぜひプレイしてみてください！"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="芸工祭2022 ゲームサイト" />
          <meta
            name="twitter:description"
            content="名古屋市立大学芸術工学部の大学祭、芸工祭2022『GOOOON』で制作したゲームサイトです。ぜひプレイしてみてください！"
          />
          <meta
            name="twitter:image"
            content="https://geikousai-ncu.com/2022/game/images/ogp.png"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(d) {
                  var config = {
                    kitId: 'kni7exa',
                    scriptTimeout: 3000,
                    async: true
                  },
                  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                })(document);
              `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
