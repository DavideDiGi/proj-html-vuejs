<script>
import CallToAction from './CallToAction.vue';

export default {
    name: "SeventhSection",
    components: { CallToAction }
}
</script>

<template>

    <section class="w-100 bg-black">

        <div class="sushi-img"></div>
        <div class="this-cta-container">
            <CallToAction />
        </div>

    </section>

</template>

<style lang="scss" scoped>
section {
    height: 600px;
    display: flex;

    .sushi-img {
        width: 60%;
        height: 100%;
        background-image: url('../../assets/img/slider72x-scaled.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .this-cta-container {
        padding-top: 150px;
        width: 40%;

        &>:first-child {
            width: 100%;
        }
    }

}
</style>