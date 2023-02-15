<script>
import CallToAction from './CallToAction.vue';
import MainTitle from './MainTitle.vue';

export default {
    name: "FourthSection",
    components: { CallToAction, MainTitle }
}
</script>

<template>

    <section class="section-container d-flex flex-wrap">

        <div class="title-box">
            <MainTitle />
        </div>

        <div class="main-review w-100 bg-black d-flex">

            <div class="left-side"><img src="../../assets/img/blog72x-1200x1375.jpg" alt=""></div>

            <div class="right-side">
                <CallToAction />
            </div>

        </div>

        <div class="section-container bottom d-flex flex-wrap w-100">

            <div class="main-review w-100 d-flex justify-content-between">
                <div class="guardian w-50 me-5 bg-black">
                    <CallToAction />
                </div>
                <div class="globe w-50 bg-black ">
                    <CallToAction />
                </div>
            </div>
        </div>


    </section>

</template>

<style lang="scss" scoped>
.section-container {
    width: 80%;
    margin: 0 auto;
    margin-top: 70px;
    padding-bottom: 40px;

    .title-box {
        width: 100%;
        text-align: center;
        padding-bottom: 60px;
    }

    &.bottom {
        .guardian {
            background-image: url(../../assets/img/info52x.jpg);
            background-size: cover;
        }

        .globe {
            background-image: url(../../assets/img/info12x.jpg);
            background-size: cover;
        }

    }


    .left-side {
        width: 50%;

        img {
            height: 100%;
            object-fit: cover;
        }
    }

    .right-side,
    .guardian,
    .globe {
        padding-top: 150px;
        width: 50%;

        &>:first-child {
            width: 100%;
        }
    }

}
</style>