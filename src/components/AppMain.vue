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
                                <h1 class="dotted">Our Team</h1>
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
                    <h1 class="dotted">Our specialties</h1>
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
                            <div class="prev" @click="prevImage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:20px">
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

                    <div class="founder_info">
                        <h2 class="name">jason bickford</h2>
                        <small class="role">Founder and Executive Director</small>
                        <div class="divider"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate asperiores
                            explicabo provident rerum ab?
                        </p>
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

        <div id="creative_leader">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="card">
                            <h2>creative leader</h2>
                            <div class="divider"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
                                voluptatibus totam in quae soluta modi? Quae itaque aliquam neque, a recusandae placeat
                                suscipit in eveniet illum. Provident maiores dolor omnis.
                            </p>
                            <a href="#" class="more">read more</a>
                        </div>
                    </div>
                    <!-- /.col6 -->
                    <div class="col-6">
                        <div class="graphics">
                            <div class="graphic_item">
                                <div class="info">
                                    <h6>mentorship</h6>
                                    <h6>78%</h6>
                                </div>
                                <div class="level">
                                    <div class="total_bar"></div>
                                    <!-- /.total_bar -->
                                    <div class="partial_bar w78"></div>
                                    <!-- /.partial_bar -->
                                </div>
                            </div>
                            <div class="graphic_item">
                                <div class="info">
                                    <h6>education</h6>
                                    <h6>95%</h6>
                                </div>
                                <div class="level">
                                    <div class="total_bar"></div>
                                    <!-- /.total_bar -->
                                    <div class="partial_bar w95"></div>
                                    <!-- /.partial_bar -->
                                </div>
                            </div>
                            <div class="graphic_item">
                                <div class="info">
                                    <h6>learning</h6>
                                    <h6>65%</h6>
                                </div>
                                <div class="level">
                                    <div class="total_bar"></div>
                                    <!-- /.total_bar -->
                                    <div class="partial_bar w65"></div>
                                    <!-- /.partial_bar -->
                                </div>
                            </div>
                            <div class="graphic_item">
                                <div class="info">
                                    <h6>motivation</h6>
                                    <h6>83%</h6>
                                </div>
                                <div class="level">
                                    <div class="total_bar"></div>
                                    <!-- /.total_bar -->
                                    <div class="partial_bar w83"></div>
                                    <!-- /.partial_bar -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.col6 -->
                </div>
            </div>
        </div>
        <!-- /#creative_leader -->

        <div id="latest_news">
            <div class="slider container_90">
                <div class="container">
                    <h1 class="dotted">Latest News</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="divider"></div>
                    <div class="row slider">
                        <div class="col-4">
                            <div class="card">
                                <img class="img-fluid" src="../assets/img/h1-blog-img-03.jpg" alt="">
                                <small>
                                    <font-awesome-icon :icon="['far', 'fa-clock']" />
                                    <span>May 5, 2019</span>
                                </small>
                                <small>
                                    <font-awesome-icon :icon="['far', 'user']" />
                                    <span>Amanda Doe</span>
                                </small>
                                <h4>next investment</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat soluta quod
                                    voluptatibus.
                                </p>
                                <a href="#" class="more">read more</a>
                            </div>
                        </div>
                        <!-- /.col-4 -->
                        <div class="col-4">
                            <div class="card">
                                <img class="img-fluid" src="../assets/img/h1-blog-img-04.jpg" alt="">
                                <small>
                                    <font-awesome-icon :icon="['far', 'fa-clock']" />
                                    <span>May 5, 2019</span>
                                </small>
                                <small>
                                    <font-awesome-icon :icon="['far', 'user']" />
                                    <span>Amanda Doe</span>
                                </small>
                                <h4>team building</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat soluta quod
                                    voluptatibus.
                                </p>
                                <a href="#" class="more">read more</a>
                            </div>
                        </div>
                        <!-- /.col-4 -->
                        <div class="col-4">
                            <div class="card">
                                <img class="img-fluid" src="../assets/img/h1-blog-img-01.jpg" alt="">
                                <small>
                                    <font-awesome-icon :icon="['far', 'fa-clock']" />
                                    <span>May 5, 2019</span>
                                </small>
                                <small>
                                    <font-awesome-icon :icon="['far', 'user']" />
                                    <span>Amanda Doe</span>
                                </small>
                                <h4>new business day</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat soluta
                                    quod voluptatibus.
                                </p>
                                <a href="#" class="more">read more</a>
                            </div>
                        </div>
                        <!-- /.col-4 -->
                    </div>
                </div>
                <div class="commands container_90">
                    <div class="prev" @click="prevImage"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            style="height:20px">
                            <path
                                d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                        </svg>
                    </div>
                    <div class="next" @click="nextImage"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            style="height:20px">
                            <path
                                d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                        </svg>
                    </div>
                </div>
                <!-- /.commands -->
            </div>

        </div>
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
    </main>
</template>