<script>
export default {
    name: 'FooterNav',
}
</script>

<template>

    <ul>

        <li>
            <a class="active" href="#">
                <div class="link-box">F</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="link-box">T</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="link-box">Y</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="link-box">I</div>
            </a>
        </li>

        <li>
            <a href="#">
                <div class="link-box">L</div>
            </a>
        </li>

    </ul>

</template>

<style lang="scss" scoped>
ul {
    padding: 0;
    width: 75%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    font-size: 0.9rem;

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
}
</style>