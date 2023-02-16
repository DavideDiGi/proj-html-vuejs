<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AppLogo from '../Header/AppLogo.vue';
import AppCopyright from './AppCopyright.vue';
import FooterNav from './FooterNav.vue';

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
    name: 'AppFooter',
    data() {
        return {
            socials: [
                {
                    name: "├"
                    // isActive: "true"
                },
                {
                    name: "🐤",
                },
                {
                    name: "►",
                },
                {
                    name: "📸",
                },
                {
                    name: "⍸",
                }
            ]
        }
    },
    components: {
        AppCopyright,
        FooterNav,
        AppLogo,
        // FontAwesomeIcon
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
                <ul>
                    <FooterNav :socialMedia="socials[index].name" v-for="(social, index) in socials" />
                    <!-- <font-awesome-icon :icon="name" /> -->
                </ul>
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
            }
        }
    }
}
</style>