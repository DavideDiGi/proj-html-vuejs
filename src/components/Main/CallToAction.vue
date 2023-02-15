<script>
import { stringifyExpression } from '@vue/compiler-core';


export default {
    name: 'CallToAction',
    props: {
        lilHeading: String,
        heading: String,
        parag: String,
        buttonText: String
    }
}
</script>

<template>
    <div class="cta-container">

        <div class="lil-title">

            <span class="line">-----</span>
            <span class="">{{ lilHeading }}</span>

        </div>
        <div class="call-to-action">

            <div class="adv">
                <h1>{{ heading }}</h1>
                <p>{{ parag }}</p>
                <a href="#">{{ buttonText }}</a>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
.cta-container {
    width: 40%;
    padding-bottom: 100px;
    padding-top: 150px;

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
                min-width: 120%;
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