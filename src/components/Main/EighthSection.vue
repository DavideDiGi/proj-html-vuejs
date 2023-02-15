<script>
export default {
    name: 'EighthSection',
}
</script>

<template>
    <section class="section-containerS py-5">
        <div class="menu-container d-flex pt-5">

            <div class="first page">
                <h3 class="pb-5">HORS D'OEUVRES</h3>
                <div class="menu-voice" v-for="voice in 4">
                    <div class="title-price d-flex justify-content-between">
                        <h5>AHI SALMON NIGIRI</h5>
                        <span>$48</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, non?</p>
                    <br>
                </div>
            </div>

            <div class="second page">
                <h3 class="pb-5">MAIN COURSE</h3>
                <div class="menu-voice" v-for="voice in 4">
                    <div class="title-price d-flex justify-content-between">
                        <h5>BRAISED ABALONE</h5>
                        <span>$52</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, non?</p>
                    <br>
                </div>
            </div>
            <div class="third page">
                <h3 class="pb-5">DESSERTS</h3>
                <div class="menu-voice" v-for="voice in 4">
                    <div class="title-price d-flex justify-content-between">
                        <h5>CHOCOLATE BALL CAKE</h5>
                        <span>$13</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, non?</p>
                    <br>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 105vh;
}

.menu-container {
    width: 90%;
    height: 100%;
    margin: 0 auto;

    .page {
        max-height: 95%;
        width: calc(100% / 3);
        background-color: lightgray;
        padding: 50px;
        align-self: flex-end;
    }

    .second.page {
        background-color: black;
        background-image: url('../../assets/img/misc22x.jpg');
        background-size: cover;
        background-repeat: no-repeat;


        color: white;
        align-self: flex-start;
    }
}
</style>