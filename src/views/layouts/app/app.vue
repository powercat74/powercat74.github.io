<template>
<section class="app__container">
  <masthead />
  <main role="main">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </main>
  <hull />
</section>
</template>

<script type="text/javascript" src="app.mjs"></script>