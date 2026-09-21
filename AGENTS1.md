You are now working on an EXISTING portfolio website whose VISUAL DESIGN IS ALREADY APPROVED.

The website was designed through Figma and successfully implemented.

The current problem is NOT the design.

The problem is that the site feels:

- passive
- static
- flat
- insufficiently interactive
- lacking motion
- lacking scroll-driven storytelling
- lacking polished microinteractions

Your task is to add a sophisticated MOTION + INTERACTION LAYER to the existing website WITHOUT redesigning it.

==================================================
PRIMARY OBJECTIVE
==================================================

Make the existing portfolio feel significantly more alive, interactive, premium, and technically impressive through:

- scroll-triggered motion
- subtle parallax
- text animation
- project interactions
- hover states
- pointer interactions where appropriate
- navigation feedback
- section transitions
- image motion
- microinteractions
- carefully selected scroll-driven effects

while preserving the current Figma design.

The finished result should feel like:

EXISTING FIGMA DESIGN
+
HIGH-END INTERACTION DESIGN
+
POLISHED MOTION ENGINEERING

NOT:

EXISTING SITE
+
RANDOM ANIMATIONS EVERYWHERE.

==================================================
NON-NEGOTIABLE DESIGN LOCK
==================================================

The Figma-based design is the visual source of truth.

DO NOT change:

- the color palette
- background colors
- text colors
- accent colors
- overall layout
- section order
- page structure
- typography choices
- content
- existing project information
- major spacing system
- container widths
- overall visual identity
- visual hierarchy
- card/component visual language
- borders
- static composition
- approved imagery

Do NOT redesign any section merely because another website looks better.

The website should look essentially identical when it is NOT moving.

Motion must enhance the current design rather than replace it.

Small implementation changes such as wrappers, overflow containers,
transform origins, positioning contexts, or data attributes are allowed
when necessary for animation, as long as the static visual result remains
faithful to the existing Figma design.

==================================================
CRITICAL RULE
==================================================

DO NOT BEGIN IMPLEMENTATION IMMEDIATELY.

First:

1. inspect the website;
2. understand the existing visual hierarchy;
3. inspect the Figma implementation;
4. identify interaction opportunities;
5. research excellent contemporary websites;
6. study appropriate animation/component libraries;
7. create a Motion Enhancement Plan;
8. only then implement.

Do not experiment randomly inside production components.

==================================================
PHASE 1 — AUDIT THE EXISTING WEBSITE
==================================================

Run and inspect the complete existing portfolio.

Understand:

- framework
- routing
- component hierarchy
- styling system
- animation dependencies already installed
- Figma-derived structure
- responsive behavior
- navigation
- hero
- project/work sections
- about sections
- experience
- skills
- contact
- footer
- existing interactive elements

Inspect at minimum:

1440px desktop
1280px laptop
768px tablet
390px mobile

Determine:

- which sections currently feel lifeless;
- where scrolling could communicate hierarchy;
- where interaction could improve exploration;
- which elements should remain completely still;
- what should animate once;
- what should respond continuously to scroll;
- what should respond to pointer/hover;
- what should respond to navigation state.

Do NOT modify the design during this audit.

==================================================
PHASE 2 — RESEARCH WORLD-CLASS WEB MOTION
==================================================

Browse contemporary, high-quality websites and interaction galleries.

Research current examples from sources such as:

- Awwwards
- FWA
- Codrops
- Godly
- SiteInspire
- CSS Design Awards
- curated creative-development portfolios
- award-winning personal portfolios
- high-quality creative agency websites

Also investigate interaction/component ecosystems such as:

- Motion Primitives
- motion.dev / Motion
- 21st.dev
- anime.js
- GSAP / ScrollTrigger where justified
- Origin UI / Origin Kit
- Kokonut UI
- Skiper UI
- Vengeance UI
- AnimMaster-type motion libraries
- other high-quality contemporary component sources

IMPORTANT:

You are studying INTERACTION PATTERNS.

You are NOT copying their:

- colors
- layouts
- branding
- typography
- entire sections
- visual identity.

Extract the MOTION MECHANISM rather than the appearance.

For example:

GOOD:

"This portfolio uses slight vertical parallax between image and text.
That principle could strengthen our project section."

BAD:

"Copy this portfolio's project section."

==================================================
RESEARCH TARGETS
==================================================

Study especially strong examples of:

1. HERO MOTION

- intro choreography
- text reveals
- line/word reveals
- image entrance
- subtle mouse response
- scroll-to-content transition
- hero compression
- hero media scaling
- controlled parallax

