<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',

    components: {
        AppHeader,
        AppFooter
    }

}
</script>

<template>
    <AppHeader />
    <!-- /#app_header -->

    <main id="app_main">

    </main>
    <!-- /#app_main -->

    <AppFooter />
    <!-- /#app_footer -->
</template>

<style></style>