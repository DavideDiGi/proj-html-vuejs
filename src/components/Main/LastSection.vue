<script>
import AppReview from './FourthSection/AppReview.vue';


export default {
    name: "LastSection",
    data() {
        return {
            flat:
            {
                price: "$52",
                newsPaper: "BRAISED ABALONE",
                firstParagraph: "Pretium accumsan porttitor viverra leo gravida mollis imperdiet. Fringilla nibh pharetra sociis leo amet.",
                button: "VIEW IN THE MENU"
            },
        }
    },
    components: { AppReview }
}
</script>

<template>
    <div class="wallpaper-container w-100 bg-info position-relative mt-5">
        <img src="../../assets/img/poke.jpeg" alt="">
        <!-- <div>S -->
        <AppReview :abalonePrice="flat.price" :newsPaperName="flat.newsPaper" :reviewStars="flat.stars"
            :firstParag="flat.firstParagraph" :secondParag="flat.secondParagraph" :buttonText="flat.button" />
        <!-- </div> -->
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
        width: 370px;
        height: 400px;
        background-color: black;
        // font-size: 0.7rem;
        position: absolute;
        left: 200px;
        bottom: 50px;
        padding-bottom: 420px;

        &> {
            width: 100%;
        }

        // left: 50%;
        // transform: translate(-50%);

    }
}
</style>