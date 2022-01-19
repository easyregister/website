import Link from 'next/link';
import React from 'react';
import LinkGroup, { LinkGroupProps } from './LinkGroup';

const links: LinkGroupProps[] = [
  {
    title: 'Socials',
    links: [
      { title: 'Contact Us', url: 'mailto:contact@easyregister.it' },
      { title: 'GitHub', url: 'https://github.com/easyregister' }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'Who we are', url: '/' }
    ]
  },
  {
    title: "Product",
    links: [
      { title: "Features", url: '/features' },
      { title: "Pricing", url: '/' },
      { title: "Status", url: 'https://status.easyregister.it' },
    ]
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-10 border-t-4 border-logo">
      <div className="container mx-auto">
        <div className="text-white grid grid-cols-3 justify-items-end mb-5">
          {links.map((l, i) => <LinkGroup title={l.title} links={l.links} key={i} />)}
        </div>
        <div className="flex justify-between">
          <Link href="/"><a><span className="text-white font-logo text-3xl">easy register</span></a></Link>
          <a href="https://app.easyregister.it"><button className="bg-white text-black rounded py-3 px-5 hover:shadow-lg">Request access</button></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;