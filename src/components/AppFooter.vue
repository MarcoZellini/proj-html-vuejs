<script>

export default {
    name: 'AppFooter',
    props: {
        data: Object
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
                            <h4 class="title">{{ data.about.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                {{ data.about.info }}
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
                            <h4 class="title">{{ data.twitter.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                <ul class="twitter_info">
                                    <li v-for="info in data.twitter.infoList">
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
                            <h4 class="title">{{ data.importantLinks.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                <ul class="useful_links">
                                    <li v-for="link in data.importantLinks.links">
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
                            <h4 class="title">{{ data.contacts.title }}</h4>
                            <div class="bar"></div>
                            <div class="info">
                                <ul class="contacts">
                                    <li>
                                        <font-awesome-icon :icon="data.contacts.address.icon" />
                                        <span>{{ data.contacts.address.text }}</span>
                                    </li>
                                    <li>
                                        <font-awesome-icon :icon="data.contacts.phone.icon" />
                                        <span>{{ data.contacts.phone.text }}</span>
                                    </li>
                                    <li>
                                        <font-awesome-icon :icon="data.contacts.email.icon" />
                                        <span>{{ data.contacts.email.text }}</span>
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