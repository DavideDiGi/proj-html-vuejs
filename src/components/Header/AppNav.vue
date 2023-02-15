<script>
export default {
    name: 'AppNav',
    props: {
        link: String,
        activity: String
    }
}
</script>

<template>

    <li><a href="#" v-bind:class="{ active: activity }">{{ link }}</a></li>

</template>

<style lang="scss " >

li{
    a{
        text-decoration: none;
        color: lightgray;
    }
    a:hover:not(.active) {
        text-decoration: underline;
        color: white;
    }
    
}
.active {
    color: white;
}


</style>