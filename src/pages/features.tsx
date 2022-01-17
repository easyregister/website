import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';

const FeaturesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Features | Easy Register</title>
      </Head>
      <div className="bg-logo text-white p-8 py-32">
        <h1 className="font-title text-6xl mb-8">The <span className="font-logo text-7xl">easy</span> to use features</h1>
        <span className="text-lg">Discover all the features that Easy Register can offer you.</span>
      </div>
      {/* <div>
        <h2 className="font-title text-5xl">Dark mode</h2>
        <span>Adapts to every hour of the day</span>
      </div> */}
      <div className="h-screen" />
      <Footer />
    </>
  );
};

export default FeaturesPage;