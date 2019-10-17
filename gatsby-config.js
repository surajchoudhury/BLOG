module.exports = {
  siteMetadata: {
    title: `BLOG by Itzsunny`,
    name: `Narative`,
    siteUrl: `https://itzsunny.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to my BLOG, a learner .`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/itz_sunny007`,
      },
      {
        name: `github`,
        url: `https://github.com/itzsunny`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/itz_sunny_007_

        `,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
