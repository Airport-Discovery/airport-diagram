/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';

import logo from './logo.svg';
import 'purecss/build/pure.css';
import './main.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  MXP: require('./intro/mxp'),
  Demo: require('./demo'),
  Airport: require('../src/components/Airport'),
  Runway: require('../src/components/Runway'),
  RunwayId: require('../src/components/RunwayId'),
};
const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./intro/intro.md')),
  },
  {
    path: '/demo',
    title: 'Demo',
    content: pageLoader(() => import('./demo/demo.md')),
  },
  {
    path: '/installaton-usage',
    title: 'Installation & Usage',
    content: pageLoader(() => import('./installationUsage/installationUsage.md')),
  },
  {
    path: '/components',
    title: 'Components',
    content: pageLoader(() => import('./components/components.md')),
  },
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/Airport-Discovery/airport-diagram"
      bannerColor="#fff"
      octoColor="#033d55"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: (props) => <CodeSpecimen {...props} lang="javascript" />,
        js: (props) => <CodeSpecimen {...props} lang="javascript" />,
        jsx: (props) => <ReactSpecimen {...props} />,
      }}
      title="Airport Diagram"
      logoSrc={logo}
      theme={{
        pageHeadingBackground: '#033d55',
      }}
    />
  </div>,
  document.getElementById('catalog')
);