2. PROJECT SHOWCASES

- image reveals
- project image scale
- hover preview
- cursor-follow previews
- masked image transitions
- project title interaction
- project-to-project transitions
- scroll-linked image movement
- editorial project reveals

3. TYPOGRAPHY

- text masks
- split-line reveal
- letter/word staggering
- scroll-linked text emphasis
- text clipping
- subtle text translation
- kinetic typography

4. SCROLL EFFECTS

- in-view reveal
- stagger
- parallax
- scrubbed transformations
- sticky storytelling
- scroll progress
- layered depth
- image scale
- horizontal movement
- clipping/masking
- section transition

5. MICROINTERACTIONS

- buttons
- links
- navigation
- project rows
- icons
- external-link indicators
- contact CTA
- social links

6. POINTER INTERACTIONS

Only where useful:

- slight tilt
- magnetic movement
- cursor-follow preview
- image response
- subtle spotlight behavior

Do not use pointer effects simply because they look impressive.

==================================================
PHASE 3 — CREATE A MOTION OPPORTUNITY MAP
==================================================

Before implementation, create an internal map of the website.

For each major section record:

SECTION

CURRENT PURPOSE

CURRENT STATIC DESIGN

POTENTIAL INTERACTION

WHY IT IMPROVES THE SECTION

REFERENCE / INSPIRATION

TRIGGER

MOTION PROPERTY

DURATION / SCROLL RANGE

MOBILE BEHAVIOR

REDUCED-MOTION BEHAVIOR

PERFORMANCE RISK

Example:

Hero
→ word-level entrance
→ establishes visual rhythm
→ page load
→ opacity + transform only

Featured Work
→ image moves slightly slower than container
→ creates depth
→ scroll progress
→ transform only

Project title
→ subtle directional hover
→ improves discoverability
→ pointer hover
→ transform

Do this BEFORE coding.

==================================================
PHASE 4 — SELECT, DO NOT COLLECT
==================================================

Do not add every effect you discover.

Select approximately:

1 memorable hero interaction

2–3 scroll behaviors

2–4 microinteraction patterns

1 strong project interaction system

1 navigation interaction system

and only additional effects when they genuinely improve the experience.

The site should have MOTION CONSISTENCY.

Do not create a portfolio where every section uses a completely different effect.

==================================================
MOTION HIERARCHY
==================================================

Create three motion levels.

LEVEL 1 — PRIMARY MOMENTS

These are memorable.

Use sparingly.

Examples:

- hero transition
- featured project interaction
- major scroll sequence

Maximum approximately 2–3 major motion moments.

LEVEL 2 — SECTION MOTION

Used to establish rhythm.

Examples:

- headings revealing
- images entering
- content staggering
- mild parallax

LEVEL 3 — MICROINTERACTION

Small feedback.

Examples:

- link underline
- button response
- project hover
- navigation indicator
- icon transition

Most of the website should live in Levels 2 and 3.

==================================================
PHASE 5 — DEFINE A MOTION LANGUAGE
==================================================

All animations should feel related.

Define:

DURATION RANGE

EASING

STAGGER RHYTHM

SCROLL RESPONSE

ENTRANCE DIRECTION

PARALLAX INTENSITY

HOVER RESPONSE

IMAGE MOTION

TEXT MOTION

Use consistent values rather than arbitrary animations.

For example:

Microinteraction:
~150–300ms

Component transition:
~300–600ms

Large reveal:
~500–900ms

These are starting guidelines, not absolute rules.

Use easing that feels controlled rather than bouncy unless bouncing is
specifically appropriate.

==================================================
PREFERRED MOTION CHARACTER
==================================================

The portfolio should feel:

- smooth
- confident
- precise
- responsive
- sophisticated
- slightly experimental
- restrained
- intentional

NOT:

- playful everywhere
- bouncy
- chaotic
- game-like
- overanimated
- slow
- theatrical without purpose

==================================================
PHASE 6 — HERO
==================================================

Inspect the existing hero and KEEP ITS FIGMA COMPOSITION.

Add motion without redesigning it.

Choose the strongest appropriate approach.

Possible options:

A. TEXT CHOREOGRAPHY

Reveal headline by:

line
or
word

using clipping + transform + opacity.

Avoid letter-by-letter animation unless typography specifically benefits.

B. SUPPORTING ELEMENT STAGGER

Introduce supporting copy, CTA, and secondary metadata with controlled
staggering.

C. SUBTLE SCROLL TRANSITION

As the visitor begins scrolling:

