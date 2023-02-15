<script>
export default {
    name: 'AppReview',
    props: {
        userName: String,
        newsPaperName: String,
        reviewStars: String,
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
                <h1>{{ newsPaperName }}</h1>
                <div class="pb-3">{{ reviewStars }}</div>
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
        width: 50%;
        margin: 0 auto;
        color: gray;

        .review-content {

            .user-name {
                font-size: 0.8rem;
            }

            h1 {
                min-width: 120%;
                color: white;
                padding-bottom: 20px;
                font-size: 2.3rem;
                line-height: 3.7rem;
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