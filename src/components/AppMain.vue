<script>
import AppHero from './AppHero.vue'
import AppSpecialties from './AppSpecialties.vue'
import AppFounder from './AppFounder.vue'
import AppEvents from './AppEvents.vue'
import AppLeader from './AppLeader.vue'
import AppNews from './AppNews.vue'

export default {
    name: 'AppMain',

    components: {
        AppHero,
        AppSpecialties,
        AppFounder,
        AppEvents,
        AppLeader,
        AppNews
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

        <div id="testimonials">
            <h1>testimonials</h1>
            <div class="slider container_90">
                <div class="container">
                    <div class="card">
                        <img src="../assets/img/h3-img-04.png" alt="">
                        <h5>cynthia clark</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium asperiores quis repellat
                            eius, ad suscipit molestias temporibus quos.
                        </p>
                        <div class="slider_menu">
                            <div>01</div>
                            <div class="slider_bars">
                                <div class="bar active"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>
                            <div>03</div>
                        </div>
                    </div>
                </div>
                <!-- /.container -->
                <div class="commands">
                    <div class="prev" @click="prevImage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:20px;">
                            <path
                                d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                        </svg>
                    </div>
                    <div class="next" @click="nextImage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:20px">
                            <path
                                d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                        </svg>
                    </div>
                </div>
            </div>
            <!-- /.slider container_90 -->
        </div>
        <!-- /#testimonials -->

        <div id="presentation">
            <img class="img-fluid" src="../assets/img/h1-img-04.jpg" alt="">
            <div class="play">
                <font-awesome-icon :icon="['fas', 'play']" size="2xl" />
            </div>
        </div>
        <!-- /#presentation -->

        <div id="contact_us">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="card">
                            <img class="img-fluid" src="../assets/img/h1-contact-rev-01.png" alt="">
                            <img class="plus plus_1" src="../assets/img/h1-contact-rev-02.png" alt="plus">
                            <div class="info">
                                <h6>new york coaching</h6>
                                <div class="more">read more</div>
                            </div>
                            <img class="plus plus_2" src="../assets/img/h1-contact-rev-02.png" alt="plus">
                            <img class="plus plus_3" src="../assets/img/h1-contact-rev-02.png" alt="plus">
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-6 -->
                    <div class="col-6">
                        <div class="card">
                            <h2 class="dotted">Contact us</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div class="divider"></div>
                            <form>
                                <input type="text" placeholder="Your Name">
                                <input type="text" placeholder="Your Email">
                                <textarea placeholder='Write a message'></textarea>
                                <button type="submit">
                                    <span class="text">send</span>
                                    <span class="arrow">&rarr;</span>
                                </button>

                            </form>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-6 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </div>
        <!-- /#contact_us -->

        <div id="brands">
            <div class="container">
                <div class="row row-cols-5">
                    <div class="col">
                        <div class="card">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-03.png" alt="">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-04-1.png" alt="">
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <div class="card">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-05.png" alt="">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-06-1.png" alt="">
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <div class="card">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-07.png" alt="">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-08-1.png" alt="">
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <div class="card">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-09.png" alt="">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-10-1.png" alt="">
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <div class="card">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-01.png" alt="">
                            <img class="img-fluid" src="../assets/img/h4-clients-img-02.png" alt="">
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </div>
        <!-- /#brands -->
        <a href="#" class="back_to">
            <svg xmlns="http://www.w3.org/2000/svg" width="32">
                <path
                    d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
            </svg>
        </a>
    </main>
</template>