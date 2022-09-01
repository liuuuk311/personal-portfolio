module.exports = {
  siteMetadata: {
    title: `Luca's Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-V67ZG3S9N7"
      ],
    },
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-mdx", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    "gatsby-plugin-preact",
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [
        require(`postcss-preset-env`)({ stage: 0 }),
        require("postcss-import"),
        require("postcss-nested"),
        require("postcss-discard-comments"),
      ],
    },
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true,
      develop: true,
      tailwind: true,
      ignore: [

      ],
      purgeCSSOptions: {
        safelist: ["ol", "ul"],
      },
    },
  }]
};