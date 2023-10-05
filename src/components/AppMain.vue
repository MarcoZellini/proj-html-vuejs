<script>
import AppHero from './AppHero.vue'
import AppSpecialties from './AppSpecialties.vue'
import AppFounder from './AppFounder.vue'
import AppEvents from './AppEvents.vue'
import AppLeader from './AppLeader.vue'
import AppNews from './AppNews.vue'
import AppTestimonials from './AppTestimonials.vue'
import AppPresentation from './AppPresentation.vue'
import AppContacts from './AppContacts.vue'
import AppBrands from './AppBrands.vue'
import BackTo from './BackTo.vue'

export default {
    name: 'AppMain',

    components: {
        AppHero,
        AppSpecialties,
        AppFounder,
        AppEvents,
        AppLeader,
        AppNews,
        AppTestimonials,
        AppPresentation,
        AppContacts,
        AppBrands,
        BackTo
    }
}

</script>

<template>
    <main id="app_main">

        <AppHero />
        <!-- /#hero -->

        <AppSpecialties />
        <!-- /#specialties -->

        <AppFounder />
        <!-- /#founder -->

        <AppEvents />
        <!-- /#upcoming_events -->

        <AppLeader />
        <!-- /#creative_leader -->

        <AppNews />
        <!-- /#latest_news -->

        <AppTestimonials />
        <!-- /#testimonials -->

        <AppPresentation />
        <!-- /#presentation -->

        <AppContacts />
        <!-- /#contact_us -->

        <AppBrands />
        <!-- /#brands -->

        <BackTo />
        <!-- /.back_to -->
    </main>
</template>