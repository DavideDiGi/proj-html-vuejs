<script>
import AppLogo from './AppLogo.vue';
import AppNav from './AppNav.vue';

export default {
    name: "AppHeader",
    data() {
        return {
            links: [
                {
                    name: "Home",
                    isActive: "true"
                },
                {
                    name: "Culinary History",
                },
                {
                    name: "Our Team",
                },
                {
                    name: "Our Menu",
                },
                {
                    name: "Takeout",
                },
                {
                    name: "Bulletin",
                },
                {
                    name: "Reservation",
                },
                {
                    name: "Chart",
                },
            ]
        }
    },
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
            <nav class="px-5 h-100">

                <ul>
                    <AppNav :link="links[index].name" :activity="links[index].isActive"
                        v-for="(element, index) in links" />
                </ul>

            </nav>
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
        nav {

            ul {
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                list-style: none;
                font-size: 0.9rem;
            }
        }
    }
}
</style>