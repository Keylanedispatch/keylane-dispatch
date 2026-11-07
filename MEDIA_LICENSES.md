# KeyLane Dispatch Media Inventory

All runtime imagery and video are committed directly to this repository. The website does not download assets at build time.

## Approved equipment illustrations

These six original, AI-generated illustrations were individually reviewed and approved by the KeyLane Dispatch owner. All six have red cabs (as applicable), white or equipment-specific trailers, an isometric 3D rendering style, and light backgrounds. The user explicitly prohibited substituting stock photos or regenerating them without approval.

| Local path | Equipment | Asset origin / authorization |
| --- | --- | --- |
| `public/equipment/reefer.webp` | Reefer with refrigeration unit | Owner-approved generated KeyLane illustration |
| `public/equipment/dry-van.webp` | Enclosed dry van | Owner-approved generated KeyLane illustration |
| `public/equipment/hotshot.webp` | Red dually pickup with gooseneck trailer | Owner-approved generated KeyLane illustration |
| `public/equipment/flatbed.webp` | Red semi with open flatbed | Owner-approved generated KeyLane illustration |
| `public/equipment/power-only.webp` | Red tractor, no trailer | Owner-approved generated KeyLane illustration |
| `public/equipment/box-truck.webp` | Red cab and white straight cargo box | Owner-approved generated KeyLane illustration |

All six are 1200 × 675 pixel WebP website derivatives of the owner-approved images. Do not replace them with stock equipment photos.

## KeyLane owner media

- `public/team/johnson-desk.webp`: owner-provided dispatch-workstation image showing Johnson. The user identifies it as his photo and approved use on the site. Photographer/copyright attribution beyond the owner's submission has not been independently established.
- The former `johnson-headshot.webp` was NOT committed. The Meet Johnson section instead shows the approved KeyLane brand emblem.
- Behind the Scenes uses the locally committed desk photo. There are no CloudFront image URLs in the shipped page.

## Hero video

- File: `public/media/keylane-live-drive.mp4`
- Licensed source: Pexels, EJ Merl, https://www.pexels.com/video/a-semi-truck-is-driving-down-the-road-17899033/
- License: https://www.pexels.com/license/ (free commercial use, subject to Pexels terms and the rights of third parties).
- The 720p H.264 MP4 was downloaded and compressed once, then committed to GitHub. Current repository size: 352,907 bytes, below 4 MB.
- The video is illustrative stock footage, NOT a KeyLane truck. The player reads only the committed local MP4, with a locally hosted static poster. No remote video fallback.

## Logos, flags and site assets

- KeyLane logo, favicon and Apple touch icon: user-approved KeyLane artwork in `public/` or `app/`.
- Language flags are locally served from `public/flags/`.
- WhatsApp and social icons use local SVGs or inline vector paths.
- Open Graph imagery is generated from the approved KeyLane logo using `app/opengraph-image.tsx` and served as a 1200 × 630 PNG.

Any future asset additions or replacements require review against the user's approved style and licensing requirements.
