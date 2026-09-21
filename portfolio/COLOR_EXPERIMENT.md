# Orange + Golden-Angle Palette Experiment

This experiment changes color roles only. Layout, typography, content, and motion remain unchanged.

## Active palette

- Orange / primary signal: `#ff5a1f`
- Orange deep / pressed state: `#d94815`
- Mint / secondary technical signal: `#4cd99a`
- Mint deep / selected contrast surface: `#006b3b`
- Warm neutral / quiet data visualization: `#a68f86`

## Previous palette values

To revert the color experiment, restore these root tokens:

```css
--blue: #6fa8ff;
--lime: #d6e85a;
--warm: #f4f1e8;
```

Then replace `var(--mint)`, `var(--mint-deep)`, and `var(--warm-neutral)` with their previous role-specific values recorded in the earlier version of `styles.css` and `index.html`.

The unchanged foundation colors are `#0b0d0f` for the canvas and `#f4f1e8` for the foreground.
