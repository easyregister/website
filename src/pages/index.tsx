import type { NextPage } from 'next'
import Head from 'next/head'
import { ArrowRight } from 'react-feather'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Register</title>
      </Head>
      <main className="relative container mx-auto flex flex-col h-screen items-center justify-center gap-10">
        <span className="font-title text-5xl text-center">
          It&apos;s time to go <Logo className="text-6xl">easy</Logo> on online schooling. <br />
          The new <Logo className="text-6xl">register</Logo> for the schools of tomorrow is here.
        </span>

        <div className="absolute bottom-20 flex flex-col gap-2 items-center">
          <a href="https://app.easyregister.it">
            <button className="bg-indigo-500 text-white rounded py-3 px-5 shadow-lg">Beta Testers Login</button>
          </a>

          <a href="mailto:contact@easyregister.it?subject=Request%20access%20to%20Easy%20Register">
            <button className="border-2 border-indigo-500 rounded flex items-center p-3">
              <ArrowRight className="mr-2" />
              Request access
            </button>
          </a>
        </div>
      </main>
      <section className="mx-auto px-6 mt-10 min-h-screen container">
        <h1 className="text-4xl font-bold">What is <Logo className="text-5xl" />?</h1>
        <p>Easy Register is the school register of the future. It has been reinvented from scratch, to solve all the issues and missing features from the other registers</p>
      </section>
      <Footer />
    </>
  )
}

export default Home
