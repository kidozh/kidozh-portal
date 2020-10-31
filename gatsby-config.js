module.exports = {
  siteMetadata: {
    siteTitle: 'Kidozh Portal Page',
    siteUrl: 'https://kidozh.com',
    siteDescription: 'Kidozh\'s portal page including navigations for archives, projects and cv'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/sites/`,
        name: 'sites',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kidozh\'s portal page',
        short_name: 'kidozh portal',
        description:
          'Kidozh\'s portal page including navigations for archives, projects and cv',
        start_url: '/',
        background_color: '#191e38',
        theme_color: '#6574cd',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    // international support
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/i18n`,
        // supported language
        languages: [`en`, `zh`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true
      }
    },

  ],
}
