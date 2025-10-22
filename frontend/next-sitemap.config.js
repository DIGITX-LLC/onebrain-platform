// next-sitemap.js
module.exports = {
  siteUrl: 'https://onebrain.app',
  generateRobotsTxt: true,
  // optional: customize robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
