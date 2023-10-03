<script>

export default {
    name: 'AppHeader',
    props: {
        menu: Object
    }
}

</script>

<template>
    <header id="app_header">
        <nav class="container_90">
            <div class="nav_logo">
                <img src="../assets/img/logo-img-01.png" alt="Logo Everlead">
            </div>
            <div class="nav_menu">
                <ul>
                    <li v-for="item in menu">
                        <a :href="item.url" :class="item.active ? 'active' : ''">{{ item.name }}</a>
                    </li>
                    <li>
                        <a href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a>
                    </li>
                    <li>
                        <a href="#"><font-awesome-icon :icon="['fas', 'list-ul']" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- /#app_header -->
</template>