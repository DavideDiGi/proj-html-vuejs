<script>

export default {
    name: 'CallToAction',
}
</script>

<template>

    <div class="left-hero px-5">
        <div class="call-to-action">
            <span class="line">-----</span>
            <span class="lil-title ms-5">THE BEST TABLE IN TOWN</span>

            <div class="adv">
                <h1>FINE DINING EXPERIENCE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores odio. Assumenda ratione
                    ducimus natus.</p>
                <a href="">EXPLORE THE MENU</a>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.left-hero {
    width: 40%;

    .call-to-action {
        color: gray;
        padding-bottom: 100px;

        .line {
            margin-left: 20px;
        }

        .lil-title {
            font-size: 0.7rem;
        }

        .adv {
            width: 56%;
            margin: 0 auto;
            margin-top: 35px;

            h1 {
                color: white;
                padding-bottom: 20px;
                font-size: 2.8rem;
                line-height: 3.7rem;
            }

            p {
                font-size: 0.8rem;
            }

            a {
                display: inline-block;
                background-color: black;
                text-decoration: none;
                border: 1px solid gray;
                color: lightgray;
                padding: 7px 25px;
                font-size: 0.6rem;
                margin-top: 20px;

                &:hover {
                    background-color: white;
                    color: gray;
                }
            }
        }
    }
}

// }
</style>