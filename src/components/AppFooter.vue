<script>

export default {
    name: 'AppFooter',
    data() {
        return {
            about: {
                title: 'about',
                info: 'We created Everlead to effectively become the stepping stone towards meeting all your goals & archeving business success.'
            },
            twitter: {
                title: 'twitter',
                infoList: [
                    `@alusaladinHi  @alusaladin, can you plase submit a ticket at https://t.co/LVE1a3057d and one of our support agent... https://t.co/yk57k1S9b5`,
                    `@HenrySefaBoaky1 Check out our theme Glola which has all necessary elements to build a multi vendor marketplace.  https://t.co/c9BIYx78IL`
                ]
            },
            importantLinks: {
                title: 'important links',
                links: [
                    {
                        name: 'about me',
                        url: '#'
                    },
                    {
                        name: 'about us',
                        url: '#'
                    },
                    {
                        name: 'language packs',
                        url: '#'
                    },
                    {
                        name: 'become a coach',
                        url: '#'
                    },
                    {
                        name: 'monthly events',
                        url: '#'
                    }
                ]
            },
            contacts: {
                title: 'contact me',
                address: {
                    icon: ['fas', 'location-dot'],
                    text: '437 BigBlue Street, NY 10013',
                },
                phone: {
                    icon: ['fas', 'phone'],
                    text: '315 5512-2579',
                },
                email: {
                    icon: ['far', 'envelope'],
                    text: 'everlead@mikado.com',
                }
            }
        }
    }

}

</script>

<template>
    <footer id="app_footer">
        <div id="footer_top">
            <div class="container_70">
                <div class="row">
                    <div class="col-3">
                        <div class="card">
                            <h4 class="title">{{ this.about.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                {{ this.about.info }}
                            </div>
                            <ul class="social">
                                <li>
                                    <a href="#">
                                        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <font-awesome-icon :icon="['fab', 'twitter']" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /.col-3 -->
                    <div class="col-3">
                        <div class="card">
                            <h4 class="title">{{ twitter.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                <ul class="twitter_info">
                                    <li v-for="info in this.twitter.infoList">
                                        {{ info }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-3 -->
                    <div class="col-3">
                        <div class="card">
                            <h4 class="title">{{ this.importantLinks.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                <ul class="useful_links">
                                    <li v-for="link in this.importantLinks.links">
                                        <a :href="link.url">{{ link.name }}</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-3 -->
                    <div class="col-3">
                        <div class="card">
                            <h4 class="title">{{ this.contacts.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                <ul class="contacts">
                                    <li>
                                        <font-awesome-icon :icon="this.contacts.address.icon" />
                                        <span>{{ this.contacts.address.text }}</span>
                                    </li>
                                    <li>
                                        <font-awesome-icon :icon="this.contacts.phone.icon" />
                                        <span>{{ this.contacts.phone.text }}</span>
                                    </li>
                                    <li>
                                        <font-awesome-icon :icon="this.contacts.email.icon" />
                                        <span>{{ this.contacts.email.text }}</span>
                                    </li>
                                    <li>
                                        <form>
                                            <input type="text" placeholder="Your Name">
                                            <button>subscribe</button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-3 -->
                </div>
            </div>
            <!-- /.container -->
        </div>
        <!-- /#footer_top -->
        <div id="footer_bottom">
            <p>Copyright Everlead © MikadoThemes</p>
        </div>
        <!-- /#footer_bottom -->
    </footer>
</template>