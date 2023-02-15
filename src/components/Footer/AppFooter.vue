<script>
import AppLogo from '../Header/AppLogo.vue';
import AppCopyright from './AppCopyright.vue';
import FooterNav from './FooterNav.vue';

export default {
    name: 'AppFooter',
    components: {
        AppCopyright,
        FooterNav,
        AppLogo
    }
}
</script>

<template>

    <footer>

        <div class="footer-content">

            <div class="logo">
                <AppLogo />
            </div>

            <p>Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Quam eu
                proin
                sit massa
                condimentum.
            </p>

            <nav>
                <FooterNav />
            </nav>

        </div>

    </footer>

    <AppCopyright />

</template>

<style lang="scss" scoped>
footer {
    height: 450px;
    background-image: url('../../assets/img/footer2x.jpg');
    background-size: cover;
    background-position: center;

    .footer-content {
        width: 40%;
        margin: 0 auto;
        padding-top: 90px;

        .logo {
            width: 40%;
            margin: 0 auto;

            &>:only-child {
                width: 100%;
            }
        }

        p {
            padding-top: 40px;
            padding-bottom: 40px;
            width: 80%;
            margin: 0 auto;
            color: gray;
            text-align: center;

        }

        nav {
            width: 60%;
            height: 50px;
            margin: 0 auto;
        }
    }
}
</style>