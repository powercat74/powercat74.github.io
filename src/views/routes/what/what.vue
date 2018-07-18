<template>
<section class="app__section">
  <article class="app__section__container">
    <h1 class="app__title">Noteworthy Projects</h1>
    <p class="app__subtitle">Here are some recent projects of which I am most proud.</p>
    <projects :projects="projects" />
  </article>
  <article class="app__section__container">
    <h1 class="app__title">State of My Art</h1>
    <p class="app__subtitle">These are some of my favorite technologies, and how long I have used them professionally.</p>
    <technologies :technologies="technologies" />
  </article>
</section>
</template>

<script type="text/javascript" src="what.mjs"></script>