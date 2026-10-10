# Little Droid

A cozy, interactive BB-8 nursery: a little peace of mind from a galaxy far, far away.

## Features

- Animated nursery with sleeping, idle, busy, and awake routines.
- An evolving generative lullaby and naturally spaced droid chirps.
- Random greetings and dozens of little status moments.
- Simulated battery that drains while awake and recharges during naps.
- Random stuffed animals to choose from, with new choices every five minutes.
- Rotating family photos on the wall and crib.
- Night vision, theatre mode, fullscreen, and downloadable nursery snapshots.
- Nursery notes and a cute Matrix-style dream terminal.
- Browser storage for the battery, cuddle crew, and nursery notes.

## Run locally

Requires Node.js 22.12 or newer (Vite 8).

```sh
npm install
npm run dev
```

Open the URL shown by Vite. Both `/` and `/bb8` display the nursery during development.

```sh
npm run build
npm run preview
```

Deploy the generated `dist` folder with a static host. Configure an SPA fallback to `index.html` if using `/bb8` directly.

The nursery defaults to 100% volume and attempts autoplay. Browsers may require a click or key press before audio starts. Animation and audio run while the page is open; this is a simulated nursery, not a live camera feed.

## Google Photos

The optional Google Photos Picker implementation remains in `src/BB8WallPhotos.tsx`, but is not mounted or displayed. The frames currently use bundled still images. No OAuth client secret is required or included.

## Credits

Created by Jim Washkau. Includes AI-edited family photos featuring BB-8.
Independent fan project: BB-8 and Star Wars belong to Lucasfilm.
