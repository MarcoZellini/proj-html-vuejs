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
                    <div class="prev" @click="prevImage">&larr;</div>
                    <div class="next" @click="nextImage">&rarr;</div>
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
    </main>
</template>