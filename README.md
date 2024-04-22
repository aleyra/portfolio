# Portfolio

## Usage

```bash
npm install
npm run docs:dev
```

## Documentation

[Vitepress documentation](https://vitepress.dev/)
[Example of portfolio](https://github.com/Tlafay1/portfolio)

### Graphs

- Create a composable (for example, `src/composables/experiences.data.ts`)
- Add the following content (replace the glob pattern with the files you want to add to the graph):
```ts
import { createContentLoader, ContentData } from 'vitepress'

const data: ContentData[] = []
export { data }

export default createContentLoader('experiences/**/*.md', {})
```
- Create a page to use the graph. I recommend an `index.md` (for example `docs/experiences/index.md`)
- Add the following content (replace the path of the composable with the one you created):
```md
---
layout: page
sidebar: false
---

<script setup lang="ts">
    import Graph from '@components/Graph.vue';
    import { data as projects } from "@composables/experiences.data";
</script>

<Graph :projects="projects"/>
```
- In your markdown files (the ones under the `experiences` folder in this example), add the following front matter:
```md
---
title: Node title
tags:
- Tag one
- Tag two
---
```

*Known bugs*:
- Don't use a number as the first character of the tag (for example `42`).
- Don't put an empty tag (for example `-`).