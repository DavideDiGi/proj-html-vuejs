<script>

export default {
    name: 'CallToAction',
}
</script>

<template>
    <div class="cta-container">

        <div class="lil-title">

            <span class="line">-----</span>
            <span class="">THE BEST TABLE IN TOWN</span>

        </div>
        <div class="call-to-action">

            <div class="adv">
                <h1>FINE DINING EXPERIENCE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores odio. Assumenda
                    ratione
                    ducimus natus.</p>
                <a href="#">EXPLORE THE MENU</a>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.cta-container {
    width: 40%;
    padding-bottom: 100px;

    .lil-title {
        width: 75%;
        margin: 0 auto;
        margin-bottom: 30px;
        color: lightgray;
        font-size: 0.7rem;


        .line {
            margin-right: 45px;
        }
    }

    .call-to-action {
        width: 50%;
        margin: 0 auto;
        color: gray;

        .adv {

            h1 {
                color: white;
                padding-bottom: 20px;
                font-size: 2.8rem;
                line-height: 3.7rem;
            }

            p {
                font-size: 0.9rem;
            }

            a {
                display: inline-block;
                background-color: black;
                text-decoration: none;
                border: 1px solid gray;
                color: lightgray;
                padding: 8px 25px;
                font-size: 0.7rem;
                margin-top: 20px;

                &:hover {
                    background-color: white;
                    color: gray;
                }
            }
        }
    }
}
</style>