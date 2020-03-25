module.exports = {
  siteMetadata: {
    title: `Restaurant Marketing Hawaii`,
    description: `Restaurant Marketing Hawaii is a full-service digital marketing agency. Running a restaurant is your passion, marketing your restaurant is ours. Better branding. Better results.`,
    author: `@restaurantmarketinghawaii`,
    image: "/restaurant-marketing-hawaii.png",
    siteURL: "https://restaurantmarketinghawaii.netlify.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-118443497-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rmh-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/"],
        excludePaths: ["/contact/sign-up"],
        height: 4,
        prependToBody: false,
        color: `#5cb2d2`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `600`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
