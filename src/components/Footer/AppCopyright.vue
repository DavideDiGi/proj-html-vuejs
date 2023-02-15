<script>
export default {
    name: 'AppCopyright',
}
</script>

<template>
    <div class="copyright bg-black text-center py-4">
        <div>Copyright 2012 - 2019 Avada | All Rights Reserved by <span>WordPress</span> | <span>ThemeFusion</span>
        </div>
        <div class="go-up bg-dark"><a href="#">&and;</a></div>
    </div>
</template>

<style lang="scss" scoped>
.copyright {
    font-size: 0.6rem;
    color: grey;
    position: relative;

    span {
        color: lightgray;
    }

    .go-up {
        width: 30px;
        padding: 5px;
        position: absolute;
        bottom: 0;
        right: 50px;

        a {
            color: white;
            font-size: 0.7rem;
            text-decoration: none;
        }
    }
}
</style>