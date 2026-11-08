import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// For this repository, set PUBLIC_BASE=/AI-Agents-Explained
// For a username.github.io repository or a custom domain, set PUBLIC_BASE=/
const base = process.env.PUBLIC_BASE || '/AI-Agents-Explained';
const site = process.env.PUBLIC_SITE || 'https://jeyapandi-git.github.io';
export default defineConfig({ site, base, trailingSlash: 'always', integrations: [sitemap()] });
