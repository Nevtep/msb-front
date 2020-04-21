module.exports = {
  siteMetadata: {
    title: "Máxima Señales Binarias",
    author: "Tomás Corellano",
    description: "A Gatsby.js Starter based on Photon by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'maxima-señales-binarias',
        short_name: 'maximaseñales',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo-msb.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
