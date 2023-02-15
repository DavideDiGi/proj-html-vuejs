<script>
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';
import FourthSection from './FourthSection/FourthSection.vue';
import FifthSection from './FifthSection.vue';
import SixthSection from './SixthSection.vue';
import SeventhSection from './SeventhSection.vue';
import EighthSection from './EighthSection.vue';
import LastSection from './LastSection.vue';

export default {
    name: "AppMain",
    components: {
        SecondSection,
        ThirdSection,
        FourthSection,
        FifthSection,
        SixthSection,
        SeventhSection,
        EighthSection,
        LastSection
    }
}
</script>

<template>
    <main>

        <SecondSection />

        <ThirdSection />

        <FourthSection />

        <FifthSection />

        <SixthSection />

        <SeventhSection />

        <EighthSection />

        <LastSection />

    </main>
</template>

<style lang="scss" scoped>

</style>