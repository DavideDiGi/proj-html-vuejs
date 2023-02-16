<script>
// import MyComponent from './MyComponent.vue';

export default {
    name: "FooterNav",
    props: {
        socialMedia: String
    },
    // components: { MyComponent }
}
</script>

<template>

    <!-- <ul> -->

    <li>
        <a href="#">
            <div class="link-box">{{ socialMedia }}</div>
        </a>
    </li>
    <!-- <MyComponent /> -->

    <!-- <li>
            <a href="#">
                <div class="link-box">T</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="link-box">Y</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="link-box">I</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="link-box">L</div>
            </a>
        </li> -->

    <!-- </ul> -->

</template>

<style lang="scss" scoped>
.link-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
}
</style>