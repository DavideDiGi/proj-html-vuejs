<script>
export default {
    name: 'AppNav',
}
</script>

<template>

    <nav class="px-5 h-100">

        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Culinary History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">COur Menu</a></li>
            <li><a href="#">Takeout</a></li>
            <li><a href="#">Bulletin</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">chart</a></li>
        </ul>

    </nav>

</template>

<style lang="scss" scoped>
nav {

    ul {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        font-size: 0.9rem;

        .active {
            color: white;
        }

        a {
            text-decoration: none;
            color: lightgray;
        }

        a:hover:not(.active) {
            text-decoration: underline;
            color: white;
        }

    }
}
</style>