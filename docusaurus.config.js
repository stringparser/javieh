// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'javieh.es',
  tagline: 'Freelance Software Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stringparser', // Usually your GitHub org/user name.
  projectName: 'javieh.es', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

  themes: [
    '@docusaurus/theme-live-codeblock',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl:
            'https://github.com/javieh.es/javieh.es/tree/main/docs/',
        },
        blog: {
          postsPerPage: 10,
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/javieh.es/javieh.es/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',

      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'J_',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png'
        },
        items: [
          {
            to: '/music', 
            label: 'Music', 
            position: 'left'
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: 'https://stringparser.github.io/cv', 
            label: 'CV', 
            position: 'right'
          },
          {
            href: 'https://github.com/stringparser/javieh',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/stringparser',
              },
              {
                label: 'Ritual Reunion (bandcamp)',
                href: 'https://ritualreunion.bandcamp.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Javier Carrillo Milla. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
