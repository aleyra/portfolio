---
layout: page
sidebar: false
---

<script setup lang="ts">
    import Graph from '@components/Graph.vue';
    import { data as projects } from "@composables/projects.data";
</script>

<Graph :projects="projects"/>