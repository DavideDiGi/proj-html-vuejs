<script>
import CallToAction from './CallToAction.vue';

export default {
    name: "ThirdSection",
    data() {
        return {
            calls: {
                lilTitle: "FINE DINING EXPERIENCE",
                title: "THE BEST TABLE IN TOWN",
                paragraph: "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla.",
                button: "EXPLORE THE MENU"
            }
        }
    },
    components: { CallToAction }
}
</script>

<template>

    <section class="w-100 bg-black">

        <div class="sushi-img"></div>
        <CallToAction :lilHeading="calls.lilTitle" :heading="calls.title" :parag="calls.paragraph"
            :buttonText="calls.button" />
    </section>

</template>

<style lang="scss" scoped>
section {
    height: 650px;
    display: flex;

    .sushi-img {
        width: 60%;
        height: 100%;
        background-image: url('../../assets/img/slider32x.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

}
</style>