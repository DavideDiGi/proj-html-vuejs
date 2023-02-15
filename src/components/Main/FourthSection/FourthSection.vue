<script>
// import CallToAction from '../CallToAction.vue';
import MainTitle from '../MainTitle.vue';
import AppReview from './AppReview.vue';

export default {
    name: "FourthSection",
    data() {
        return {
            rieviews: [
                {
                    name: "MEGGY STEWART",
                    newsPaper: "NEW YORK TIMES",
                    stars: "hi",
                    firstParagraph: "Non arcu mauris tortor utltrices mollis tellus euismod fementum. Habitant amet tincidunt id sapien accumsan sed at.",
                    secondParagraph: "Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi",
                    button: "READ FULL ARTICLE"
                },
                {
                    name: "MARY MAXEY",
                    newsPaper: "THE GUARDIAN",
                    stars: "hello",
                    firstParagraph: "Non arcu mauris tortor utltrices mollis tellus euismod fementum. Habitant amet tincidunt id sapien accumsan sed",
                    button: "READ FULL ARTICLE"
                },
                {
                    name: "PATRICK MONROE",
                    newsPaper: "GLOBE AND MAIL",
                    stars: "bonjour",
                    firstParagraph: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.",
                    button: "READ FULL ARTICLE"
                }
            ]
        }
    },
    components: { MainTitle, AppReview }
}
</script>

<template>

    <section class="section-container d-flex flex-wrap">

        <div class="title-box">
            <MainTitle />
        </div>

        <div class="main-review w-100 bg-black d-flex">

            <div class="left-side"><img src="../../../assets/img/blog72x-1200x1375.jpg" alt=""></div>

            <div class="right-side">
                <AppReview :userName="rieviews[0].name" :newsPaperName="rieviews[0].newsPaper"
                    :reviewStars="rieviews[0].stars" :firstParag="rieviews[0].firstParagraph"
                    :secondParag="rieviews[0].secondParagraph" :buttonText="rieviews[0].button" />
            </div>

        </div>

        <div class="section-container bottom d-flex flex-wrap w-100">

            <div class="main-review w-100 d-flex justify-content-between">
                <div class="guardian w-50 me-5 bg-black">
                    <AppReview :userName="rieviews[1].name" :newsPaperName="rieviews[1].newsPaper"
                        :reviewStars="rieviews[1].stars" :firstParag="rieviews[1].firstParagraph"
                        :secondParag="rieviews[1].secondParagraph" :buttonText="rieviews[1].button" />
                </div>
                <div class="globe w-50 bg-black ">
                    <AppReview :userName="rieviews[2].name" :newsPaperName="rieviews[2].newsPaper"
                        :reviewStars="rieviews[2].stars" :firstParag="rieviews[2].firstParagraph"
                        :secondParag="rieviews[2].secondParagraph" :buttonText="rieviews[2].button" />
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
            background-image: url(../../../assets/img/info52x.jpg);
            background-size: cover;
        }

        .globe {
            background-image: url(../../../assets/img/info12x.jpg);
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
        padding-top: 100px;
        width: 50%;

        &>:first-child {
            width: 100%;
        }
    }

}
</style>