<script>
import MainTitle from './MainTitle.vue';

export default {
    name: 'SixthSection',
    components: { MainTitle }

}
</script>

<template>
    <section>

        <div class="title-box pt-5 pb-4 text-center">
            <MainTitle />
        </div>

        <hr>

        <div class="cards-container d-flex pt-5">

            <div class="left card position-relative">
                <div class="card-description">
                    <h5>THE BEST COFFEE IN TOWN</h5>
                    <p>By admin | January 7th, 2020 | Categories: News</p>
                </div>
            </div>

            <div class="middle card"><img src="" alt="">
                <div class="card-description">
                    <h5>DISCOVER OUR NEW MENU</h5>
                    <p>By admin | January 7th, 2020 | Categories: News</p>
                </div>
            </div>
            <div class="right card"><img src="" alt="">
                <div class="card-description">
                    <h5>WE NOW ACCEPT SQUARE!</h5>
                    <p>By admin | January 7th, 2020 | Categories: News</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
hr {
    width: 5%;
    margin: 0 auto;
}

.cards-container {
    width: 70%;
    margin: 0 auto;

    .card {
        margin-right: 30px;
        width: calc((100% / 3) - 30px);
        min-height: 470px;
        background-size: cover;
        border: none;
        border-radius: 0;
        margin-bottom: 130px;


        .card-description {
            padding-top: 20px;
            width: 100%;
            margin: 0 auto;
            position: absolute;
            top: 100%;
            text-align: center;

            p {
                font-size: 0.6rem;
            }
        }

        &.left {
            background-image: url('src/assets/img/blog92x-600x687.jpg');
        }

        &.middle {
            background-image: url('src/assets/img/blog72x-600x687.jpg');
        }

        &.right {
            background-image: url('src/assets/img/blog82x-600x687.jpg');
        }
    }
}
</style>