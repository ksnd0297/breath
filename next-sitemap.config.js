/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://justbreathingincome.vercel.app/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "never",
  priority: 1,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
