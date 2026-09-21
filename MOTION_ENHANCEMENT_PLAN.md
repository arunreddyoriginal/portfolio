# Motion Enhancement Plan

## Design lock

The approved graphite editorial composition remains the source of truth. Color, typography, content, section order, component geometry, container widths, borders, and resting-state spacing are unchanged. Motion is progressive enhancement: if animation is paused, unsupported, or reduced, the page resolves to the existing static design.

## Audit summary

- Stack: one semantic HTML page, one CSS file, and one focused JavaScript file; no framework, bundler, or animation dependency.
- Existing motion: a short page-load fade/translate sequence, generic one-shot section reveals, header state transition, nav underline, button lift, capability-row inset, form state transitions, and a pulsing availability dot.
- Main weakness: movement is isolated to entrances and controls. Scroll does not connect sections, the proof panel has no exploration feedback, and row-based content does not express sequence.
- Existing strengths to preserve: clear editorial hierarchy, fixed compact header, high-contrast signal colors, strong responsive recomposition, semantic navigation and form behavior, visible focus states, and reduced-motion coverage.

## Motion direction

**Precision choreography:** clipped editorial reveals, short directional staggers, and small scroll-linked depth changes. Motion should feel fast, controlled, and engineered rather than elastic or decorative.

### Tokens

| Level | Duration / range | Easing | Use |
| --- | --- | --- | --- |
| Micro | 160–240ms | `cubic-bezier(.2,.8,.2,1)` | links, arrows, button press, row hover |
| Component | 360–560ms | `cubic-bezier(.16,1,.3,1)` | rows, metadata, panel internals |
| Primary | 620–880ms | `cubic-bezier(.16,1,.3,1)` | hero lines, proof reveal, closing panel |
| Stagger | 45–90ms | ordered | related items only |
| Parallax | maximum 12–24px | scroll-linked | decorative or proof layers only |

No bounce, spring overshoot, long easing tails, or scroll smoothing.

## Opportunity map

| Section | Current purpose / static design | Selected interaction | Why | Trigger | Properties | Desktop / mobile | Reduced motion | Risk |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Header | Persistent orientation and section links | 1px page-progress line plus existing active marker; header settles on scroll | Adds continuous orientation without changing navigation geometry | Scroll / section intersection | `scaleX`, background, underline transform | Same on all sizes; mobile menu unchanged | Progress becomes static/hidden | Low |
| Hero | Positioning statement and system signal | Two-line clipped headline choreography; supporting stagger; signal rows and viewport bars commission in sequence; restrained hero exit depth | Creates the memorable first moment and makes the “system” concept feel operational | Page load, then first 65% of hero scroll | `transform`, `opacity`, `scaleX` | Mobile keeps entrance but disables continuous parallax | Immediate final state | Low–medium |
| Discipline strip | Quick capability bridge | Items resolve in a short horizontal stagger | Turns the strip into a transition beat between hero and proof | In view | `opacity`, `translateX` | Two visible mobile items only | Immediate final state | Low |
| Section headings | Establish hierarchy | Index, eyebrow, title, and description reveal in a consistent staged sequence; top rule draws from left | Improves reading order and replaces the repeated whole-block fade | In view once | `opacity`, `translateY`, `scaleX` | Smaller translation on mobile | Immediate final state | Low |
| Selected proof | Evidence of implementation quality | Panel mask/translate entrance, progressive range-bar fill, subtle range-graphic parallax, pointer spotlight constrained to the panel | Makes the proof artifact the strongest interactive system without inventing a new layout | In view, scroll progress, fine-pointer hover | `clip-path`, `transform`, `opacity`, CSS variables | Pointer spotlight and parallax disabled on touch; bar sequence retained | Full panel and bars immediately visible | Medium |
| Capabilities | Four areas of practice | Rows enter sequentially; on hover/focus the index and heading shift a few pixels and the rule accent advances | Communicates scan order and discoverability | In view / hover / focus-within | `transform`, `color`, `scaleX` | Tap/focus feedback only; no hover dependency | Rows visible; state feedback remains near-instant | Low |
| About | Person/practice statement | Orange mark moves at a shallower scroll rate; copy and focus rows reveal in order | Adds depth to the only large graphic surface and separates image-like mark from text | Section scroll / in view | `translateY`, `opacity` | Parallax disabled below tablet; reveal retained | Static final state | Low |
| Process | Sequential working method | Progressive row choreography with directional number/heading movement | Makes the process read as a sequence without pinning or scroll-jacking | Rows enter view | `opacity`, `translateX/Y` | Reduced distances on mobile | Static final state | Low |
| Contact / footer | Deliberate close and project enquiry | Panel reveal, staged closing statement, email arrow and submit-arrow feedback, copy confirmation pulse | Provides closure and clear response to action | In view / hover / focus / click | `clip-path`, `opacity`, `transform` | No magnetic behavior; touch keeps press feedback | Immediate final state | Low |