- hero text may translate slightly;
- hero media may scale slightly;
- supporting content may fade subtly;
- next section may enter with depth.

Keep transformations restrained.

D. POINTER RESPONSE

If appropriate, one visual element may react subtly to pointer position.

Do not move the entire hero around.

E. SCROLL CUE

If an existing element can communicate scroll progression elegantly,
animate it subtly.

Do not add unnecessary decorative UI.

==================================================
PHASE 7 — SECTION REVEALS
==================================================

Do NOT apply:

opacity: 0
→
opacity: 1

to every section identically.

Create variation while maintaining one motion language.

Potential techniques:

- clipped heading reveal
- small vertical content stagger
- image mask reveal
- image scale-down reveal
- subtle directional content reveal
- border expansion
- line growth
- metadata stagger

Use subtle effects for normal content.

Not every paragraph requires animation.

==================================================
PHASE 8 — PROJECT SECTION
==================================================

The project/work section should receive the strongest interaction work.

KEEP the existing Figma layout.

Do not replace it with cards, grids, carousels, or another component system.

Investigate adding effects such as:

PROJECT IMAGE

- subtle scale on hover
- clip/mask reveal
- slight parallax while scrolling
- layered image movement
- image transition where appropriate

PROJECT TITLE

- controlled translation
- text split/roll
- arrow/icon response
- underline progression

PROJECT CONTAINER

- subtle depth
- pointer-responsive movement
- hover-state hierarchy

PROJECT METADATA

- stagger
- subtle opacity response

PROJECT PREVIEW

If compatible with the current design:

- cursor-following preview
or
- expanding preview
or
- media transition

Use only ONE primary project interaction concept.

Do not stack:

tilt
+
cursor preview
+
3D rotation
+
glow
+
parallax

on the same project.

==================================================
PHASE 9 — SCROLL-BASED DEPTH
==================================================

Introduce limited parallax where appropriate.

Good candidates:

- project imagery
- decorative backgrounds
- large typography
- section numbers
- nonessential visual layers

Keep movement small.

Typical depth should feel perceptible rather than dramatic.

Avoid strong parallax on:

- body paragraphs
- buttons
- navigation
- important controls.

==================================================
PHASE 10 — STICKY / PINNED SECTIONS
==================================================

Pinned storytelling can be powerful but should be rare.

Only introduce sticky/pinned behavior when:

- the existing section naturally contains sequential information;
- the interaction adds understanding;
- the effect works well with the current Figma composition.

Do NOT create long scroll-jacked sequences.

At most one major pinned narrative sequence unless the existing design
clearly calls for more.

The visitor must always feel in control of scrolling.

==================================================
PHASE 11 — NAVIGATION
==================================================

Keep the existing navigation design.

Enhance behavior.

Possible improvements:

- current-section state
- animated active marker
- underline movement
- subtle hide/reveal based on scroll direction
- smooth section navigation
- small hover transitions

Do not redesign the navigation.

Do not add oversized animated menus unless already supported by the design.

==================================================
PHASE 12 — BUTTONS AND LINKS
==================================================

Use small high-quality microinteractions.

Possible effects:

BUTTON

- label translation
- icon movement
- subtle magnetic response
- background transition
- border interpolation

LINK

- underline grow
- arrow shift
- text roll
- small reveal

Keep interactions fast.

Buttons should never feel difficult to click because they move away from
the pointer.

==================================================
PHASE 13 — SKILLS / EXPERIENCE / ABOUT
==================================================

These sections usually need less motion.

Possible enhancements:

HEADINGS
→ clipped reveal

TIMELINE
→ progressive line reveal

SKILL ITEMS
→ controlled stagger

ABOUT IMAGE
→ mild parallax or reveal

METADATA
→ staged entrance

Do not turn informational sections into animation demonstrations.

==================================================
PHASE 14 — CONTACT / FOOTER
==================================================

Use the final section as a satisfying closing interaction.

Possible ideas:

- large CTA reveal
- character/word motion
- subtle magnetic contact link
- background element movement
- footer text reveal
- controlled pointer interaction

The effect should feel like closure.

Do not redesign the footer.

==================================================
INTERACTION DETAILS
==================================================

Consider:

- hover
- focus
- active
- pressed
- pointer movement
- section entering viewport
- section leaving viewport
- scroll progression

The website should respond to the user.

But avoid constant unnecessary movement.

Static moments are important because they make animated moments stronger.

==================================================
TECHNOLOGY SELECTION
==================================================

FIRST inspect the existing stack.

Reuse existing animation infrastructure whenever possible.

