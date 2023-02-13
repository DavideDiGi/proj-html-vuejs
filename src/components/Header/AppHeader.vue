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

    <header>
        <div class="logo-container">
            <AppLogo />
        </div>

        <div class="nav-container">
            <AppNav />
        </div>

    </header>

</template>

<style lang="scss" scoped>
header {
    // background-color: gold;
    width: 100%;
    height: 100px;
    display: flex;

    .logo-container {
        width: 40%;
        height: 100%;
        // background-color: red;
        display: flex;
        align-items: center;
        padding-left: 70px;
    }

    .nav-container {
        width: 60%;
        height: 100%;
        // background-color: blue;
    }
}
</style>