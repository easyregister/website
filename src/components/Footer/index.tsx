import React from 'react';
import LinkGroup, { LinkGroupProps } from './LinkGroup';

const links: LinkGroupProps[] = [
  {
    title: "Product",
    links: [
      { title: "Features", url: '/' },
      { title: "Pricing", url: '/' },
      { title: "Status", url: 'https://status.pangio.it' },
    ]
  },
  {
    title: 'Socials',
    links: [
      { title: 'GitHub', url: 'https://github.com/easyregister' }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'Who we are', url: '/' }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto">
        <div className="text-white grid grid-cols-3 justify-items-end mb-5">
          {links.map((l, i) => <LinkGroup title={l.title} links={l.links} key={i} />)}
        </div>
        <div className="flex justify-between">
          <span className="text-white font-logo text-3xl">easy register</span>
          <a href="https://app.easyregister.it"><button className="bg-white text-black rounded py-3 px-5 hover:shadow-lg">Request access</button></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;