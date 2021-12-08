import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Register</title>
      </Head>
      <main className="relative container mx-auto flex flex-col h-screen items-center justify-center gap-10">
        <span className="font-title text-5xl text-center">
          It&apos;s time to go <span className="font-logo text-logo text-6xl">easy</span> on online schooling. <br />
          The new <span className="font-logo text-logo text-6xl">register</span> for the schools of tomorrow is here.
        </span>

        <div className="absolute bottom-20">
          <a href="https://app.easyregister.it"><button className="bg-indigo-500 text-white rounded py-3 px-5 shadow-lg">Request access</button></a>
        </div>
      </main>
      <section className="min-h-screen">
        <h1>What is Easy Register?</h1>
        <p>Easy Register is the school register of the future. It has been reinvented from scratch, to solve all the issues and missing features from the other registers</p>
      </section>
    </>
  )
}

export default Home
