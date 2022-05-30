// import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DataGoogleApi, ytVideo } from '../@types/types'
import SimpleCart from '../components/assets/SimpleCart'
import Menu from '../components/Header/menu/Menu'

type IProps = {
  dataYT: DataGoogleApi
}

const Home = (props: IProps) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        {/* <section>
          {props.dataYT.items
            ?.filter(tem => tem.id.kind === 'youtube#video')
            .map((vid: ytVideo) => (
              <SimpleCart key={`${vid.etag}${vid.id.videoId}`} {...vid} />
            ))}
        </section> */}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

// export const getStaticProps: GetStaticProps = async context => {
//   const TIME_VALIDATE = 43200
//   const { NEXT_PUBLIC_API_LOCAL } = process.env
//   const { dataYT } = await fetch(`${NEXT_PUBLIC_API_LOCAL|| 'http://localhost:3000/api/cast'}`).then(res =>
//     res.json()
//   )
//   return {
//     props: { dataYT },
//     revalidate: TIME_VALIDATE
//   }
// }