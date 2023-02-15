<script>
export default {
    name: 'EighthSection',
    data() {
        return {
            appetizers: [
                {
                    name: "AHI SALMON NIGIRI",
                    price: "$48",
                    description: "Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit lacinia.",
                },
                {
                    name: "UMI MASU SALAD",
                    price: "$21",
                    description: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque",
                },
                {
                    name: "TEMAKI WITH CRAB",
                    price: "$32",
                    description: "Ac vel, risus ornare senectus placerat duis amet dictumst tellus.",
                },
                {
                    name: "CALIFORNIA ROLLS",
                    price: "$22",
                    description: "Ac vel, risus ornare senectus placerat duis amet dictumst tellus.",
                },
            ],
            mainCourses: [
                {
                    name: "BRAISED ABALONE",
                    price: "$52",
                    description: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
                },
                {
                    name: "TWICE COOKED PORK",
                    price: "$21",
                    description: "Ac vel, risus ornare senectus placerat duis amet dictumst tellus.",
                },
                {
                    name: "KUNG PAD CHICKEN",
                    price: "$32",
                    description: "Quis duis sit dictum aliquam a velit enim. Tellus in sit augue aliquam.",
                },
                {
                    name: "CHAR SIU & SUSHIS",
                    price: "$48",
                    description: "Feugiat rhoncus ipsum tristique purus diam, et dolor molestie.",
                },
            ],
            desserts: [
                {
                    name: "CHOCOLATE BALL CAKE",
                    price: "$13",
                    description: "In pellentesque in felis massa vehicula. In sed euismod ut.",
                },
                {
                    name: "LIME PIE WITH CRUST",
                    price: "$14",
                    description: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
                },
                {
                    name: "RASBERRY PEAR CAKE",
                    price: "$18",
                    description: "Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit.",
                },
                {
                    name: "CAFÉ AU LAIT",
                    price: "$6",
                    description: "Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit.",
                },
            ],



        }
    },
}
</script>

<template>
    <section class="section-containerS py-5">
        <div class="menu-container d-flex pt-5">

            <div class="first page">
                <h3 class="pb-5">HORS D'OEUVRES</h3>
                <div class="menu-voice" v-for="voice in appetizers">
                    <div class="title-price d-flex justify-content-between">
                        <h5>{{ voice.name }}</h5>
                        <span>{{ voice.price }}</span>
                    </div>
                    <p>{{ voice.description }}</p>
                    <br>
                </div>
            </div>

            <div class="second page">
                <h3 class="pb-5">MAIN COURSE</h3>
                <div class="menu-voice" v-for="voice in mainCourses">
                    <div class="title-price d-flex justify-content-between">
                        <h5>{{ voice.name }}</h5>
                        <span>{{ voice.price }}</span>
                    </div>
                    <p>{{ voice.description }}</p>
                    <br>
                </div>
            </div>
            <div class="third page">
                <h3 class="pb-5">DESSERTS</h3>
                <div class="menu-voice" v-for="voice in desserts">
                    <div class="title-price d-flex justify-content-between">
                        <h5>{{ voice.name }}</h5>
                        <span>{{ voice.price }}</span>
                    </div>
                    <p>{{ voice.description }}</p>
                    <br>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 800px;
    margin-bottom: 100px;
}

.menu-container {
    width: 90%;
    height: 750px;
    margin: 0 auto;

    .page {
        max-height: 700px;
        width: calc(100% / 3);
        background-color: #E8E8E8;
        padding: 50px;
        align-self: flex-end;

        h3,
        h5 {
            font-weight: bold;
        }
    }

    .second.page {
        background-color: black;
        background-image: url('../../assets/img/misc22x.jpg');
        background-size: cover;
        background-repeat: no-repeat;


        color: white;
        align-self: flex-start;

        p,
        span {
            color: lightgray;
        }


    }
}
</style>