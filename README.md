# eeXiv

arXiv just got better

[![GitButler](https://img.shields.io/badge/GitButler-%23B9F4F2?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzOSAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjIxNDUgMTIuMTk5N0wyLjg3MTA3IDEuMzg5MTJDMS41NDI5NSAwLjc0NjUzMiAwIDEuNzE0MDYgMCAzLjE4OTQ3VjI0LjgxMDVDMCAyNi4yODU5IDEuNTQyOTUgMjcuMjUzNSAyLjg3MTA3IDI2LjYxMDlMMjUuMjE0NSAxNS44MDAzQzI2LjcxOTcgMTUuMDcyMSAyNi43MTk3IDEyLjkyNzkgMjUuMjE0NSAxMi4xOTk3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjc4NTUgMTIuMTk5N0wzNi4xMjg5IDEuMzg5MTJDMzcuNDU3MSAwLjc0NjUzMiAzOSAxLjcxNDA2IDM5IDMuMTg5NDdWMjQuODEwNUMzOSAyNi4yODU5IDM3LjQ1NzEgMjcuMjUzNSAzNi4xMjg5IDI2LjYxMDlMMTMuNzg1NSAxNS44MDAzQzEyLjI4MDMgMTUuMDcyMSAxMi4yODAzIDEyLjkyNzkgMTMuNzg1NSAxMi4xOTk3WiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzMxMF8xMjkpIi8%2BCjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMzEwXzEyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxNi41NzAxIDE0KSBzY2FsZSgxOS44NjQxIDE5LjgzODMpIj4KPHN0b3Agb2Zmc2V0PSIwLjMwMTA1NiIgc3RvcC1vcGFjaXR5PSIwIi8%2BCjxzdG9wIG9mZnNldD0iMSIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM%2BCjwvc3ZnPgo%3D)](https://gitbutler.com/)

![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)
![Vivaldi](https://img.shields.io/badge/Vivaldi-EF3939?style=for-the-badge&logo=Vivaldi&logoColor=white)

![Written by human, not AI](./badges/no-ai.png)

---

eeXiv can be accessed from its main site at <https://eexiv.org> or its mirror, which provides faster download speeds from local CDNs, at <https://eexiv.vercel.app>.

eeXiv (pronounced "EECS-iv"[^1]) is Team 1280's locally-hosted curated research-sharing platform.
It is maintained by the Team 1280 EECS ("Electrical Engineering and Computer Science") team, which is also the greatest contributor of its research papers.
However, this repository is open for anyone—in Team 1280, in another FRC team, or as independent hobbyists—to contribute.
eeXiv borrows from a pioneer in digital open access, arXiv.org, and hosts the most FRC-specific scholarly articles in numerous subject areas, curated by our strong community of volunteer moderators.

[^1]: Whichever idiot decided "arXiv" should be pronounced like "archive" can cope; eeXiv is not changing its name or pronunciation.

---
<!-- Copilot -->
<table>
    <img alt="GitHub Copilot" align="left" src="https://raw.githubusercontent.com/KatsuteDev/kdevbot/main/assets/copilot-dark.png#gh-dark-mode-only" width="50">
    <img alt="Open AI" align="left" src="https://raw.githubusercontent.com/KatsuteDev/kdevbot/main/assets/openai-dark.png#gh-dark-mode-only" width="50">
    <img alt="GitHub Copilot" align="left" src="https://raw.githubusercontent.com/KatsuteDev/kdevbot/main/assets/copilot-light.png#gh-light-mode-only" width="50">
    <img alt="Open AI" align="left" src="https://raw.githubusercontent.com/KatsuteDev/kdevbot/main/assets/openai-light.png#gh-light-mode-only" width="50">
    <p>AI generated code is <b>strictly prohibited</b> on this repository.</p>
</table>
<!-- Copilot -->

---

## For Maintainers

The dummies guide to maintaining a Next.js project:

- This is not HTML
  - Do not treat it as HTML, although it shares many common elements. Consult the documentation at least once before attempting anything for the first time, including common tasks.
- General semantics
  - Use `<Link>` components when linking to a local path (like `/status`) and use a normal `<a>` component when linking to an external site (like `github.com`).
  - Try not to use global CSS classes when possible
    - You can see a [`globals.css`](./src/app/globals.css) file in the app directory. Add classes to this file sparingly, only when you actually have a common class that will be shared across many components (however, also consider using a Tailwind CSS extension class for this).
    - Try to use CSS modules for your components. You can access them from your modules by importing them (`import styles from './path-to-css-module'` and using them in your components with `className={styles.class_name}`). This will allow you to use the same class names in different parts of the website without any conflicts, as Post CSS will generate unique classes from the CSS modules.
- Important: **THIS IS NOT JAVASCRIPT!** You **CANNOT** use global variables, window variables, etc, or even stateful variables that are meant to persist beyond a single refresh cycle (which can happen many times per second). Use the **STATE** for this (see [the module we are using for state management](https://github.com/pmndrs/zustand)).
- Try to define modules for your components instead of putting everything in one file to avoid **JANK**.
- You should put all static assets like images, icons, sound bytes, etc, in the [`public`](./public/) folder. These assets will be made available at the root directory `/`. For example, if `eecs-wordmark.png` is in `public`, then I can access it from an image element like so: `<img src="/eecs-wordmark.png" />`.
  - You should probably use a [NextJS `Image` element](https://nextjs.org/docs/pages/api-reference/components/image) for performance reasons, though.
- **VERY IMPORTANT** for performance and UI jank purposes:
  - As you may have noticed, we store all of our data in a super large TypeScript file at `db/data.ts`. This module contains exports for all of our 5 main "databases."
  - In order to access these databases from your components, there are two **critical** conventions to follow:
    - If your component is **server side**, then simply import the components like normal (e.g. `import { documents } from '@/app/db/data'`) and use them in your code.
    - If your component is **client side**, then you should import the data using the utilities available in [`db/loaders.ts`](./src/app/db/loaders.ts). The [`loaders`](./src/app/db/workers/) library contains functions which return a `Promise` that resolve to the requested data. The function will load the very large objects in a separate thread via a Web Worker, which avoids blocking the main UI thread and freezing everything. You can then use the `useSuspenseQuery` hook from `@tanstack/react-query` to load this data in the background while triggering a React Suspense (if you don't set one up yourself, the default site wide loading bar will be used). This helps vastly reduce UI jank when trying to load the entire mega data object directly into memory.
  - Not sure whether you're in a client or server side component? If your component has the `'use client'` directive at the top of its file, then it's a client side component.
    Otherwise, by default, it should be a server side component.
  - **Footnote**: why don't I have to use the utilities in [`db/loaders.ts`](./src/app/db/loaders.ts) to asynchronously load the data in server side components?
    - Next.js will automatically pre-render all server side components into static HTML, which means there will be no performance impact (and in fact performance gain at build time)
      to loading the entire objects into memory.

