<script>
import CallToAction from '../Main/CallToAction.vue'
export default {
    name: 'HeroSection',
    data() {
        return {
            calls: {
                lilTitle: "THE BEST TABLE IN TOWN",
                title: "FINE DINING EXPERIENCE",
                paragraph: "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
                button: "EXPLORE THE MENU"
            }
        }
    },
    components: {
        CallToAction
    }

}
</script>

<template>
    <CallToAction :lilHeading="calls.lilTitle" :heading="calls.title" :parag="calls.paragraph"
        :buttonText="calls.button" />
</template>

<style lang="scss" scoped>

</style>