Prefer ONE primary animation approach.

Potential choices:

MOTION / motion.dev

Use when:
- React integration is needed
- in-view animation
- transforms
- gesture interaction
- scroll-linked values
- layout transitions

CSS

Use when:
- hover effects
- simple transitions
- basic keyframes
- browser-native scroll-driven animations are sufficient

GSAP + ScrollTrigger

Use only if:
- complex scrubbed timelines
- sophisticated pinning
- advanced choreography

actually require it.

anime.js

Use if its strengths specifically suit the required sequence.

Do NOT install:

Motion
+
GSAP
+
anime.js
+
several animation libraries

just because they exist.

Use the smallest capable stack.

==================================================
COMPONENT RESEARCH
==================================================

You may inspect components from:

- Motion Primitives
- 21st.dev
- Kokonut UI
- Origin UI
- Skiper UI
- Vengeance UI
- other reputable sources

However:

DO NOT import complete visual sections that change the Figma design.

Instead extract useful implementation patterns such as:

- in-view reveal
- text animation
- scroll progress
- hover mechanics
- parallax math
- interaction logic

Adapt those mechanics to our existing interface.

==================================================
DO NOT COPY WEBSITES
==================================================

When researching award-winning websites:

extract:

- technique
- timing
- choreography
- interaction principle
- scroll behavior

Do not reproduce:

- copyrighted imagery
- brand assets
- exact compositions
- typography identity
- distinctive artwork
- exact visual sequences.

Use references for inspiration, not duplication.

==================================================
SMOOTH SCROLL
==================================================

Do NOT automatically install a smooth-scroll library.

Native scrolling is preferred unless smooth-scroll behavior materially
improves the selected animation concept.

If using something such as Lenis:

- justify why;
- preserve accessibility;
- preserve keyboard navigation;
- preserve anchor navigation;
- test touch devices;
- avoid exaggerated inertia.

Never create scroll hijacking.

==================================================
PERFORMANCE RULES
==================================================

Animation quality means nothing if scrolling becomes janky.

Prefer animating:

- transform
- opacity
- clip-path where reasonable

Avoid repeatedly animating:

- width
- height
- top
- left
- expensive blur
- giant filters
- layout-heavy properties

Use:

- requestAnimationFrame appropriately
- IntersectionObserver for simple visibility triggers
- efficient Motion/GSAP scroll values when required
- passive event listeners where appropriate

Avoid expensive raw scroll handlers.

==================================================
IMAGE PERFORMANCE
==================================================

Do not create expensive animation on oversized images.

Preserve:

- responsive images
- lazy loading
- optimized formats
- correct sizing.

==================================================
MOBILE
==================================================

Motion must be redesigned for mobile behavior.

Do NOT assume desktop effects translate directly.

On touch devices:

REMOVE OR SIMPLIFY:

- cursor-follow effects
- magnetic cursor interactions
- hover-only interactions
- excessive parallax
- expensive continuous pointer tracking

Preserve:

- section reveals
- appropriate text motion
- project interaction through touch
- modest scroll-based movement

Mobile should feel polished rather than like a reduced desktop site.

==================================================
PREFERS-REDUCED-MOTION
==================================================

Mandatory.

Respect:

prefers-reduced-motion: reduce

When enabled:

- remove nonessential transforms
- disable parallax
- remove scrubbed sequences
- remove pointer-follow motion
- minimize transitions

Content must remain fully accessible and understandable.

==================================================
ACCESSIBILITY
==================================================

Motion must NOT:

- hide information permanently
- prevent keyboard access
- alter focus order
- create inaccessible controls
- require hover to reveal essential content
- interfere with screen readers
- trap scrolling

All interactive elements need visible keyboard focus states.

==================================================
NO MOTION FOR MOTION'S SAKE
==================================================

Before implementing an effect, ask:

"What does this improve?"

Valid answers include:

- establishes hierarchy
- communicates transition
- improves discoverability
- adds depth
- connects sections
- provides feedback
- strengthens project storytelling
- creates one memorable brand moment

Invalid answer:

"Because it looks cool."

==================================================
ANTI-PATTERNS
==================================================

DO NOT add:

- excessive particles
- glowing cursor trails
- random blobs
- unnecessary 3D scenes
- fake loading screens
- long intro animations
- scroll hijacking
- constant marquee text
- endless parallax
- every section fading upward
- exaggerated magnetic buttons
- animations longer than necessary
- animation that delays access to content
- meaningless shader effects
- random WebGL
- animations simply because they appeared on Awwwards

