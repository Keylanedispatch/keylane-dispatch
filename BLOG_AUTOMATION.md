# KeyLane Dispatch Automated Trucking News Journal

## Purpose

A version-controlled U.S. trucking industry journal that publishes original, useful owner-operator context only when a timely, relevant, low-risk story qualifies. The main website is https://keylanedispatch.com and articles appear at /blog.

## Automatic publishing workflow

- Workflow: `.github/workflows/auto-blog.yml`, scheduled daily at 13:23 UTC (and manually callable).
- Generator: `scripts/auto-blog.mjs`.
- Trusted source feeds: FreightWaves (https://www.freightwaves.com/feed) and Transport Topics (https://www.ttnews.com/rss.xml).
- News-selection filters: age 5 days or less, U.S. freight/trucking relevance, practical market context, source domain verified, no duplicate source URLs.
- Safety gate: skip regulatory, legal, enforcement, collision, fatality, fraud, recall, or other high-stakes topics rather than making unreviewed compliance claims.
- Pace: at most one article per day and two in a calendar week; days without genuinely useful news publish nothing.
- AI model writes original interpretation and practical questions from the RSS headline and short description only. It is explicitly told not to invent facts, figures, regulations, or quotes. The generator checks minimum article structure and word count; poorly formed content is skipped.
- Articles save as static JSON in `content/blog/` and commit to GitHub `main` only when a draft passes automated quality gates.
- Vercel deploys the resulting commit, which adds the article to the /blog list and sitemap.
- Original news article is linked and credited. Full source articles are not republished, source photos are not downloaded or copied, and generated articles include a clear AI-assistance disclosure.
- IndexNow GitHub workflow notifies Bing when content changes after deployment.

## One-time activation

This system is installed but will not generate articles until a valid API key is added privately to GitHub:

1. Open https://github.com/Keylanedispatch/keylane-dispatch/settings/secrets/actions
2. Click **New repository secret**.
3. Name: `OPENAI_API_KEY`.
4. Value: an API key from https://platform.openai.com/api-keys (API usage may have separate charges from ChatGPT subscriptions).
5. Save the secret.
6. In https://github.com/Keylanedispatch/keylane-dispatch/actions choose **KeyLane Automatic Trucking News Blog** and **Run workflow** to test the pipeline.
7. Monitor the workflow logs for an eligible news candidate, generated content, and successful push. If no useful story qualifies, the correct result is no publication.

Never paste the API key in a public issue, chat, or repository file. The GitHub secret is the sole required external credential; it is accessible to the scheduled GitHub Actions workflow.

## Quality limitations

Automated fact checks and source filters reduce risk but cannot guarantee factual accuracy or meaningful analysis. AI-generated text can be wrong. For regulations, safety obligations, legal changes, or other consequential updates, keep a human editorial review process and rely on primary government documents. Do not treat this workflow as a substitute for reporting.

This is not intended as a mass article generator, backlink scheme, or duplicate news syndicator. Google warns against scaled content abuse and encourages useful, original content. Monitor article quality, Google Search Console performance and user engagement. Pause automation if quality declines.

## Editing or stopping

- Edit any `content/blog/*.json` entry to correct an article, or delete it to unpublish (automatically reflected in sitemap after deployment).
- Disable the workflow in GitHub Actions to pause all future auto-publication.
- Change the `WEEKLY_MAX` constant in the generator to adjust the publishing cap.
- Use `node scripts/auto-blog.mjs --dry-run` locally to test source selection without making AI API calls or publishing.

## Initial state

The journal page and automation are deployed once Vercel finishes building. No automatically generated articles should be treated as published until the API secret is configured and a workflow commits a passing article. Empty /blog is marked noindex; after publication the archive becomes indexable and the sitemap includes its canonical URL.

## Supporting sources

- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://www.ttnews.com/permissions-policies
