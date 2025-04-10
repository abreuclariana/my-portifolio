/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://clarianaabreu.dev', // Troca pelo seu domínio
    generateRobotsTxt: true, // Gera o robots.txt automaticamente
    sitemapSize: 7000,
    changefreq: 'monthly',
    priority: 0.7,
    exclude: ['/404', '/_error'], // evita incluir páginas internas
  };
  