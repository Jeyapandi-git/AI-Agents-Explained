# AI Agents Explained — GitHub Pages website

A focused, public educational website with **Home**, **Blog**, and **About** pages. The first article, **What Is an AI Agent? Explained With Real-Life Examples**, is included. No personal learning plan, publishing calendar, or future project roadmap appears on the public site.

## Deploy to GitHub Pages

1. Create or open the public repository `Jeyapandi-git/AI-Agents-Explained`.
2. Upload the **contents** of this project folder to the repository root, including the hidden `.github/workflows/deploy.yml` file. Do not upload the ZIP as a single file.
3. If you uploaded an earlier version, **delete the old `src/pages/roadmap.astro`, `src/pages/videos/index.astro`, and `src/pages/projects/index.astro` files from GitHub**; uploading new files does not automatically remove old ones.
4. Open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Push or commit to the `main` branch. Watch the **Actions** tab for the deployment result.
6. Once deployment succeeds, visit https://jeyapandi-git.github.io/AI-Agents-Explained/ .

The Astro base path is set to `/AI-Agents-Explained` and the site URL to `https://jeyapandi-git.github.io`.

## Run locally

Install Node.js 20.19+ (or a supported newer version), then:

```bash
npm install
npm run dev
npm run build
```

## Publish your next article when you are ready

Add a Markdown file to `src/content/blog/` with `title`, `description`, `pubDate`, `category`, and `readingTime` frontmatter. Commit the change to trigger redeployment. There is no public schedule.

## Video embedding (optional, later)

When your first YouTube video is live, you can embed it in its companion Markdown article using the YouTube privacy-enhanced embed URL. Until then, the first article is a standalone written post.

## Privacy

The public site does not disclose your private learning roadmap or intended posting frequency. GitHub repositories are public by design: committed source files and history are visible. Avoid committing private plans, credentials, unpublished material, or confidential work information.
