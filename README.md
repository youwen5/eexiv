# eeXiv<sup>2</sup>

eeXiv just got better

---

eeXiv<sup>2</sup> (pronounced "EECS-iv"[^1]) is Team 1280's locally-hosted curated research-sharing platform. It is the successor to the original eeXiv, whose design was so terrible it was redesigned within 24 hours.
It is maintained by the Team 1280 EECS ("Electrical Engineering and Computer Science") team, which is also the greatest contributor of its research papers.
However, this repository is open for anyone—in Team 1280, in another FRC team, or as independent hobbyists—to contribute.
eeXiv borrows from a pioneer in digital open access, arXiv.org, and hosts the most FRC-specific scholarly articles in numerous subject areas, curated by our strong community of volunteer moderators.

[^1]: Whichever idiot decided "arXiv" should be pronounced like "archive" can cope; eeXiv is not changing its name or pronunciation.

---

## For Maintainers

The dummies guide to maintaining a Next.js project:

- This is not HTML
  - Do not treat it as HTML, although it shares many common elements. Consult the documentation at least once before attempting anything for the first time, including common tasks.
- General semantics
  - Use `<Link>` components when linking to a local path (like /status) and use a normal `<a>` component when linking to an external site (like github.com).
  - Try not to use global CSS classes when possible
    - You can see a globals.css file in the root directory. Add classes to this file sparingly, only when you actually have a common class that will be shared across many components (however, also consider using a tailwind CSS extension class for this)
    - Try to use CSS modules for your components. You can access them from your modules by importing them (`import styles from './path-to-css-module` and using them in your components with `className={styles.class_name}`). This will allow you to use the same class names in different parts of the website without any conflicts, as Post CSS will generate unique classes from the CSS modules.
- Important: THIS IS NOT JAVASCRIPT! You CANNOT use global variables, window variables, etc, or even stateful variables that are meant to persist beyond a single refresh cycle (which can happen many times per second). Use the STATE for this (see [the module we are using for state management](https://github.com/pmndrs/zustand))
- Try to define modules for your components instead of putting everything in one file to avoid JANK
- You should put all static assets like images, icons, sound bytes, etc, in the `public` folder. These assets will be made available at the root directory `/`. For example, if `eecs-wordmark.png` is in `public`, then I can access it from an image element like so: `<img src="/eecs-wordmark.png />`.
