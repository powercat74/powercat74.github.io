<template>
<section class="app__section__container">
  <h1 class="app__title">Notes to Self</h1>
  <p class="app__subtitle">Gentle reminders to myself about what is most important.</p>
  <div class="app__traits">
    <card v-for="card in cards" :title="card.label" :description="card.description"></card>
  </div>
</section>
</template>

<script type="text/javascript" src="who.mjs"></script>