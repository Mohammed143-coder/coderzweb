/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.coderzweb.in', // REQUIRED
  generateRobotsTxt: true,               // generates robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
