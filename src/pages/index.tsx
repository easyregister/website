import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Register</title>
      </Head>
      <main className="flex h-screen items-center justify-center">
        We are building the easy-to-use school register, because the future is today.
      </main>
    </>
  )
}

export default Home
