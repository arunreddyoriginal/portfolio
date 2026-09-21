# Design direction and audit

The redesign uses a graphite editorial interface instead of the earlier light portfolio template. Instrument Sans carries the large display hierarchy; IBM Plex Mono handles technical metadata. Warm white anchors readability while orange marks decisions and action, blue marks interface feedback, and lime marks availability and verified system states.

The portfolio itself is the selected proof artifact. This avoids presenting self-initiated demo pages as client work and makes the responsive system, semantic structure, motion, accessibility behavior, and implementation details visible evidence.

## Deliberate choices

- A wide asymmetrical hero pairs the positioning statement with a responsive-system signal.
- Major sections use numbered editorial headings and varied composition instead of repeated cards.
- The proof panel shows actual implementation concerns: tokens, semantic structure, reduced motion, and the static stack.
- Capability and process rows communicate decisions and methods rather than displaying a wall of logos.
- The contact section closes the page inside one authored surface and keeps the existing local email-draft flow.

## Rejected patterns

- Custom cursor and scroll hijacking, because they weaken predictable navigation.
- Horizontal carousels, because the current factual content does not justify them.
- Continuous parallax and ornamental 3D, because neither explains the work.
- Glass panels, neon gradients, particle backgrounds, and repeated rounded cards, because they would dilute the editorial system.
- Invented projects, clients, metrics, testimonials, and experience.

## Motion model

The hero enters in a 0–920ms stagger. Buttons respond in 160ms, the compact header and mobile menu use 260ms state changes, and section reveals complete in 420ms. Reduced-motion users receive the final state immediately.
