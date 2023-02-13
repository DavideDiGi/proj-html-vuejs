<script>
import AppLogo from './AppLogo.vue';
import AppNav from './AppNav.vue';

export default {
    name: "AppHeader",
    components: {
        AppLogo,
        AppNav
    }
}
</script>

<template>

    <AppLogo />

    <AppNav />

</template>

<style lang="scss" scoped>

</style>