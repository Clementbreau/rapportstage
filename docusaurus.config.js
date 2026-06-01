module.exports = {
  noIndex: true,
  title: 'Bilan de Compétences',
  tagline: 'BUT Info 2A – Année universitaire',
  url: 'https://clementbreau.github.io',           // 1. ✅ Modifié "Clementbreau" par "clementbreau" (tout en minuscules)
  baseUrl: '/rapportstage/',                        
  onBrokenLinks: 'throw',
  favicon: 'img/lr.ico',
  organizationName: 'Clementbreau',                 
  projectName: 'rapportstage',                       
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
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Clementbreau/rapportstage/edit/main/',  
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
            // 2. ✅ Liens corrigés (Docusaurus s'occupe tout seul du préfixe /rapportstage/)
            { label: 'Accueil', to: '/' }, 
            { label: 'Présentation', to: '/presentation' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Bilan de Compétences`,
    },
  },
};