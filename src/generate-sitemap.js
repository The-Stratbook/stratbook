// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

// Function to read all JSON files in a directory
const readJsonFiles = (directory) => {
  const files = fs.readdirSync(directory);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(directory, file);
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    });
};

async function generateSitemap() {
  try {
    // Create a sitemap stream with your actual domain
    const smStream = new SitemapStream({ hostname: 'https://thestratbook.com' });
    
    // Add static routes
    smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    smStream.write({ url: '/siege/tips', changefreq: 'daily', priority: 0.9 });
    smStream.write({ url: '/terms-of-service', changefreq: 'monthly', priority: 0.3 });
    smStream.write({ url: '/privacy-policy', changefreq: 'monthly', priority: 0.3 });
    smStream.write({ url: '/cookie-policy', changefreq: 'monthly', priority: 0.3 });
    
    // Add all tip pages
    const tipsDirectory = path.join(__dirname, '../public/data/siege/tips');
    const strategies = readJsonFiles(tipsDirectory);
    strategies.forEach(tip => {
      smStream.write({
        url: `/siege/tip/${tip.id}`,
        changefreq: 'weekly',
        priority: 0.7,
        // Add lastmod if your tips have a last modified date
        ...(tip.lastModified && { lastmod: new Date(tip.lastModified).toISOString() })
      });
    });
    
    // End the stream
    smStream.end();
    
    // Generate the XML
    const sitemap = await streamToPromise(smStream);
    fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();