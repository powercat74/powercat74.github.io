<template>
<ul class="app__technologies">
  <technology v-for="tech in technologies" v-bind="tech"></technology>
</ul>
</template>

<script type="text/javascript" src="technologies.mjs"></script>