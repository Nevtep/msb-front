module.exports = {
  siteMetadata: {
    title: "Máxima Señales Binarias",
    titleTemplate: "%s · Líder en el mundo de opciones binarias",
    url: 'https://www.maximasenalesbinarias.com',
    author: "Tomás Corellano",
    description: "Sitio sobre trading de opciones binarias y forex. Proveedores de academias de trading, señales de operación en opciones binarias, y gestión de inversiones.",
    image: '/images/logo-msb.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'maxima-señales-binarias',
        short_name: 'maximaseñales',
        start_url: '/',
        background_color: '#8F5E33',
        theme_color: '#8F5E33',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo-msb.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
  ],
}
