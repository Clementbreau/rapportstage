// docusaurus.config.js
module.exports = {
  noIndex: true,
  title: 'Bilan de Compétences',
  tagline: 'BUT Info 2A – Année universitaire',
  url: 'https://bilanbutinfo.github.io',           // ⚠️ Mets à jour l'URL si tu changes de repo
  baseUrl: '/bilanbutinfo/',                       // ⚠️ Nouveau nom de projet
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/lr.ico',
  organizationName: 'Darcodemonpote',              // Ou ton org GitHub
  projectName: 'bilanbutinfo',                     // ⚠️ Doit correspondre au repo GitHub Pages

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Accueil à la racine
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Darcodemonpote/bilanbutinfo/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Bilan de Compétences',
      logo: {
        alt: 'Logo',
        src: 'img/lr.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Sommaire',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sommaire',
          items: [
            { label: 'Accueil', to: '/' },
            { label: 'Présentation', to: '/presentation' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Bilan de Compétences`,
    },
  },
};