## Selected system

### Primary moments

1. Hero editorial clip reveal plus system-signal commissioning.
2. Proof panel reveal and responsive-range interaction.
3. Contact panel closing reveal (quieter than the first two).

### Scroll behaviors

1. Global scroll-progress line in the fixed header.
2. Restrained hero exit transform and proof/about depth offsets.
3. In-view orchestration for headings, rows, and range bars.

### Microinteraction patterns

1. Directional arrow travel on links and buttons.
2. Rule growth and small index/title translation on row hover or focus.
3. Press feedback that moves controls by at most 1px.
4. Short copy-success pulse using existing lime state color.

## Technology decision

Use existing CSS and vanilla JavaScript only.

- IntersectionObserver remains the one-shot visibility trigger.
- One passive scroll listener schedules one requestAnimationFrame update for header progress and the few continuous transforms.
- Pointer tracking runs only while a fine pointer is inside the proof panel and writes two CSS custom properties.
- CSS animates only opacity, transform, and a constrained clip-path reveal. No layout properties are animated continuously.
- No Motion, GSAP, anime.js, Lenis, or component library is added; the selected choreography does not justify their payload or complexity.

## Research translated into this design

- Motion documentation: distinguish scroll-triggered entrances from scroll-linked progress and keep work on compositor-friendly properties.
- MDN scroll-driven animation and IntersectionObserver guidance: use progressive enhancement, asynchronous in-view detection, and explicit reduced-motion fallbacks.
- Codrops, *A Practical Introduction to Scroll-Driven Animations*: use scroll as direct feedback and keep CSS/native primitives appropriate to the effect.
- Codrops, *Built to Move*: take the principle of mapping motion to a section’s purpose and acknowledging performance trade-offs; reject its 3D card complexity here.
- Codrops, *Rapid Image Layers Animation*: take the paired wrapper/content transform principle for clean clipped reveals; apply it only to text, not full-screen imagery.

## Rejected ideas

- GSAP/ScrollTrigger and pinned storytelling: no sequence is complex enough to justify the dependency or extra scroll length.
- Smooth-scroll libraries: native scroll already supports the navigation and accessibility model.
- Custom cursor, cursor trail, and magnetic controls: conflict with the approved restraint and add no information.
- 3D card tilt on the proof panel: competes with legibility and the flat editorial design.
- Marquees, particles, WebGL, long intro/loading screens, and horizontal galleries: unsupported by the content and outside the design lock.
- Continuous parallax across all sections: creates fatigue; depth is limited to the hero/proof/about moments.
- Letter-by-letter headline animation: too theatrical for the typography; line-level clipping is clearer and faster.

## Verification gates

1. Compare resting page before/after at 1440, 1280, 768, and 390 CSS pixels.
2. Verify no horizontal overflow and no geometry change after animations settle.
3. Test active navigation, anchor scrolling, mobile menu keyboard flow, form controls, and copy feedback.
4. Emulate reduced motion and confirm all content is immediately visible with no scroll-linked transforms.
5. Check console, JavaScript syntax, local-link validator, and repeated scroll passes for obvious jank.

