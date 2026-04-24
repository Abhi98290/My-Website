import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Ensure dist/client exists
const distClient = join(rootDir, 'dist', 'client');
if (!existsSync(distClient)) {
  mkdirSync(distClient, { recursive: true });
}

// Find the built JS and CSS files
const assetsDir = join(distClient, 'assets');
const assets = readdirSync(assetsDir);

const jsFiles = assets.filter(f => f.endsWith('.js'));
const cssFiles = assets.filter(f => f.endsWith('.css'));

// Create production index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Abhishek Singhal - Full Stack Developer</title>
    <meta name="description" content="Portfolio of Abhishek Singhal — Full Stack Developer building real-time React Native, Node.js and PostgreSQL products." />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Styles -->
${cssFiles.map(f => `    <link rel="stylesheet" href="/assets/${f}">`).join('\n')}
  </head>
  <body>
    <div id="root"></div>
    
    <!-- Scripts -->
${jsFiles.map(f => `    <script type="module" src="/assets/${f}"></script>`).join('\n')}
  </body>
</html>`;

const indexDest = join(distClient, 'index.html');
writeFileSync(indexDest, indexHtml);
console.log('✓ Created production index.html with asset references');
console.log(`  - ${cssFiles.length} CSS file(s)`);
console.log(`  - ${jsFiles.length} JS file(s)`);

