<template>
<ul class="app__projects">
  <project v-for="project in projects" v-bind="project" :key="name"></project>
</ul>
</template>

<script type="text/javascript" src="projects.mjs"></script>