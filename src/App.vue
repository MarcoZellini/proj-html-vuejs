<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import { headerData } from './header.js'
import { footerData } from './footer.js'

export default {
    name: 'App',
    data() {
        return {
            headerData,
            footerData
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }

}
</script>

<template>
    <AppHeader :menu="this.headerData" />
    <!-- /#app_header -->

    <AppMain />
    <!-- /#app_main -->

    <AppFooter :data="footerData" />
    <!-- /#app_footer -->
</template>

<style></style>