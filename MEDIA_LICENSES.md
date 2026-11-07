# Media provenance and usage notes

## Hero motion video
- Source: https://www.pexels.com/video/a-semi-truck-is-driving-down-the-road-17899033/
- Creator: EJ Merl (Pexels).
- Licensed as free-to-use footage under the Pexels License, including commercial website use, subject to trademark/endorsement restrictions.
- Download source: https://videos.pexels.com/video-files/17899033/17899033-hd_1920_1080_24fps.mp4
- Cached to public/media/keylane-live-drive.mp4 during npm prebuild.
- The footage is a stock example. It does not depict KeyLane-owned equipment.
- Do not replace with a competitor's branded truck video.

## KeyLane office images
Images in Services, Behind the Scenes and Meet Johnson were provided by the site owner. They are hosted on the owner's connected media storage, and their external URLs are currently referenced from app/page.tsx. Confirm photo consent and image rights prior to public marketing.

## Equipment illustrations
Six original vector illustrations are rendered dynamically to PNG by app/api/equipment/[type]/route.ts using Sharp. They are representative equipment drawings, not photographic records or certified vehicle configurations.

## KeyLane logos
Logo and favicon images use the site owner's approved vector artwork.

## Animation
The homepage uses a real HTML5 muted looping MP4, rather than panning/zooming a static image. Browser autoplay may be restricted by user preferences, low-power mode or data-saving settings. The hero has an image poster fallback.
