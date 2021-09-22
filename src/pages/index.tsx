import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Register</title>
      </Head>
      <main className="flex flex-col h-screen items-center justify-center gap-5">
        We are building the easy-to-use school register, because the future is today.

        <a href="https://app.easyregister.it"><button className="bg-indigo-500 text-white rounded py-3 px-5 shadow">Go to the app</button></a>
      </main>
    </>
  )
}

export default Home
