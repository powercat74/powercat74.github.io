<template>
<li class="app__technology">
  <a :href="url" class="app__technology__link">
    <img :src="logo" :title="name" class="app__technology__image"/>
    <p class="app__technology__description">{{description}}</p>
  </a>
</li>
</template>

<script type="text/javascript" src='technology.mjs'></script>