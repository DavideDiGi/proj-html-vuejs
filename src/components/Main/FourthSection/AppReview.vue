<script>
export default {
    name: 'AppReview',
    props: {
        abalonePrice: String,
        userName: String,
        newsPaperName: String,
        firstParag: String,
        secondParag: String,
        buttonText: String
    }
}
</script>

<template>
    <div class="review-container">

        <div class="review">

            <div class="review-content">
                <div class="user-name pb-3">{{ userName }}</div>
                <div class="d-flex">
                    <h1>{{ newsPaperName }}</h1>
                    <div class="price mt-3">{{ abalonePrice }}</div>
                </div>
                <span class="pb-3 stars" v-for="star in 5"><font-awesome-icon icon="fa-solid fa-star" />
                </span>
                <hr>
                <p>{{ firstParag }}</p>
                <p>{{ secondParag }}</p>
                <a href="#">{{ buttonText }}</a>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
.review-container {
    width: 40%;
    padding-bottom: 120px;

    .review {
        width: 60%;
        margin: 0 auto;
        color: gray;

        .review-content {
            width: 100%;

            .user-name {
                font-size: 0.8rem;
            }

            .price {
                font-size: 0.8rem;
                height: 20px;
                margin-left: -50px;
            }

            h1 {
                min-width: 120%;
                color: white;
                padding-bottom: 20px;
                font-size: 2rem;
                line-height: 3.7rem;
            }

            .stars {
                margin-right: 5px;
                color: white;
            }

            hr {
                width: 18%;
                height: 20px;
                color: white;
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