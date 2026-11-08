# AI Agents Explained

A minimal Astro website with Home, Articles, and About pages. Includes one published AI Agent article and a profile photo. No roadmap, future-content schedule, or private progress information.

## GitHub Pages deployment

Repository: `Jeyapandi-git/AI-Agents-Explained`

1. Upload **the contents of this folder** to the repository root, preserving `.github/workflows/deploy.yml`.
2. If an older website version is in the repository, remove old `src/pages/videos`, `src/pages/projects`, `src/pages/roadmap` files and other old pages you do not want publicly visible. Remove any old `src/components`, `src/data`, or `src/styles` files not in this package. Do not delete GitHub's repository settings or history.
3. In GitHub, open **Settings → Pages → Build and deployment**, and select **GitHub Actions**.
4. Open **Actions** and check **Deploy Astro to GitHub Pages**. The workflow runs on commits to `main` and can also be run manually.
5. After a successful run, open https://jeyapandi-git.github.io/AI-Agents-Explained/

## Publish another article

Create a Markdown file in `src/content/blog/` with `title`, `description`, and `pubDate` frontmatter. Commit to `main` to redeploy.

## Local preview

Install Node.js 22 or later, then run `npm install`, `npm run dev`, or `npm run build`.

The website's source is public. Do not commit private plans or personal information you don't intend to publish.

## Publication date and time
Each Markdown post has `pubDate` in its frontmatter. A date-only value like `2026-11-09` displays **Published November 9, 2026**. This avoids inventing a time.

To display the actual publication time, change the frontmatter to an ISO 8601 timestamp with a timezone offset and set `hasPublicationTime: true`:

```yaml
pubDate: 2026-11-09T14:30:00+08:00
hasPublicationTime: true
```

Use the **actual** publication time; the timestamp above is only an example. The website formats timestamps in Philippine Time (PHT). Date/time is shown on the home page, articles listing, and individual article pages.

## Article navigation

The Home and Articles pages automatically list published Markdown articles, newest first. Visitors can search article titles, descriptions, and categories. Category filters appear automatically once articles exist in more than one category. No manual navigation updates are required.

Publication dates display without times. For each new article, set `pubDate: YYYY-MM-DD` and `category: "Topic"` in the Markdown frontmatter.

## Article sidebar
The homepage, article index, and individual article pages use a left-hand Browse Articles sidebar. New Markdown posts appear automatically, grouped by their `category` metadata. On mobile the sidebar becomes an expandable Browse Articles menu.
