<script>
import AppHeader from './components/Header/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';
import AppFooter from './components/Footer/AppFooter.vue';
import HeroSection from './components/Main/HeroSection.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    HeroSection
  }
}
</script>

<template>
  <div class="container-fluid vh-100 p-0">

    <div class="hero">

      <AppHeader />

      <HeroSection />

    </div>

    <AppMain />

    <AppFooter />

  </div>

</template>

<style lang="scss">
@import './styles/main.scss';

.container-fluid {
  background-color: #FFFFFF;

  .hero {
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    background-color: #000000;
    background-image: url(../src/assets/img/slider52x.jpg);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: right;
  }
}
</style>
