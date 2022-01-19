import React from 'react';
import Link from 'next/link';

export interface ILink {
  title: string;
  url: string;
};

export type LinkGroupProps = {
  title: string;
  links: ILink[];
};

const LinkGroup: React.FC<LinkGroupProps> = ({ title, links }) => {
  return (
    <div>
      <ul className="text-right">
        <li className="text-lg font-title">{ title }</li>
        { links.map((l, i) => (
          <li key={i}>
            { l.url.startsWith('http') ? (
              <a href={l.url} target="_blank" rel="noreferrer">{l.title}</a>
            ) : (
              <Link href={l.url}>
                <a>{l.title}</a>
              </Link>
            )}
          </li>
        )) }
      </ul>
    </div>
  );
};

export default LinkGroup;