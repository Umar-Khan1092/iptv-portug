import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const assetsDir = path.join(distDir, 'assets');

// Find the CSS file
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(file => file.endsWith('.css'));

if (cssFile) {
  const cssPath = path.join(assetsDir, cssFile);
  const cssContent = fs.readFileSync(cssPath, 'utf-8');

  let htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Replace the <link rel="stylesheet"> with <style>
  const linkRegex = new RegExp(`<link[^>]*href="\/assets\/${cssFile}"[^>]*>`);
  htmlContent = htmlContent.replace(linkRegex, `<style>${cssContent}</style>`);

  fs.writeFileSync(indexHtmlPath, htmlContent, 'utf-8');
  console.log(`Inlined ${cssFile} into index.html`);
  
  // Optionally delete the CSS file
  fs.unlinkSync(cssPath);
} else {
  console.log('No CSS file found.');
}
