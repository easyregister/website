import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Register</title>
      </Head>
      <main className="container mx-auto flex flex-col h-screen items-center justify-center gap-10">
        <span className="font-title text-5xl text-center">
          We are building the easy-to-use school register, because the school of the future is today.
        </span>

        <a href="https://app.easyregister.it"><button className="bg-indigo-500 text-white rounded py-3 px-5 shadow-lg">Beta testers login</button></a>
      </main>
    </>
  )
}

export default Home
