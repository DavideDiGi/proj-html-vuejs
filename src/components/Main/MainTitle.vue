<script>

export default {
    name: 'MainTitle',
    props: {
        headingText: String
    }
}
</script>

<template>

    <h2>{{ headingText }}</h2>
    <br>
    <hr>

</template>

<style lang="scss" scoped>
h2 {
    font-weight: 300;
}

hr {
    width: 5%;
    margin: 0 auto;
}
</style>