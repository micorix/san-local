module.exports = {
  siteMetadata: {
    title: `San Local`,
    description: `Wyszukiwarka lokalnych biznesów gastronomicznych.`,
    author: `micorix`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "San Local",
        short_name: "SanLocal",
        start_url: "/",
        background_color: "#CD3333",
        theme_color: "#CD3333",
        display: "standalone",
        icon: "src/images/hamburger.svg"
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`, `latin-ext`],
          },
          {
            family: `Roboto Mono`,
            subsets: [`latin`, `latin-ext`],
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
