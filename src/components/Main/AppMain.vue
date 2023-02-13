<script>
// import HeroSection from './HeroSection.vue';
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';
import FourthSection from './FourthSection.vue';
import FifthSection from './FifthSection.vue';
import SixthSection from './SixthSection.vue';
import SeventhSection from './SeventhSection.vue';
import EighthSection from './EighthSection.vue';

export default {
    name: "AppMain",
    components: {
        // HeroSection,
        SecondSection, ThirdSection, FourthSection, FifthSection, SixthSection, SeventhSection, EighthSection
    }
}
</script>

<template>
    <main>
        <!-- <HeroSection /> -->

        <SecondSection />

        <ThirdSection />

        <FourthSection />

        <FifthSection />

        <SixthSection />

        <SeventhSection />

        <EighthSection />
    </main>
</template>

<style lang="scss" scoped>

</style>