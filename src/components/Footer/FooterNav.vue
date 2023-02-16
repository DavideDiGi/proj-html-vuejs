<script>

export default {
    name: "FooterNav",
    props: {
        socialMedia: String
    },
}
</script>

<template>


    <li>
        <a href="#">
            <div class="link-box"> {{ socialMedia }}</div>
            <!-- <font-awesome-icon icon="fa-brands fa-twitter" /> -->
        </a>
    </li>

</template>

<style lang="scss" scoped>
.link-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
}
</style>