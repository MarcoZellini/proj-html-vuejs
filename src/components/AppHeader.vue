<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            menuItem: [
                {
                    name: 'homes',
                    url: '#',
                    active: true
                },
                {
                    name: 'pages',
                    url: '#',
                    active: false
                },
                {
                    name: 'blog',
                    url: '#',
                    active: false
                },
                {
                    name: 'shop',
                    url: '#',
                    active: false
                },
                {
                    name: 'events',
                    url: '#',
                    active: false
                },
                {
                    name: 'elements',
                    url: '#',
                    active: false
                },
            ]
        }
    }
}

</script>

<template>
    <header id="app_header">
        <nav>
            <div class="nav_logo">
                <img src="./assets/img/logo-img-01.png" alt="Logo Everlead">
            </div>
            <div class="nav_menu">
                <ul>
                    <li v-for="item in menuItem"><a href="item.url" :class="item.active ? 'active' : ''">{{ item.name }}</a>
                    </li>
                    <li><a href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a></li>
                    <li><a href="#"><font-awesome-icon :icon="['fas', 'list-ul']" /></a></li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- /#app_header -->
</template>