# Orientation Keys

A 50-question cognitive orientation assessment for entrepreneurs and freelancers. Discover your natural work patterns and build a business aligned with how you actually think.

## Features

- **50-Question Assessment** — Randomized questions with 4-point slider (no neutral option)
- **16 Archetypes** — Unique profiles based on 4 cognitive dimensions
- **Section Insights** — Micro-insights between sections showing partial results
- **Tabbed Results** — Overview, Life Areas, and Growth Path tabs
- **Email Capture** — Collect emails before revealing results
- **Mobile Responsive** — Fully responsive design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd orientation-keys

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Railway

1. Push your code to GitHub
2. Connect your Railway account to GitHub
3. Create a new project from your repository
4. Railway will auto-detect Next.js and configure the build
5. The `start` script uses `$PORT` environment variable for Railway compatibility

### Environment Variables (Optional)

No environment variables are required for basic functionality.

For future email integration, you may add:
- `DATABASE_URL` — For storing assessment results
- `SMTP_*` — For email notifications

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── assessment/
│   │   └── page.tsx             # Assessment flow
│   └── results/
│       ├── capture/
│       │   └── page.tsx         # Email capture
│       └── [code]/
│           └── page.tsx         # Results page
├── components/
│   ├── ui/                      # Reusable UI components
│   └── assessment/              # Assessment-specific components
├── hooks/
│   └── useAssessment.ts         # Zustand store
├── lib/
│   ├── questions.ts             # All 50 questions
│   ├── archetypes.ts            # 16 archetype definitions
│   └── scoring.ts               # Scoring logic
└── types/
    └── index.ts                 # TypeScript types
```

## The 16 Archetypes

| Code | Name |
|------|------|
| LLLL | The Strategic Architect |
| RRRR | The Intuitive Flow |
| LLLR | The Grounded Visionary |
| LLRL | The Systems Seer |
| LRLL | The Quiet Strategist |
| RLLL | The Adaptive Anchor |
| LLRR | The Strategic Mystic |
| RRLL | The Grounded Intuitive |
| LRLR | The Rhythm Keeper |
| RLRL | The Dynamic Weaver |
| LRRL | The Bridge Builder |
| RLLR | The Engaged Explorer |
| LRRR | The Anchored Mystic |
| RLRR | The Visible Intuitive |
| RRLR | The Observant Strategist |
| RRRL | The Sacred Witness |

## License

© 2024 Orientation Keys — All rights reserved.
