<script>
import CallToAction from './CallToAction.vue';

export default {
    name: "LastSection",
    components: { CallToAction }
}
</script>

<template>
    <div class="wallpaper-container w-100 bg-info position-relative mt-5">
        <img src="../../assets/img/poke.jpeg" alt="">
        <div>
            <CallToAction />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wallpaper-container {
    height: 500px;
    position: relative;

    img {
        height: 100%;
        object-fit: cover;

    }

    div {
        width: 65%;
        height: 400px;
        background-color: black;
        // font-size: 0.7rem;
        position: absolute;
        bottom: 0px;

        // left: 50%;
        // transform: translate(-50%);

    }
}
</style>