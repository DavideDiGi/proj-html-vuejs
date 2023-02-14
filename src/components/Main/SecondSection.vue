<script>
export default {
    name: 'SecondSection',
}
</script>

<template>
    <section class="section-container d-flex flex-wrap">

        <div class="left-side w-50 pe-5 pt-5">

            <p><strong>LOREM IPSUM DOLOR SIT AMET</strong> consectetur adipisicing elit. Eos eligendi non quasi
                doloribus! Accusantium
                vel nostrum tempora dignissimos quaerat rem laboriosam nihil officia quibusdam debitis harum in
                laudantium, ut vero.</p>

            <h1 class="py-4">FOOD IS OUR COMMON GROUND, A UNIVERSAL EXPERIENCE.</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum laborum deleniti
                reiciendis eum tempora velit omnis, excepturi, soluta itaque illum facilis. Quos, placeat molestiae.</p>

            <div class="signature pt-3 w-25"><img src="../../assets/img/signature.jpg" alt=""></div>

        </div>

        <div class="right-side w-50 px-5">

            <div class="rolls-img position-relative">

                <img src="../../assets/img/info22x.jpg" alt="california-rolls">
                <div class="california-rolls">CALIFORNIA ROLLS - $22</div>

            </div>

        </div>

        <div class="bottom-page">

            <div class="bottom left">

                <div class="left image"><img src="../../assets/img/sushi-1.png" alt=""></div>

                <h5 class="left title pt-4">THE BEST TABLE IN TOWN</h5>

                <hr>

                <p class="left paragraph text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                    placeat earum incidunt dolore vero veritatis, modi quo libero harum deserunt obcaecati alias ipsa,
                    ea possimus.</p>

                <a class="left link-btn" href="#">EXPLORE THE MENU</a>

            </div>

            <div class="bottom center">

                <div class="center image"><img src="../../assets/img/sushi-2.png" alt=""></div>

                <h5 class="center title pt-4">PERFECT FOR GROUPS</h5>

                <hr>

                <p class="center paragraph text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam repellat veniam, sit beatae quo amet. Maiores fugit veritatis tempora neque. Error
                    repudiandae assumenda cum labore.</p>

                <a class="center link-btn" href="#">MAKE A RESERVATION</a>

            </div>

            <div class="bottom right">

                <div class="right image"><img src="../../assets/img/sushi-3.png" alt=""></div>

                <h5 class="right title pt-4">FRESH PRODUCE EVERYDAY</h5>

                <hr>

                <p class="right paragraph text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    placeat dolor delectus eius ducimus animi alias vitae asperiores aliquam neque accusantium,
                    assumenda eaque ipsa facere.
                </p>

                <a class="right link-btn" href="#">LEARN MORE ABOUT US</a>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
.section-container {
    width: 80%;
    margin: 0 auto;
    margin-top: 70px;
    padding-bottom: 100px;

    .right-side {

        img {
            max-height: 580px;
            object-fit: cover;
            filter: brightness(0.8);
        }

        .california-rolls {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translate(- 50%);
            font-size: 0.8rem;
            color: white;
        }
    }

    .bottom-page {
        display: flex;
        width: 100%;
        margin-top: 100px;

        .bottom {
            // background-color: blue;
            width: calc(100% / 3);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;

            padding: 0 20px;

            .image {
                width: 20%;
            }

            hr {
                width: 20%;
            }

            .paragraph {
                font-size: 0.8rem;
            }

            .link-btn {
                color: black;
                text-decoration: none;
                border: 1px solid black;
                padding: 7px 20px;
                font-size: 0.7rem;
                margin-top: 5px;
            }
        }

    }
}
</style>