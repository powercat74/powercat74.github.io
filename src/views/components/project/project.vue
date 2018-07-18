<template>
<li class="app__project">
  <figure class="app__project__figure">
    <img :src="image" :title="name" class="app__project__image" />
  </figure>
  <div class="app__project__content">
    <p class="app__project__title">{{name}}</p>
    <p class="app__project__description" v-html="description"></p>
    <ul class="app__project__categories">
      <li class="app__project__category" v-for="category in categories">#{{category}}</li>
    </ul>
  </div>
</li>
</template>

<script type="text/javascript" src='project.mjs'></script>