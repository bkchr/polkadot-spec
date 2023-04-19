/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],


  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Index',
      id: 'polkadot-spec',
    },
    {
      type: 'doc',
      label: 'Polkadot Protocol',
      id: 'id-polkadot-protocol',
    },
    {
      type: 'category',
      label: 'Polkadot Host',
      link: {type:'doc', id:'part-polkadot-host'},
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'chap-overview',
        },
        {
          type: 'doc',
          label: 'States and Transitions',
          id: 'chap-state',
        },
        {
          type: 'doc',
          label: 'Synchronization',
          id: 'chap-sync',
        },
        {
          type: 'doc',
          label: 'Networking',
          id: 'chap-networking',
        },
        {
          type: 'doc',
          label: 'Block Production',
          id: 'sect-block-production',
        },
        {
          type: 'doc',
          label: 'Finality',
          id: 'sect-finality',
        },
        {
          type: 'doc',
          label: 'Light Clients',
          id: 'sect-lightclient',
        },
        {
          type: 'doc',
          label: 'Availability & Validity',
          id: 'chapter-anv',
        },
      ]
    },
    {
      type: 'category',
      label: 'Polkadot Runtime',
      link: {type:'doc', id:'part-polkadot-runtime'},
      items: [
        {
          type: 'doc',
          label: 'Extrinsics',
          id: 'id-extrinsics',
        },
        {
          type: 'doc',
          label: 'Weights',
          id: 'id-weights',
        },
        {
          type: 'doc',
          label: 'Consensus',
          id: 'id-consensus',
        },
        {
          type: 'doc',
          label: 'Metadata',
          id: 'sect-metadata',
        },
      ]
    },
    {
      type: 'doc',
      label: 'Appendix A: Cryptography & Encoding',
      id: 'id-cryptography-encoding',
    },
    {
      type: 'doc',
      label: 'Appendix B: Host API',
      id: 'chap-host-api',
    },
    {
      type: 'doc',
      label: 'Appendix C: Runtime API',
      id: 'chap-runtime-api',
    },
    {
      type: 'doc',
      label: 'Glossary',
      id: 'id-glossary',
    }
  ],
};

module.exports = sidebars;
