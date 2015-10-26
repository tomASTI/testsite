var sm = require('sitemap');
var fs = require('fs');

var sitemap = sm.createSitemap ({
  hostname: 'http://example.com',
  cacheTime: 600000
});

sitemap.add({url: '/page-1/'});
sitemap.add({url: '/page-2/', changefreq: 'monthly', priority: 0.7});
sitemap.del({url: '/page-2/'});
sitemap.del('/page-1/');

console.log('hello');