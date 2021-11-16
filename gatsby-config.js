require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-incremental",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-contentstack",
      options: {
        'api_key': process.env.API_KEY,
        'delivery_token': process.env.DELIVERY_TOKEN,
        'environment': process.env.ENVIRONMENT,
        'enableSchemaGeneration': true,
        'expediteBuild': true,
        'type_prefix': `cs`
      }
    },
  ],
};
