# PostHog post-wizard report

The wizard has completed a PostHog integration for the DevEvent app. The following changes were made:

- Created `instrumentation-client.ts` at the project root to initialize PostHog client-side using the Next.js 15.3+ instrumentation pattern.
- Updated `next.config.ts` to add reverse proxy rewrites routing `/ingest/*` traffic through Next.js to PostHog, reducing ad-blocker interference.
- Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.local`.
- Added `explore_events_clicked` capture to `components/ExploreBtn.tsx` when users click the "Explore Events" button.
- Added `event_card_clicked` capture to `components/EventCard.tsx` when users click on any event card, including the event title, location, slug, and date as properties.

| Event | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" button on the homepage to scroll down to the events list | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view the event detail page; includes `event_title`, `event_slug`, `event_location`, and `event_date` properties | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/473284/dashboard/1720833)
- [Explore Events button clicks (wizard)](https://us.posthog.com/project/473284/insights/soE8Ws4x)
- [Event card clicks (wizard)](https://us.posthog.com/project/473284/insights/HPD6jLai)
- [Unique users engaging with events (wizard)](https://us.posthog.com/project/473284/insights/xby4jU6m)
- [Homepage engagement overview (wizard)](https://us.posthog.com/project/473284/insights/81eiEi9D)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
