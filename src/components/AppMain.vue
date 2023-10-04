<script>

export default {
    name: 'AppMain',
    data() {
        return {
            sliderIntervalID: null,
            indexActiveSlide: 0,
            slides: [
                '03.jpg',
                '02.png',
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/rev-slider-main-home-img-${name}`, import.meta.url).href
        },
        nextImage() {
            if (this.indexActiveSlide < this.slides.length - 1) {
                this.indexActiveSlide++;
            } else {
                this.indexActiveSlide = 0;
            }
        },
        prevImage() {
            if (this.indexActiveSlide > 0) {
                this.indexActiveSlide--;
            } else {
                this.indexActiveSlide = this.slides.length - 1;
            }
        },
        startSlider() {
            this.sliderIntervalID = setInterval(() => {
                this.nextImage();
            }, 4000);
        },
        stopSlider() {
            clearInterval(this.sliderIntervalID);
        }
    },
    mounted() {
        this.startSlider();
    }
}

</script>

<template>
    <main id="app_main">
        <section id="hero">
            <div class="slider" @mouseover="this.stopSlider" @mouseleave="this.startSlider">
                <img class="img-fluid" :src="getImageUrl(this.slides[this.indexActiveSlide])" alt="">
                <div class="commands container_90">
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
                <div class="container">
                    <div class="row">
                        <div class="col-7">
                            <div class="hero_content">
                                <h1>Our Team</h1>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem
                                    architecto
                                    rem
                                    cupiditate rerum cumque qui molestias porro modi? Iure quae blanditiis neque eius id
                                    omnis
                                    fugit sed
                                    iusto quidem!
                                </p>
                                <div class="links">
                                    <a href="#"><span class="text">read more</span><span class="arrow">&rarr;</span></a>
                                    <a href="#"><span class="text">purchase</span><span class="arrow">&rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        <!-- /#hero -->
        <section id="specialties">
            <div class="container_90">
                <div class="container">
                    <h1>Our specialties</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="divider"></div>
                    <div class="row">
                        <div class="col-3">
                            <div class="card">
                                <img class="img-fluid" src="../assets/svg/svg-0.svg" alt="">
                                <h6>Knowing</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <!-- /.col-3 -->
                        <div class="col-3">
                            <div class="card">
                                <img class="img-fluid" src="../assets/svg/svg-1.svg" alt="">
                                <h6>Selling</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <!-- /.col-3 -->
                        <div class="col-3">
                            <div class="card">
                                <img class="img-fluid" src="../assets/svg/svg-2.svg" alt="">
                                <h6>Learning</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <!-- /.col-3 -->
                        <div class="col-3">
                            <div class="card">
                                <img class="img-fluid" src="../assets/svg/svg-3.svg" alt="">
                                <h6>Contact</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <!-- /.col-3 -->
                    </div>
                </div>
            </div>
        </section>
        <!-- /#specialties -->
        <section id="founder">
            <div class="container">
                <div class="row">

                    <div class="slider">
                        <img class="img-fluid" src="../assets/img/h1-img-01.jpg" alt="">
                        <div class="commands container_90">
                            <div class="prev" @click="prevImage"><svg xmlns="http://www.w3.org/2000/svg" width="32"
                                    height="32" style="height:20px">
                                    <path
                                        d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                                </svg></div>
                            <div class="next" @click="nextImage"><svg xmlns="http://www.w3.org/2000/svg" width="32"
                                    height="32" style="height:20px">
                                    <path
                                        d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                                </svg></div>
                        </div>
                    </div>


                    <div class="founder_info">
                        <h2 class="name">jason bickford</h2>
                        <small class="role">Founder and Executive Director</small>
                        <div class="divider"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate asperiores
                            explicabo provident rerum ab?</p>
                        <div class="social">
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
                </div>
            </div>
        </section>
        <!-- /#founder -->
        <div id="upcoming_events">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <div class="card">
                            <h3>upcoming events</h3>
                            <div class="event">
                                <div class="date">
                                    <small class="day">07</small>
                                    <!-- /.day -->
                                    <small class="rest_of_date">jan, 2022</small>
                                    <!-- /.rest_of_date -->
                                </div>
                                <div class="event_info">
                                    <h6 class="event_name">Melbourne Coaching</h6>
                                    <!-- /.event_name -->
                                    <ul>
                                        <li class="full_date">
                                            <font-awesome-icon :icon="['far', 'clock']" />
                                            <span>9:00 ap - 5:00 pm, Jan 7, 2022</span>
                                        </li>
                                        <li class="location">
                                            <font-awesome-icon :icon="['fas', 'location-dot']" />
                                            <span>Cambridge, MA 02138, USA</span>
                                        </li>
                                        <li>
                                            <a href="#" class="more">read more</a>
                                        </li>
                                    </ul>
                                    <!-- /.more -->
                                </div>
                            </div>
                            <div class="event">
                                <div class="date">
                                    <small class="day">11</small>
                                    <!-- /.day -->
                                    <small class="rest_of_date">jan, 2022</small>
                                    <!-- /.rest_of_date -->
                                </div>
                                <div class="event_info">
                                    <h6 class="event_name">new york coaching</h6>
                                    <!-- /.event_name -->
                                    <ul>
                                        <li class="full_date">
                                            <font-awesome-icon :icon="['far', 'clock']" />
                                            <span>9:00 ap - 5:00 pm, Jan 11, 2022</span>
                                        </li>
                                        <li class="location">
                                            <font-awesome-icon :icon="['fas', 'location-dot']" />
                                            <span>Cambridge, MA 02138, USA</span>
                                        </li>
                                        <li>
                                            <a href="#" class="more">read more</a>
                                        </li>
                                    </ul>
                                    <!-- /.more -->
                                </div>
                            </div>
                            <div class="event">
                                <div class="date">
                                    <small class="day">21</small>
                                    <!-- /.day -->
                                    <small class="rest_of_date">jan, 2022</small>
                                    <!-- /.rest_of_date -->
                                </div>
                                <div class="event_info">
                                    <h6 class="event_name">london coaching</h6>
                                    <!-- /.event_name -->
                                    <ul>
                                        <li class="full_date">
                                            <font-awesome-icon :icon="['far', 'clock']" />
                                            <span>9:00 ap - 5:00 pm, Jan 21, 2022</span>
                                        </li>
                                        <li class="location">
                                            <font-awesome-icon :icon="['fas', 'location-dot']" />
                                            <span>Cambridge, MA 02138, USA</span>
                                        </li>
                                        <li>
                                            <a href="#" class="more">read more</a>
                                        </li>
                                    </ul>
                                    <!-- /.more -->
                                </div>
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col5 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </div>
        <!-- /#upcoming_events -->
    </main>
</template>