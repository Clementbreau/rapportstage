module.exports = {
  noIndex: true,
  title: 'Bilan de Compétences',
  tagline: 'BUT Info 2A – Année universitaire',
  url: 'https://Clementbreau.github.io',           // URL GitHub Pages
  baseUrl: '/rapportstage/',                        // Nom du repo
  onBrokenLinks: 'throw',
  favicon: 'img/lr.ico',
  organizationName: 'Clementbreau',                 // Ton org ou nom GitHub
  projectName: 'rapportstage',                       // Nom du repo
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Accueil à la racine
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Clementbreau/rapportstage/edit/main/',  // Lien vers édition
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
            { label: 'Accueil', to: '/rapportstage/' },
            { label: 'Présentation', to: '/rapportstage/presentation' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Bilan de Compétences`,
    },
  },
};