==================================================
MOTION BUDGET
==================================================

Keep the experience disciplined.

Target approximately:

1 memorable hero motion system

1 strong project interaction system

2–4 reusable section animation patterns

1 navigation interaction system

2–4 reusable microinteraction patterns

optional:
1 carefully justified scroll-driven showcase moment

This is NOT a strict count.

It is a guardrail against overanimation.

==================================================
PHASE 15 — IMPLEMENTATION
==================================================

Once the Motion Enhancement Plan is complete:

implement incrementally.

Recommended order:

1. global motion tokens
2. hero
3. navigation
4. section reveal system
5. project interaction
6. secondary sections
7. contact/footer
8. responsive adaptations
9. reduced-motion behavior

After every major stage, verify that the static Figma design has not drifted.

==================================================
FIGMA FIDELITY CHECK
==================================================

The resting/static page must remain faithful to the approved Figma design.

Compare:

BEFORE MOTION
vs
AFTER MOTION

Check:

- colors
- spacing
- layout
- typography
- dimensions
- images
- alignment
- section structure

Animation should disappear into the design when stopped.

If the site now looks materially different while static, correct it.

==================================================
PHASE 16 — MOTION POLISH
==================================================

After implementation, review the site as a complete experience.

Do not review animations individually only.

Check:

- does the first screen feel alive?
- does movement guide the visitor?
- do transitions feel related?
- are there too many simultaneous animations?
- are animations repeating excessively?
- do project interactions feel premium?
- are there enough quiet/static areas?
- does scrolling remain effortless?
- is mobile smooth?
- does anything feel gimmicky?

Remove effects that do not improve the overall experience.

Removing a mediocre animation is preferable to keeping it.

==================================================
PHASE 17 — PERFORMANCE TESTING
==================================================

Test:

- desktop scrolling
- mobile scrolling
- CPU/GPU load where tools permit
- layout shifts
- long tasks
- console errors
- animation frame drops

Check the page on a realistic mid-range device profile if possible.

Reduce animation complexity where performance is poor.

==================================================
FINAL VERIFICATION
==================================================

Before completion verify:

DESIGN

[ ] Same Figma structure
[ ] Same colors
[ ] Same typography
[ ] Same content
[ ] No unintended redesign

MOTION

[ ] Hero has an intentional interaction
[ ] Scroll has visual rhythm
[ ] Project section feels interactive
[ ] Microinteractions feel polished
[ ] Motion language is consistent
[ ] No excessive animation

UX

[ ] Native scroll remains controllable
[ ] Navigation remains easy
[ ] No content is delayed unnecessarily
[ ] Hover is not required for essential information

MOBILE

[ ] No cursor effects remain where inappropriate
[ ] Animations are simplified where necessary
[ ] No horizontal overflow
[ ] Scrolling remains smooth

ACCESSIBILITY

[ ] Reduced-motion supported
[ ] Keyboard interaction works
[ ] Focus states work
[ ] No essential content depends on animation

ENGINEERING

[ ] Production build passes
[ ] No new console errors
[ ] No unnecessary animation dependencies
[ ] No obvious performance regression

==================================================
FINAL REPORT
==================================================

When complete, provide:

1. MOTION DIRECTION
Describe the final motion language in a few sentences.

2. RESEARCH REFERENCES
List the websites/components studied and identify the interaction principle
taken from each.

Do NOT claim that an effect came from a reference unless it actually did.

3. SELECTED EFFECTS

For each:

Section
Effect
Trigger
Technology
Reason

4. REJECTED EFFECTS
Briefly identify notable effects considered but rejected because they did
not fit the website.

5. LIBRARIES
List any packages added and why each was necessary.

6. MOBILE ADAPTATIONS
Explain which effects were simplified or disabled.

7. ACCESSIBILITY
Describe reduced-motion and keyboard handling.

8. PERFORMANCE
Report relevant checks.

9. DESIGN FIDELITY
Confirm whether the existing Figma layout and colors remained unchanged.

==================================================
SUCCESS CONDITION
==================================================

The job is successful when someone who saw the old version and new version
would say:

"The design is still clearly the same website, but now it feels alive,
intentional, interactive, and professionally motion-designed."

They should NOT say:

"It looks like the website was redesigned."

They should NOT say:

"Every element moves."

They should NOT say:

"It feels like a collection of animation demos."

The interaction design should amplify the Figma design rather than compete
with it.

Start by inspecting the current website and researching suitable interaction
references.

DO NOT edit the visual design before completing the Motion Enhancement Plan.