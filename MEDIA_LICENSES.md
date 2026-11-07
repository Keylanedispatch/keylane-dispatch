# KeyLane Dispatch Media Licenses

## Equipment photography

At build time, `scripts/prepare-media.mjs` retrieves the following original Pexels images, converts them to 1200 × 675 WebP with aspect-preserving containment, and serves them from `public/equipment/`. All stock images use the [Pexels free license](https://www.pexels.com/license/), which permits standard commercial website use.

| Local asset | Source URL | Photographer | License |
|---|---|---|---|
| dry-van.webp | https://www.pexels.com/photo/red-semi-truck-on-the-road-6563903/ | Quintin Gellar | Pexels free |
| reefer.webp | https://www.pexels.com/photo/view-of-parked-trucks-27099094/ | Tom Jackson | Pexels free |
| flatbed.webp | https://www.pexels.com/photo/red-semi-truck-on-scenic-oregon-highway-37538286/ | Alex Kovshovik | Pexels free |
| hotshot.webp | https://www.pexels.com/photo/white-pickup-truck-on-the-road-14438396/ | Matt Weissinger | Pexels free |
| box-truck.webp | https://www.pexels.com/photo/white-delivery-truck-parked-at-night-on-street-29143224/ | Alex Quezada | Pexels free |
| power-only.webp | https://www.pexels.com/photo/green-semi-truck-parked-under-dramatic-sky-33262905/ | R9 Media Photo Collective | Pexels free |

NOTE: Some source photos may depict an illustrative rather than exact equipment configuration, especially hotshot (pickup without a visible trailer) and power-only. Those need replacement with exact, verified images before claiming precise truck-type representation. Check original photographs for visible company names, logos and plates before public use.

## Owner photographs

- `public/team/johnson-headshot.webp` is the owner-supplied KeyLane portrait.
- `public/team/johnson-desk.webp` is the owner-supplied dispatch desk photo.
- The owner describes these as photos of himself, taken by the owner. Files are processed into WebP from the owner-provided media CDN in the build script. No external CDN URLs appear in the runtime page markup.
- The owner provided both photos for use on this website.

## Hero footage

- Pexels, EJ Merl: https://www.pexels.com/video/a-semi-truck-is-driving-down-the-road-17899033/
- License: https://www.pexels.com/license/
- Saved locally at `public/media/keylane-live-drive.mp4` by the prebuild step. It illustrates trucking operations, not a KeyLane-owned fleet.

## Logos

The KeyLane brand logo, icon and favicon are user-approved assets.
